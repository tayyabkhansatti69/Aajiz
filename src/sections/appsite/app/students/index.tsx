import IconChat from "@/src/assets/icons/Icon-Chat";
import IconVideo from "@/src/assets/icons/Icon-video";
import personMale from "@/src/assets/png/maleperson.jpeg";
import { CustomChip, CustomTable, CustomTabs, TableHeader } from "@/src/components";
import {
    Avatar,
    Box,
    Checkbox,
    Grid,
    IconButton,
    Paper,
    Typography
} from "@mui/material";
function StudentsSection() {
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
      cell: (info: any) => `$ ${info.getValue()}`,
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
    <Grid px={2} pt={7} container>
      <Grid xs={12} px={4} item>
        <Paper variant="elevation" elevation={2}>
          <CustomTabs tabsNameArray={["Current students", "Archived students"]}>
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
  );
}

export default StudentsSection;
