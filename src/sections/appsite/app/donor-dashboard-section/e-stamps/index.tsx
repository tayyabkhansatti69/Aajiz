import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { Box, Button, Card, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image"; // Distinguishing from the global Image
import { useRouter } from "next/navigation";
import { QRCodeCanvas } from "qrcode.react";
import eStampLogo from "../../../../../assets/image/eStamp_logo.png";
import { useEffect, useRef, useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

interface EStamp {
  id: number;
  industry_logo: string;
  stamp_num: string;
}

interface EStampsProps {
  eStampData: {
    stamps: EStamp[];
  };
}

export function EStamps({ eStampData }: EStampsProps) {
  const router = useRouter();
  const gridContainerRef = useRef<HTMLDivElement>(null);
  const [pdfDownloaded, setPdfDownloaded] = useState(false);
  const [preloadedData, setPreloadedData] = useState<EStamp[]>([]);

  // Helper function to check if all images are loaded
  const ensureImagesLoaded = async (container: HTMLElement) => {
    const images = Array.from(container.getElementsByTagName("img"));
    await Promise.all(
      images.map((img) => {
        return new Promise<void>((resolve) => {
          if (img.complete) {
            resolve();
          } else {
            img.onload = () => resolve();
            img.onerror = () => {
              console.error(`Image failed to load: ${img.src}`); // Logging image load failure
              resolve(); // Resolve even if image fails to load
            };
          }
        });
      })
    );
  };

  const toBase64 = (url: string): Promise<string> => {
    return new Promise((resolve, reject) => {
      const img = new window.Image();
      img.crossOrigin = "Anonymous";
      img.src = url;

      img.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext("2d");

        if (ctx) {
          ctx.drawImage(img, 0, 0);
          resolve(canvas.toDataURL("image/png"));
        } else {
          reject(new Error("Canvas context not available"));
        }
      };

      img.onerror = () => {
        console.error(`Failed to load image: ${url}`); // Logging load failure
        reject(new Error("Failed to load image"));
      };
    });
  };

  // Preload all industry logos as base64
  useEffect(() => {
    const preloadLogos = async () => {
      const stampsWithBase64 = await Promise.all(
        eStampData.stamps.map(async (item) => {
          try {
            const industryLogoBase64 = await toBase64(item.industry_logo);
            return { ...item, industry_logo: industryLogoBase64 }; // Replace URL with Base64
          } catch (error) {
            console.error(`Failed to convert logo for ${item.id}:`, error);
            return { ...item, industry_logo: item.industry_logo }; // Fallback to original
          }
        })
      );
      setPreloadedData(stampsWithBase64);
    };

    preloadLogos();
  }, [eStampData]);

  useEffect(() => {
    const generatePdf = async () => {
      if (pdfDownloaded || !gridContainerRef.current) return;

      const pdf = new jsPDF("p", "mm", "a4");
      const a4Width = 210;
      const a4Height = 297;
      const margin = 5;
      const rowPadding = 10;
      const itemsPerRow = 2;
      const itemsPerPage = 4;

      const stampElements = gridContainerRef.current.children;
      let currentHeight = margin;
      let itemsOnCurrentPage = 0;

      for (let i = 0; i < preloadedData.length; i++) {
        const stampElement = stampElements[i] as HTMLElement;

        // Ensure images are fully loaded
        await ensureImagesLoaded(stampElement);
        console.log(stampElement ,"stampElement");

        const canvas = await html2canvas(stampElement, { scale: 2, useCORS: true });
        const imgData = canvas.toDataURL("image/png");

        const imgProps = pdf.getImageProperties(imgData);
        const pdfWidth = (a4Width - margin * 3) / itemsPerRow;
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

        if (currentHeight + pdfHeight > a4Height - margin) {
          pdf.addPage();
          currentHeight = margin;
          itemsOnCurrentPage = 0;
        }

        const xPosition = margin + (itemsOnCurrentPage % itemsPerRow) * (pdfWidth + margin);
        pdf.addImage(imgData, "PNG", xPosition, currentHeight, pdfWidth, pdfHeight);

        if (itemsOnCurrentPage % itemsPerRow === itemsPerRow - 1) {
          currentHeight += pdfHeight + rowPadding;
        }

        itemsOnCurrentPage++;

        if (itemsOnCurrentPage === itemsPerPage) {
          pdf.addPage();
          currentHeight = margin;
          itemsOnCurrentPage = 0;
        }
      }

      pdf.save("eStamp-cards.pdf");
      setPdfDownloaded(true);
    };

    if (!pdfDownloaded && preloadedData.length > 0) {
      generatePdf();
    }
  }, [preloadedData, pdfDownloaded]);

  return (
    <Stack>
      <Button
        variant="text"
        startIcon={<KeyboardBackspaceIcon />}
        sx={{ mr: "auto" }}
        onClick={() => {
          router.push("/dashboard");
        }}
      >
        Back
      </Button>
      <Card sx={{ p: 2, height: "80vh", overflow: "scroll" }}>
        <Grid container px={2} spacing={2} ref={gridContainerRef}>
          {preloadedData.map((item) => (
            <Grid item xl={3} md={6} xs={12} key={item.id}>
              <Card
                sx={{
                  backgroundColor: "primary.main",
                  width: "fit-content",
                  m: "auto",
                }}
              >
                <Stack textAlign="center" rowGap={4} py={3} px={8}>
                  <Box>
                    <Image src={eStampLogo} alt="Aajiz e-Stamp" />
                  </Box>
                  <Typography color="white">Stamp QR Code</Typography>
                  <Card sx={{ width: "fit-content", p: 1, m: "auto" }}>
                    <QRCodeCanvas value={item.stamp_num} />
                  </Card>
                  <Typography variant='body1' color="white">{item.stamp_num}</Typography>
                  <Box>
                    <Image
                      src={item.industry_logo} // This should now be Base64
                      alt="Industry Type"
                      width={50}
                      height={50}
                      
                    />
                  </Box>
                </Stack>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Card>
    </Stack>
  );
}
