import IconPending from "@/src/assets/icons/Transaction/icon-panding";
import IconReadyToWithdraw from "@/src/assets/icons/Transaction/icon-ready-to-withdraw";
import IconTotalPaid from "@/src/assets/icons/Transaction/icon-total-Prepaid";
import IconTotalRevenue from "@/src/assets/icons/Transaction/icon-total-revenue";
import React from "react";
import {
  Box,
  Grid,
  Paper,
  Stack,
  Typography,
  // TextField,
  // InputAdornment,
  Button,
  // IconButton,
  Divider,
  // FormControlLabel,
  Checkbox,
} from "@mui/material";
import ReactApexChart from "react-apexcharts";
import IconVisa from "@/src/assets/icons/Transaction/icon-visa";
import IconMaster from "@/src/assets/icons/Transaction/icon-master";
import { CustomChip, CustomTable } from "@/src/components";


function TransactionSection() {
  const data = [
    {
      Amount: "$13,804.00",
      HeadIcon: IconTotalRevenue,
      headIconBgColor: "#E4F8FFE5",
      Status: "Total Revenue",
    },
    {
      Amount: "$16,593.00",
      HeadIcon: IconTotalPaid,
      headIconBgColor: "#EBEBFF",
      Status: "Total Prepaid",
    },
    {
      Amount: "$13,184.00",
      HeadIcon: IconReadyToWithdraw,
      headIconBgColor: "#D0E0FF",
      Status: "Ready to Withdraw",
    },
    {
      Amount: "$162.00",
      HeadIcon: IconPending,
      headIconBgColor: "#E1F7E3",
      Status: "Pending",
    },
  ];
  const series = [
    {
      name: "",
      data: [44, 0, 57, 56, 61, 58, 63, 60, 66],
    },
  ];
  const optionstwo: any = {
    chart: {
      type: "area",
      height: 400,
    },
    // plotOptions: {
    //   bar: {
    //     horizontal: false,
    //     columnWidth: "80%",
    //     endingShape: "rounded",
    //   },
    // },
    legend: {
      show: false,
    },
    colors: ["#23BD33"],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      // colors: ['#3269D3','#FEC64F']
    },
    xaxis: {
      categories: [
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
      ],
    },
    yaxis: {
      labels: {
        formatter: function (value: any) {
          return "$" + value;
        },
      },
    },
    fill: {
      opacity: 1,
    },
  };
  const columns = [
    {
      accessorFn: (row: any) => row.Date ?? "-",
      id: "Date",
      cell: (info: any) => info.getValue(),
      header: () => <span>Date</span>,
      isSortable: false,
    },
    {
      accessorFn: (row: any) => row.Method ?? "-",
      id: "Method",
      cell: (info: any) => info.getValue(),
      header: () => <span>Method</span>,
      isSortable: false,
    },
    {
      accessorFn: (row: any) => row.Amount ?? "-",
      id: "Amount",
      cell: (info: any) => info.getValue(),
      header: () => <span>Amount</span>,
      isSortable: false,
    },
    {
      accessorFn: (row: any) => row.Status ?? "-",
      id: "Status",
      cell: (info: any) => {
        return (
          <Box
            display="flex"
            justifyContent="flex-start"
            alignItems="flex-start"
          >
            <CustomChip
              variant={info.getValue() === "complete" ? "success" : "danger"}
              rootSx={{
                fontSize: 11,
              }}
              ChipProps={{ label: `${info.getValue()}` }}
            />
          </Box>
        );
      },
      header: () => <span>Prepaid balance</span>,
      isSortable: false,
    },
    {
      accessorFn: (row: any) => row.Action ?? "-",
      id: "Action",
      cell: () => {
        return (
          <Box
            display="flex"
            justifyContent="flex-start"
            alignItems="flex-start"
            gap={1}
          >
            <Button variant="text" color="primary">
              Cancel Withdraw
            </Button>
          </Box>
        );
      },
      header: () => <span>Action</span>,
      isSortable: false,
    },
  ];
  const generateDummyData = (numRows:any) => {
    const dummyData:any = [];

    for (let i = 0; i < numRows; i++) {
      dummyData.push({
        Assigned: Math.random() > 0.5,
        Date: new Date().toISOString().split("T")[0], // Current date in YYYY-MM-DD format
        Method: Math.random() > 0.5 ? "Visa" : "MasterCard",
        Amount: (Math.random() * 1000).toFixed(2),
        Status: Math.random() > 0.5 ? "pending" : "complete",
      });
    }

    return dummyData;
  };
  const dummyData = generateDummyData(3);
  console.log(dummyData);
  return (
    <div>
      <Grid mt={7} p={5} pb={0} spacing={2} container>
        {data.map((item) => (
          <Card key={item.Amount} {...item} />
        ))}
      </Grid>
      <Grid mt={1} px={5} spacing={0} container>
        <Grid xs={12} item>
          <Paper variant="elevation" elevation={2}>
            <Stack flexDirection={"row"} p={1}>
              <Typography
                variant="body1"
                fontWeight={"bold"}
                color="background: #1D2026"
              >
                Statistic
              </Typography>
            </Stack>
            <ReactApexChart
              options={optionstwo}
              series={series}
              type="area"
              height={400}
            />
          </Paper>
        </Grid>
      </Grid>
      <Grid mt={1} px={5} spacing={2} container>
        <Grid xs={12} lg={5} item height={"100%"}>
          <Paper variant="elevation" elevation={2} >
            <Stack p={1} px={2} gap={1} height={"100%"}>
              <Stack flexDirection={"row"} p={1}>
                <Typography
                  variant="body1"
                  fontWeight={"bold"}
                  color="background: #1D2026"
                >
                  Withdraw your money
                </Typography>
              </Stack>
              <Divider />
              <Typography variant="subtitle2" color="#4E5566">
                Current Balance
              </Typography>
              <Stack
                flexDirection={"row"}
                px={3}
                py={2}
                gap={2}
                justifyContent={"space-between"}
                alignItems={"center"}
                width={"100%"}
                boxShadow={2}
                borderRadius={2}
              >
                <IconVisa />
                <Typography variant="body2" color="#1D2026">
                  4855 **** **** ****
                </Typography>
                <Typography variant="body2" color="#1D2026">
                  04/24
                </Typography>
                <Typography variant="body2" color="#1D2026">
                  Vako Shvili
                </Typography>
                <Checkbox color="success" />
              </Stack>
              <Stack
                flexDirection={"row"}
                px={3}
                py={2}
                gap={2}
                justifyContent={"space-between"}
                alignItems={"center"}
                width={"100%"}
                boxShadow={2}
                borderRadius={2}
              >
                <IconMaster />
                <Typography variant="body2" color="#1D2026">
                  4855 **** **** ****
                </Typography>
                <Typography variant="body2" color="#1D2026">
                  04/24
                </Typography>
                <Typography variant="body2" color="#1D2026">
                  Vako Shvili
                </Typography>
                <Checkbox color="success" />
              </Stack>
              <Stack
                flexDirection={"row"}
                py={2}
                gap={2}
                justifyContent={"space-between"}
                alignItems={"center"}
                width={"100%"}
              >
                <Stack>
                  <Typography variant="body2" color="#1D2026">
                    $16,593.00
                  </Typography>

                  <Typography variant="subtitle2" color="#4E5566">
                    Current Balance
                  </Typography>
                </Stack>
                <Button variant="contained" color="primary">
                  Withdraw money
                </Button>
              </Stack>
            </Stack>
          </Paper>
        </Grid>
        <Grid xs={12} lg={7} item>
          <Paper variant="elevation" elevation={2}>
            <Stack p={1} px={2} gap={1}>
              <Stack flexDirection={"row"} p={1}>
                <Typography
                  variant="body1"
                  fontWeight={"bold"}
                  color="background: #1D2026"
                >
                  Withdraw History
                </Typography>
              </Stack>
              <CustomTable
                columns={columns}
                data={dummyData}
                isLoading={false}
                isError={false}
                isSuccess={true}
                isFetching={false}
                isPagination={true}
              />
            </Stack>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default TransactionSection;
const Card = ({ Amount, HeadIcon, headIconBgColor, Status }: any) => {
  return (
    <Grid xs={12} lg={3} item>
      <Paper
        variant="elevation"
        sx={{ p: 3, height: "fit-content" }}
        elevation={2}
      >
        <Stack gap={3}>
          <Stack gap={2} flexDirection={"row"} alignItems={"center"}>
            <Box
              sx={{
                width: "60px",
                height: "60px",
                bgcolor: headIconBgColor,
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <HeadIcon />
            </Box>
            <Stack gap={1}>
              <Typography variant="body1" fontWeight={"bold"} color="#1D2026">
                {Amount}
              </Typography>
              <Typography variant="subtitle2" color="#4E5566">
                {Status}
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Paper>
    </Grid>
  );
};
