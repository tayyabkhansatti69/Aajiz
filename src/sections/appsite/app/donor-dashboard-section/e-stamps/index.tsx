import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { Box, Button, Card, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { QRCodeCanvas } from "qrcode.react";
import eStampLogo from "../../../../../assets/image/eStamp_logo.png";
import { useEffect, useRef, useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export function EStamps({ eStampData }: any) {
  const router = useRouter();
  const gridContainerRef = useRef(null);
  const [pdfDownloaded, setPdfDownloaded] = useState(false); // State to track if PDF is downloaded

  useEffect(() => {
    const generatePdf = async () => {
      if (pdfDownloaded) return; // Prevent PDF from generating again

      const pdf = new jsPDF("p", "mm", "a4");
      const a4Width = 210; // A4 width in mm
      const a4Height = 297; // A4 height in mm
      const margin = 10; // Margin for the PDF
      const rowHeight = 70; // Approximate height of each row in mm
      const rowPadding = 5;

      if (gridContainerRef.current) {
        const gridElement = gridContainerRef.current;
        const canvas = await html2canvas(gridElement, { scale: 2 });
        const imgData = canvas.toDataURL("image/png");

        // Calculate scaling factor to fit 4 cards per row and adjust height
        const imgProps = pdf.getImageProperties(imgData);
        const pdfWidth = a4Width - margin * 2; // Width of content minus margins
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

        // Split into rows and fit into the A4 size
        let currentHeight = margin;

        for (let row = 0; row < eStampData.length / 4; row++) {
          if (currentHeight + rowHeight > a4Height - margin) {
            pdf.addPage(); // Create new page if row exceeds page height
            currentHeight = margin; // Reset height for new page
          }

          pdf.addImage(
            imgData,
            "PNG",
            margin,
            currentHeight,
            pdfWidth,
            pdfHeight
          );
          currentHeight += rowHeight + rowPadding; // Move to the next row position
        }

        // Automatically download the PDF and mark it as downloaded
        pdf.save("eStamp-cards.pdf");
        setPdfDownloaded(true); // Set state to true to avoid re-downloading
      }
    };
    // Function to generate PDF

    if (!pdfDownloaded) {
      // Only generate the PDF if it hasn't been downloaded yet
      generatePdf();
    }
  }, [eStampData, pdfDownloaded]); // Include pdfDownloaded in dependencies

  return (
    <Stack>
      <Button
        variant="text"
        startIcon={<KeyboardBackspaceIcon />}
        sx={{ mr: "auto" }}
        onClick={() => {
          router.push("/donor-dashboard");
        }}
      >
        Back
      </Button>
      <Card sx={{ p: 2, height: "80vh" }}>
        <Grid container px={2} pt={2} ref={gridContainerRef}>
          {eStampData.map((items) => (
            <Grid item md={3} key={items?.id}>
              {/* Ref points to the element to convert to PDF */}
              <Card
                sx={{ backgroundColor: "primary.main", width: "fit-content" }}
              >
                <Stack textAlign="center" rowGap={4} py={3} px={8}>
                  <Box>
                    <Image src={eStampLogo} alt="Aajiz e-Stamp" />
                  </Box>
                  <Typography color="white">Stamp QR Code</Typography>
                  <Card sx={{ width: "fit-content", p: 1, m: "auto" }}>
                    <QRCodeCanvas value={items?.id} />
                  </Card>
                  <Box>
                    <Image src={""} alt="Industry Type" />
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
