import CustomPagination from "@/src/components/custom-pagination";
import { useGetActiveCampaignsQuery } from "@/src/services/donor/donor-dashboard/donor-dashboard";
import {
    Box,
  Button,
  Card,
  CardMedia,
  Grid2,
  Skeleton,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { useRouter } from "next/navigation";
import { useState } from "react";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 5,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[200],
    ...theme.applyStyles("dark", {
      backgroundColor: theme.palette.grey[800],
    }),
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: "#0b767a",
    ...theme.applyStyles("dark", {
      backgroundColor: "#0b767a",
    }),
  },
}));

export const DonorsAllCampaigns = () => {
  
    const [params, setParams] = useState({
      offset: 0,
      limit: 10,
    });
  const router = useRouter();
  const { data: trustedPartnersData, isLoading: DonorLoading } =
    useGetActiveCampaignsQuery(params);
    const formatNumber = (num: number): string => {
      if (num >= 1_000_000_000) {
        return (num / 1_000_000_000).toFixed(1).replace(/\.0$/, "") + "B";
      } else if (num >= 100_000_00) {
        return (num / 100_000_00).toFixed(1).replace(/\.0$/, "") + "Cr"; // Crore
      } else if (num >= 1_000_000) {
        return (num / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
      } else if (num >= 100_000) {
        return (num / 100_000).toFixed(1).replace(/\.0$/, "") + "Lac";
      } else if (num >= 1_000) {
        return (num / 1_000).toFixed(1).replace(/\.0$/, "") + "K";
      } else {
        return num.toString();
      }
    };
    
  return (
    <>
    <Typography variant="h6">Campaigns</Typography>
      {DonorLoading ? (
        <Stack>
          <Stack direction="row" justifyContent="space-between">
            <Skeleton width={400} height={200} />
            <Skeleton width={400} height={200} />
            <Skeleton width={400} height={200} />
          </Stack>
          <Stack direction="row" justifyContent="space-between">
            <Skeleton width={400} height={200} />
            <Skeleton width={400} height={200} />
            <Skeleton width={400} height={200} />
          </Stack>
          <Stack direction="row" justifyContent="space-between">
            <Skeleton width={400} height={200} />
            <Skeleton width={400} height={200} />
            <Skeleton width={400} height={200} />
          </Stack>
        </Stack>
      ) : (
        <Grid2 container spacing={2} mt={2}>
          {trustedPartnersData?.body?.map((items) => (
            <Grid2 size={{xs:12, md:3}} key={items?.id}>
              <Card sx={{ width: "100%",height:300 }}>
                <CardMedia
                  component="img"
                  src={items.image_video}
                  alt="Landing Section Girl"
                  sx={{ maxHeight: "13rem",height:'100%' }}
                />
                <Stack py={1} px={1} gap={1}>
                  <Typography fontWeight={500} noWrap>
                    {items?.campaign_title}
                  </Typography>
                  <BorderLinearProgress
                    variant="determinate"
                    value={
                      items?.donation_goal && items?.donation_goal > 0
                        ? (items.complete_goal / items.donation_goal) * 100
                        : 0
                    }
                  />
                  <Stack direction="row" justifyContent="space-between">
                    <Typography variant="subtitle2">
                      Raised - {formatNumber(items?.complete_goal)}
                    </Typography>
                    <Typography variant="subtitle2" color="#0ebdbe">
                      Goal - {formatNumber(items?.donation_goal)}
                    </Typography>
                  </Stack>
                  <Button
                    variant="outlined"
                    sx={{
                      width: "50%",
                      ":hover": {
                        backgroundColor: "primary.main",
                        color: "white",
                      },
                    }}
                    onClick={() => {
                      router.push(`/dashboard/campaign-donation?id=${items?.id}`);
                    }}
                  >
                    Donate
                  </Button>
                </Stack>
              </Card>
            </Grid2>
          ))}
        </Grid2>
      )}
        <Box p={2}>
            
            <CustomPagination
                count={trustedPartnersData?.total_pages}
                currentPage={params.offset}
                totalRecords={trustedPartnersData?.total_pages}
                onPageChange={(newPage: number) => {
                  setParams((prev) => ({ ...prev, offset: newPage }));
                }}
                pageLimit={params.limit}
                setPageLimit={(newLimit: number) => {
                  setParams((prev) => ({ ...prev, limit: newLimit, offset: 1 }));
                }}
              />
          </Box>
    </>
  );
};
