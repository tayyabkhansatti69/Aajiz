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
    const [page, setPage] = useState(trustedPartnersData?.current_page);
    const [pageLimit, setPageLimit] = useState(10);
  return (
    <>
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
        <Grid2 container spacing={2}>
          {trustedPartnersData?.body?.map((items) => (
            <Grid2 size={{xs:12, md:3}} key={items?.id}>
              <Card sx={{ width: "100%" }}>
                <CardMedia
                  component="img"
                  src={items.image_video}
                  alt="Landing Section Girl"
                  sx={{ height: "10rem" }}
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
                      Raised - {items?.complete_goal}
                    </Typography>
                    <Typography variant="subtitle2" color="#0ebdbe">
                      Goal - {items?.donation_goal}
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
                      router.push("campaign-donation");
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
              currentPage={page}
              totalRecords={trustedPartnersData?.total_pages}
              onPageChange={(newPage: any) => {
                setPage?.(newPage);
                setParams((prev) => {
                  return { ...prev, offset: (newPage - 1) * 10 };
                });
              }}
              setPage={setPage}
              pageLimit={pageLimit}
              setPageLimit={setPageLimit}
            />
          </Box>
    </>
  );
};
