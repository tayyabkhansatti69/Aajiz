import {
  Avatar,
  Box,
  Checkbox,
  Grid,
  IconButton,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import ReactApexChart from "react-apexcharts";
import person from "@/src/assets/png/person.png";
import personMale from "@/src/assets/png/maleperson.jpeg";
import IconVideo from "@/src/assets/icons/Icon-video";
import IconChat from "@/src/assets/icons/Icon-Chat";
import { CustomChip, CustomTable, CustomTabs, TableHeader } from "@/src/components";

function DashboardSection() {
  const series = [
    {
      name: "",
      data: [44, 0, 57, 56, 61, 58, 63, 60, 66],
    },
  ];
  // const seriesTwo = [
  //   {
  //     name: "",
  //     data: [44, 0, 57, 56, 61, 58, 63, 60, 66],
  //   },
  // ];

  const options: any = {
    chart: {
      type: "bar",
      height: 350,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "80%",
        endingShape: "rounded",
      },
    },
    legend: {
      show: false,
    },
    colors: ["#3269D3"],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 1,
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
    yaxis: {},
    fill: {
      opacity: 1,
    },
  };
  const optionstwo: any = {
    chart: {
      type: "area",
      height: 350,
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
    colors: ["#FEC64F"],
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
    yaxis: {},
    fill: {
      opacity: 1,
    },
  };
  const optionsThree: any = {
    chart: {
      type: "line",
      height: 350,
      zoom: {
        enabled: false,
      },
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
    colors: ["#3269D3"],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
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
    yaxis: {},
    fill: {
      opacity: 1,
    },
  };
  const optionsFour: any = {
    chart: {
      type: "bar",
      height: 350,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "80%",
        endingShape: "rounded",
      },
    },
    legend: {
      show: false,
    },
    colors: ["#3269D3"],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 1,
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
    tooltip: {
      y: {
        formatter: function (value: any) {
          return "$" + value; // Customizes the tooltip value with a dollar sign
        },
        title: {
          formatter: function () {
            return "Earn"; // Removes the series name from the tooltip
          },
        },
      },

      style: {
        fontSize: "12px", // Change the font size
        fontFamily: "Arial, sans-serif", // Change the font family
      },
      theme: "dark", // Change the theme to 'light' or 'dark'
      marker: {
        show: true,
        fillColors: ["#3269D3", "#FEC64F"], // Change marker colors
      },
      onDatasetHover: {
        highlightDataSeries: true, // Highlight data series on hover
      },
      x: {
        show: false, // Show the x-axis value in the tooltip
      },
    },
  };
  const columns = [
    {
      id: "select",
      header: ({ table }: any) => {
        return (
          <Box>
            <Checkbox
              checked={table.getIsAllRowsSelected()}
              onChange={table.getToggleAllRowsSelectedHandler()}
            />
          </Box>
        );
      },
      cell: ({ row }: any) => (
        <Box>
          <Checkbox
            disabled={row?.original?.Assigned}
            checked={row?.original?.Assigned ? false : row.getIsSelected()}
            onChange={row.getToggleSelectedHandler()}
          />
        </Box>
      ),
    },
    {
      accessorFn: (row: any) => row.Name ?? "-",
      id: "Name",
      cell: (info: any) => (
        <Box display={"flex"} gap={2} alignItems={"center"}>
          <Avatar
            variant="circular"
            src={personMale.src}
            alt={info.getValue()}
          />
          <Typography variant="subtitle1" fontWeight={600} color="#374557">
            {info.getValue()}
          </Typography>
        </Box>
      ),
      header: () => <span>Name</span>,
      isSortable: false,
    },
    {
      accessorFn: (row: any) => row.studentID ?? "-",
      id: "studentID",
      cell: (info: any) => info.getValue(),
      header: () => <span>Student ID</span>,
      isSortable: false,
    },
    {
      accessorFn: (row: any) => row.pricePerLesson ?? "-",
      id: "pricePerlesson",
      cell: (info: any) =>`$ ${ info.getValue()}`,
      header: () => <span>Price per lesson</span>,
      isSortable: false,
    },
    {
      accessorFn: (row: any) => row.joinDate ?? "-",
      id: "joinDate",
      cell: (info: any) => info.getValue(),
      header: () => <span>Join Date</span>,
      isSortable: false,
    },
    {
      accessorFn: (row: any) => row.prepaidBalance ?? "-",
      id: "prepaidBalance",
      cell: (info: any) => {
        return (
          <Box
            display="flex"
            justifyContent="flex-start"
            alignItems="flex-start"
          >
            <CustomChip
              variant={info.getValue() === "prepaid" ? "success" : "danger"}
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
            <IconButton>
              <IconVideo />
            </IconButton>
            <IconButton>
              <IconChat />
            </IconButton>
          </Box>
        );
      },
      header: () => <span>Action</span>,
      isSortable: false,
    },
  ];

  const generateDummyData = (count: number) => {
    const names = ["John Doe", "Jane Smith", "Alice Johnson", "Bob Brown"];
    const studentIDs = ["S001", "S002", "S003", "S004"];
    const pricePerLessons = [20, 25, 30, 35];
    const joinDates = ["2023-01-01", "2023-02-01", "2023-03-01", "2023-04-01"];
    const prepaidBalances = ["prepaid", "No prepaid"];

    const getRandomElement = (arr: any) =>
      arr[Math.floor(Math.random() * arr.length)];

    return Array.from({ length: count }, (_, index) => ({
      id: index,
      Name: getRandomElement(names),
      studentID: getRandomElement(studentIDs),
      pricePerLesson: getRandomElement(pricePerLessons),
      joinDate: getRandomElement(joinDates),
      prepaidBalance: getRandomElement(prepaidBalances),
      Assigned: Math.random() < 0.5, // Randomly assign Assigned as true or false
    }));
  };

  // Example usage:
  const dummyData = generateDummyData(10);
  console.log(dummyData);
  return (
    <>
      <Grid p={4} spacing={2} container>
        <Grid xs={12} lg={8} spacing={2} item>
          <Grid spacing={2} container>
            <Grid xs={12} lg={4} item>
              <Paper variant="elevation" elevation={2}>
                <Stack
                  p={2}
                  justifyContent={"center"}
                  gap={1}
                  alignItems={"flex-start"}
                >
                  <Typography variant="h4" color="#374557">
                    Total Students
                  </Typography>
                  <ReactApexChart
                    options={options}
                    series={series}
                    type="bar"
                    height={150}
                  />
                  <Box
                    display="flex"
                    justifyContent={"center"}
                    alignItems={"center"}
                    width={"100%"}
                  >
                    <Typography
                      fontWeight={"bold"}
                      variant="subtitle1"
                      color="#374557"
                    >
                      12.345
                    </Typography>
                    <Box ml="auto">
                      <Typography variant="subtitle2" color="#A098AE">
                        <Box
                          mr={0.5}
                          component={"span"}
                          fontWeight={"bold"}
                          color={"#3269D3"}
                        >
                          5.4%
                        </Box>
                        than last year
                      </Typography>
                    </Box>
                  </Box>
                </Stack>
              </Paper>
            </Grid>
            <Grid xs={12} lg={4} item>
              <Paper variant="elevation" elevation={2}>
                <Stack
                  p={2}
                  justifyContent={"center"}
                  gap={1}
                  alignItems={"flex-start"}
                >
                  <Typography variant="h4" color="#374557">
                    Courses
                  </Typography>
                  <Box
                    display="flex"
                    justifyContent={"center"}
                    alignItems={"center"}
                    width={"100%"}
                  >
                    <Typography
                      variant="subtitle1"
                      fontWeight={"bold"}
                      color="#374557"
                    >
                      100
                    </Typography>
                    <Box ml="auto">
                      <Typography variant="subtitle2" color="#A098AE">
                        <Box
                          mr={0.5}
                          component={"span"}
                          fontWeight={"bold"}
                          color={"#3269D3"}
                        >
                          +15%
                        </Box>
                        than last year
                      </Typography>
                    </Box>
                  </Box>
                  <ReactApexChart
                    options={optionstwo}
                    series={series}
                    type="area"
                    height={150}
                  />
                </Stack>
              </Paper>
            </Grid>
            <Grid xs={12} lg={4} item>
              <Paper variant="elevation" elevation={2}>
                <Stack
                  p={2}
                  justifyContent={"center"}
                  alignItems={"flex-start"}
                >
                  <Typography variant="h4" color="#374557">
                    Prepaid
                  </Typography>

                  <ReactApexChart
                    options={optionsThree}
                    series={series}
                    type="line"
                    height={150}
                  />
                  <Box
                    display="flex"
                    flexDirection={"column"}
                    justifyContent={"center"}
                    alignItems={"flex-start"}
                    width={"100%"}
                  >
                    <Typography
                      variant="subtitle1"
                      fontWeight={"bold"}
                      color="#374557"
                    >
                      $45,741
                    </Typography>
                    <Box>
                      <Typography variant="subtitle2" color="#A098AE">
                        <Box
                          mr={0.5}
                          component={"span"}
                          fontWeight={"bold"}
                          color={"#3269D3"}
                        >
                          +15%
                        </Box>
                      </Typography>
                    </Box>
                  </Box>
                </Stack>
              </Paper>
            </Grid>
            <Grid xs={12} item>
              <Paper variant="elevation" elevation={2}>
                <Grid p={4} container>
                  <Grid xs={12} lg={3} item>
                    <Stack justifyContent={"space-between"} gap={3}>
                      <Typography
                        variant="body1"
                        fontWeight={"bold"}
                        color="#374557"
                      >
                        Earnings
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        fontWeight={"bold"}
                        color="#A098AE"
                      >
                        Dec 1 - Dec 31, 2021
                      </Typography>
                      <Typography variant="body1" color="#374557">
                        This Month
                      </Typography>
                      <Typography variant="h4" color="#374557">
                        $53.678
                      </Typography>
                    </Stack>
                  </Grid>

                  <Grid xs={12} lg={9} item>
                    <ReactApexChart
                      options={optionsFour}
                      series={series}
                      type="bar"
                      height={400}
                    />
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
        <Grid xs={12} lg={4} item>
          <Paper
            variant="elevation"
            sx={{
              minHeight: { lg: "100%", xs: "auto" },
            }}
            elevation={2}
          >
            <Stack p={2} gap={4}>
              <Typography variant="body1" fontWeight={"bold"} color="#374557">
                Today Student List
              </Typography>
              <Box display={"flex"} gap={2} alignItems={"center"}>
                <Avatar variant="circular" src={person.src} alt="Heba Ahmed" />
                <Typography variant="body1" fontWeight={600} color="#374557">
                  Heba Ahmed
                </Typography>
              </Box>
              <Box display={"flex"} gap={2} alignItems={"center"}>
                <Avatar
                  variant="circular"
                  src={personMale.src}
                  alt="Heba Ahmed"
                />
                <Typography variant="body1" fontWeight={600} color="#374557">
                  Ahmed Ali
                </Typography>
              </Box>
              <Box display={"flex"} gap={2} alignItems={"center"}>
                <Avatar variant="circular" src={person.src} alt="Heba Ahmed" />
                <Typography variant="body1" fontWeight={600} color="#374557">
                  Heba Ahmed
                </Typography>
              </Box>
              <Box display={"flex"} gap={2} alignItems={"center"}>
                <Avatar
                  variant="circular"
                  src={personMale.src}
                  alt="Heba Ahmed"
                />
                <Typography variant="body1" fontWeight={600} color="#374557">
                  Ahmed Ali
                </Typography>
              </Box>
              <Box display={"flex"} gap={2} alignItems={"center"}>
                <Avatar variant="circular" src={person.src} alt="Heba Ahmed" />
                <Typography variant="body1" fontWeight={600} color="#374557">
                  Heba Ahmed
                </Typography>
              </Box>
              <Box display={"flex"} gap={2} alignItems={"center"}>
                <Avatar
                  variant="circular"
                  src={personMale.src}
                  alt="Heba Ahmed"
                />
                <Typography variant="body1" fontWeight={600} color="#374557">
                  Ahmed Ali
                </Typography>
              </Box>
            </Stack>
          </Paper>
        </Grid>
      </Grid>
      <Grid px={4} pt={2} container>
        <Grid xs={12} item>
          <Paper variant="elevation" elevation={2}>
            <CustomTabs
              tabsNameArray={["Current students", "Archived students"]}
            >
              <Box>
                <Box px={2} my={1}>
                  <TableHeader
                    tableHeaderData={[
                      {
                        type: "search",
                        FieldProps: { name: "search", placeholder: "Search" },
                      },
                    ]}
                  />
                </Box>

                <CustomTable
                  columns={columns}
                  data={dummyData}
                  isLoading={false}
                  isError={false}
                  isSuccess={true}
                  isFetching={false}
                  isPagination={true}
                />
              </Box>
              <Box>
              <Box px={2} my={1}>
                  <TableHeader
                    tableHeaderData={[
                      {
                        type: "search",
                        FieldProps: { name: "search", placeholder: "Search" },
                      },
                    ]}
                  />
                </Box>
                <CustomTable
                  columns={columns}
                  data={dummyData}
                  isLoading={false}
                  isError={false}
                  isSuccess={true}
                  isFetching={false}
                  isPagination={true}
                />
              </Box>
            </CustomTabs>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}

export default DashboardSection;
