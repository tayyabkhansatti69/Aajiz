import {
  Avatar,
  Box,
  Button,
  Card,
  CardMedia,
  Skeleton,
  Stack,
  Typography,
  styled,
} from "@mui/material";

import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { useRouter } from "next/navigation";
import {
  useGetActiveCampaignsQuery,
  useGetDonorProfileQuery,
  useGetTrustedPartnersListQuery,
} from "@/src/services/donor/donor-dashboard/donor-dashboard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";

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

export function DonorDashboardSection() {
  const router = useRouter();
  const params = { limit: 10, offset: 0 };
  const { data: donorProfile } = useGetDonorProfileQuery({});
  const { data, isLoading } = useGetTrustedPartnersListQuery(params);
  const { data: trustedPartnersData, isLoading: DonorLoading } =
    useGetActiveCampaignsQuery(params,{refetchOnMountOrArgChange:true});

  return isLoading || DonorLoading ? (
    <Stack>
      <Stack direction="row" justifyContent="space-between">
        <Skeleton width={150} height={70} />
        <Skeleton width={100} height={70} />
      </Stack>
      <Skeleton width={400} height={200} />
      <Stack direction="row" justifyContent="space-between">
        <Skeleton width={150} height={70} />
        <Skeleton width={100} height={70} />
      </Stack>
      <Skeleton width={"100%"} height={220} />
      <Stack direction="row" justifyContent="space-between">
        <Skeleton width={150} height={70} />
        <Skeleton width={100} height={70} />
      </Stack>
      <Skeleton width={"100%"} height={200} />
    </Stack>
  ) : (
    <Stack gap={2.5}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="h5">Balance</Typography>
        <Button
          variant="outlined"
          onClick={() => {
            router.push("/add-balance");
          }}
          sx={{
            ":hover": {
              backgroundColor: "primary.main",
              color: "white",
            },
          }}
        >
          Add Balance
        </Button>
      </Stack>
      <Stack
        direction={{ xl: "row", xs: "column" }}
        justifyContent="space-between"
        width="30%"
        bgcolor="#F8FFFE"
        p={2}
        borderRadius={2}
      >
        <Box>
          <Typography variant="h5" color="#0EBDBE">
            Rs.{" "}
            {donorProfile?.body?.current_balance ?? donorProfile?.body?.balance}
          </Typography>
          <Typography variant="body1" fontWeight={500}>
            Current Balance
          </Typography>
        </Box>
        <Button
          variant="outlined"
          onClick={() => {
            router?.push("/donate");
          }}
          sx={{
            ":hover": {
              backgroundColor: "primary.main",
              color: "white",
            },
          }}
        >
          Donate Now
        </Button>
      </Stack>
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="h5">Trusted Partner</Typography>
        {/* <Typography variant="subtitle1" fontWeight={600}>
          
        </Typography> */}
      </Stack>
      <Box sx={{ width: "100%", overflow: "hidden" }}>
        <Swiper
          spaceBetween={10} // Space between each avatar
          slidesPerView={5} // Show 10 avatars per slide
          autoplay={{ delay: 1500, disableOnInteraction: false }}
          loop={true}
          pagination={{ clickable: true, dynamicBullets: true }} // Pagination with clickable dots
          modules={[Autoplay, Pagination]} // Directly pass modules here
        >
          {data?.body?.map((item) => (
            <SwiperSlide
              key={item.id}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Box textAlign="center" sx={{ p: 1 }}>
                <Avatar
                  src={item.Business_logo}
                  alt={`${item.Business_name} logo`}
                  sx={{ width: 90, height: 90, margin: "auto", boxShadow: 6 }} // Smaller size to fit 10 per slide
                />
                <Typography variant="subtitle1" fontWeight={600} my={2}>
                  {item.Business_name}
                </Typography>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>

      <Stack direction="row" justifyContent="space-between">
        <Typography variant="h5">Campaigns</Typography>
        <Button  variant='text' onClick={()=>{router.push('/dashboard/campaigns')}}>
          See All
        </Button>
      </Stack>
      <Box
        sx={{
          py: 0.5,
          overflowX: "auto",
          width: "100%",
          "&::-webkit-scrollbar": {
            height: 8, // Reducing the height of the scrollbar
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#0ebdbe", // Custom color for the scrollbar thumb
            borderRadius: 8, // Rounded scrollbar thumb
          },
          "&::-webkit-scrollbar-thumb:hover": {
            backgroundColor: "#09a4a6", // Change color on hover
          },
          "&::-webkit-scrollbar-track": {
            backgroundColor: "#f0f0f0", // Track background color
            borderRadius: 8,
          },
        }}
      >
        <Stack direction="row" spacing={3} sx={{ width: "max-content" }}>
          {trustedPartnersData?.body?.map((items) => (
            <Card key={items?.id} sx={{ width: 250 }}>
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
                    router.push(`dashboard/campaign-donation?id=${items?.id}`);
                  }}
                >
                  Donate
                </Button>
              </Stack>
            </Card>
          ))}
        </Stack>
      </Box>
    </Stack>
  );
}
