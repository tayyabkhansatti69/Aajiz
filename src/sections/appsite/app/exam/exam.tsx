// import IconChat from "@/src/assets/icons/Icon-Chat";
// import IconVideo from "@/src/assets/icons/Icon-video";
import personMale from "@/src/assets/png/maleperson.jpeg";
import { CustomTable, CustomTabs, TableHeader } from "@/src/components";

import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Grid,
  Paper,
  Typography
} from "@mui/material";
function ExamSection() {
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
      accessorFn: (row: any) => row.courses ?? "-",
      id: "Courses",
      cell: (info: any) => info.getValue(),
      header: () => <span>Courses</span>,
      isSortable: false,
    },
    {
      accessorFn: (row: any) => row.startDate ?? "-",
      id: "startDate",
      cell: (info: any) => `$ ${info.getValue()}`,
      header: () => <span>Start Date</span>,
      isSortable: false,
    },
    {
      accessorFn: (row: any) => row.endDate ?? "-",
      id: "endDate",
      cell: (info: any) => info.getValue(),
      header: () => <span>End Date</span>,
      isSortable: false,
    },
    {
      accessorFn: (row: any) => row.grade ?? "-",
      id: "grade",
      cell: (info: any) => info.getValue(),
      header: () => <span>Grade</span>,
      isSortable: false,
    },

  ];
  const generateDummyData = (count: number) => {
    const names = ["John Doe", "Jane Smith", "Alice Johnson", "Bob Brown"];
    const courses = ["English", "EILTS", "SAT", "SAT"];
    const startDate = ['junuary 2,2020', 'junuary 2,2020', 'junuary 2,2020', 'junuary 2,2020'];
    const endDate = ["2023-01-01", "2023-02-01", "2023-03-01", "2023-04-01"];
    const grade = ["2o of 20", "2o of 20", '2o of 20', '2o of 20'];

    const getRandomElement = (arr: any) =>
      arr[Math.floor(Math.random() * arr.length)];

    return Array.from({ length: count }, (_, index) => ({
      id: index,
      Name: getRandomElement(names),
      courses: getRandomElement(courses),
      startDate: getRandomElement(startDate),
      endDate: getRandomElement(endDate),
      grade: getRandomElement(grade),

    }));
  };
  const columnsAssignmenrData = [
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
      accessorFn: (row: any) => row.createdAt ?? "-",
      id: "createdAt",
      cell: (info: any) => info.getValue(),
      header: () => <span>Created At</span>,
      isSortable: false,
    },
    {
      accessorFn: (row: any) => row.dueDate ?? "-",
      id: "dueDate",
      cell: (info: any) => info.getValue(),
      header: () => <span>Due Date</span>,
      isSortable: false,
    },
    {
      accessorFn: (row: any) => row.submitedBy ?? "-",
      id: "submitedBy",
      cell: (info: any) => info.getValue(),
      header: () => <span>Submited By</span>,
      isSortable: false,
    },


  ];
  const generateDummyAssignmenrData = (count: number) => {
    const names = ["John Doe", "Jane Smith", "Alice Johnson", "Bob Brown"];
    const createdAt = ["English", "EILTS", "SAT", "SAT"];
    const dueDate = ['junuary 2,2020', 'junuary 2,2020', 'junuary 2,2020', 'junuary 2,2020'];
    const submitedBy = ["2023-01-01", "2023-02-01", "2023-03-01", "2023-04-01"];


    const getRandomElement = (arr: any) =>
      arr[Math.floor(Math.random() * arr.length)];

    return Array.from({ length: count }, (_, index) => ({
      id: index,
      Name: getRandomElement(names),
      createdAt: getRandomElement(createdAt),
      dueDate: getRandomElement(dueDate),
      submitedBy: getRandomElement(submitedBy),


    }));
  };

  const columnsExamData = [
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
      accessorFn: (row: any) => row.startDate ?? "-",
      id: "startDate",
      cell: (info: any) => info.getValue(),
      header: () => <span>Start Date</span>,
      isSortable: false,
    },
    {
      accessorFn: (row: any) => row.endDate ?? "-",
      id: "endDate",
      cell: (info: any) => info.getValue(),
      header: () => <span>End Date</span>,
      isSortable: false,
    },
    {
      accessorFn: (row: any) => row.submitedBy ?? "-",
      id: "submitedBy",
      cell: (info: any) => info.getValue(),
      header: () => <span>Submited By</span>,
      isSortable: false,
    },


  ];
  const generateDummyExamData = (count: number) => {
    const names = ["John Doe", "Jane Smith", "Alice Johnson", "Bob Brown"];
    const startDate = ["English", "EILTS", "SAT", "SAT"];
    const endDate = ['junuary 2,2020', 'junuary 2,2020', 'junuary 2,2020', 'junuary 2,2020'];
    const submitedBy = ["2023-01-01", "2023-02-01", "2023-03-01", "2023-04-01"];


    const getRandomElement = (arr: any) =>
      arr[Math.floor(Math.random() * arr.length)];

    return Array.from({ length: count }, (_, index) => ({
      id: index,
      Name: getRandomElement(names),
      startDate: getRandomElement(startDate),
      endDate: getRandomElement(endDate),
      submitedBy: getRandomElement(submitedBy),


    }));
  };

  // Example usage:
  const dummyData = generateDummyData(10);
  const assignmentData = generateDummyAssignmenrData(10)
  const examData = generateDummyExamData(10)
  return (
    <Grid px={2} pt={7} container>
      <Grid xs={12} px={4} item>
        <Paper variant="elevation" elevation={2}>
          <CustomTabs tabsNameArray={["Quiz", "Assignment", "Exam"]}>
            <Box>
              <Box display={'flex'} flexDirection={'row'} justifyContent={'flex-end'} flexWrap={'nowrap'} alignItems={'end'} pr={2}>

                <Button variant="contained" sx={{ backgroundColor: '#242459', color: '#FFF' }} >
                  Create Quiz
                </Button>
              </Box>
              <Box px={2} my={1}>
                <TableHeader
                  tableHeaderData={[
                    {
                      type: 'date',
                      FieldProps: {
                        name: 'startDate',
                        label: 'Start Date',
                        minDateName: 'endDate',
                      },
                    },
                    {
                      type: 'date',
                      FieldProps: {
                        name: 'endDate',
                        label: 'End Date',
                        minDateName: 'endDate',
                      },
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
              <Box display={'flex'} flexDirection={'row'} justifyContent={'flex-end'} flexWrap={'nowrap'} alignItems={'end'} pr={2}>

                <Button variant="contained" sx={{ backgroundColor: '#242459', color: '#FFF' }} >
                  Create Assignment
                </Button>
              </Box>
              <Box px={2} my={1} >
                <TableHeader
                  gridProps={{ lg: 2.5 }}
                  tableHeaderData={[
                    {
                      type: 'date',

                      FieldProps: {
                        name: 'startDate',
                        label: 'Start Date',
                        minDateName: 'endDate',

                      },
                    },
                    {
                      type: 'date',
                      FieldProps: {
                        name: 'endDate',
                        label: 'End Date',
                        minDateName: 'endDate',
                      },
                    },
                  ]}
                />

              </Box>

              <CustomTable
                columns={columnsAssignmenrData}
                data={assignmentData}
                isLoading={false}
                isError={false}
                isSuccess={true}
                isFetching={false}
                isPagination={true}
              />
            </Box>
            <Box>
              <Box display={'flex'} flexDirection={'row'} justifyContent={'flex-end'} flexWrap={'nowrap'} alignItems={'end'} pr={2}>

                <Button variant="contained" sx={{ backgroundColor: '#242459', color: '#FFF' }} >
                  Create Exam
                </Button>
              </Box>
              <Box px={2} my={1}>
                <TableHeader
                  tableHeaderData={[
                    {
                      type: 'date',
                      FieldProps: {
                        name: 'startDate',
                        label: 'Start Date',
                        minDateName: 'endDate',
                      },
                    },
                    {
                      type: 'date',
                      FieldProps: {
                        name: 'endDate',
                        label: 'End Date',
                        minDateName: 'endDate',
                      },
                    },
                  ]}
                />
              </Box>
              <CustomTable
                columns={columnsExamData}
                data={examData}
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

export default ExamSection;
