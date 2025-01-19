import { useGetNotificationQuery } from "@/src/services/donor/notification/notification-api";
import {
  Box,
  Button,
  CircularProgress,
  Grid,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import { useState } from "react";
import relativeTime from "dayjs/plugin/relativeTime";
import dayjs from "dayjs";
import CustomPagination from "@/src/components/custom-pagination";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useRouter } from "next/navigation";
import { NoContentFound } from "@/src/components";
// Extend dayjs with the relativeTime plugin
dayjs.extend(relativeTime);

function NotificationSection() {
  const [param, setParams] = useState({
    offset: 0,
    limit: 10,
  });

  const { data, isLoading } = useGetNotificationQuery({ ...param });

  const [page, setPage] = useState(data?.current_page);
  const [pageLimit, setPageLimit] = useState(data?.limit);

  const router = useRouter();
  return (
    <Grid pt={2} container>
      <Grid xs={12} item>
        <Box gap={1} display={"flex"} alignItems={"center"}>
          <IconButton
            onClick={() => {
              router.push("/dashboard");
            }}
          >
            {" "}
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h6">Back</Typography>
        </Box>
      </Grid>
      <Grid xs={12} item mt={1}>
        <Typography variant="h4">Notification</Typography>
      </Grid>

      <Grid xs={12} item mt={2}>
        <Paper variant="elevation" elevation={2}>
          <Box px={2}>
            {isLoading && (
              <Box
                minHeight={300}
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <CircularProgress />
              </Box>
            )}
            {!isLoading &&
              (data?.notifications?.length === 0 ? (
                <Box
                  minHeight={300}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <NoContentFound />
                </Box>
              ) : (
                data?.notifications?.map((sectionData, sectionIndex) => (
                  <Grid item xs={12} key={sectionIndex}>
                    {/* Map through each notification item */}
                    <NotificationItem
                      key={sectionData?.id}
                      title={sectionData?.notification_message}
                      time={sectionData?.notification_date}
                    />
                  </Grid>
                ))
              ))}
          </Box>

          <Box p={2}>
            <CustomPagination
              count={data?.total_pages}
              currentPage={page}
              totalRecords={data?.total_pages}
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
        </Paper>
      </Grid>
    </Grid>
  );
}
export default NotificationSection;

const NotificationItem = ({ title, time }) => {
  // Check if the message includes the word "expired"
  const isExpired = title?.includes("expired");

  return (
    <Grid item xs={12}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "1px solid #e0e0e0",
          padding: "12px 0px",
        }}
      >
        <Box>
          <Typography variant="body2" sx={{ fontWeight: 600 }}>
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {dayjs(time).fromNow()}
          </Typography>
        </Box>

        {/* Conditionally render the button if the message contains "expired" */}
        {isExpired && (
          <Button variant="contained" size="small" sx={{ marginLeft: 2 }}>
            Retry Donation
          </Button>
        )}
      </Box>
    </Grid>
  );
};
