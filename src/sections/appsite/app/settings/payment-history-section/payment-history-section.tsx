import { Box, Button,Checkbox } from "@mui/material";
import React from "react";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import { CustomTable } from "@/src/components";
// import { CustomTable } from "@/components";

function PaymentHistorySection() {
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
      accessorFn: (row: any) => row.Subject ?? "-",
      id: "Subject",
      cell: (info: any) => info.getValue(),
      header: () => <span>Subject</span>,
      isSortable: false,
    },
    {
      accessorFn: (row: any) => row.Hours ?? "-",
      id: "Method",
      cell: (info: any) => info.getValue(),
      header: () => <span>Hours</span>,
      isSortable: false,
    },
    {
      accessorFn: (row: any) => row.pricePerLesson ?? "-",
      id: "Amount",
      cell: (info: any) => `$ ${info.getValue()}`,
      header: () => <span>Price per lesson</span>,
      isSortable: false,
    },
    {
      accessorFn: (row: any) => row.Date ?? "-",
      id: "Date",
      cell: (info: any) => info.getValue(),
      header: () => <span>Date</span>,
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
            <Button
              variant="text"
              color="primary"
              startIcon={<FileDownloadOutlinedIcon />}
            >
              Download Receipt
            </Button>
          </Box>
        );
      },
      header: () => <span>Action</span>,
      isSortable: false,
    },
  ];
  const generateDummyData = (count: number) => {
    const names = ["Math"];
    // const studentIDs = ["S001", "S002", "S003", "S004"];
    const pricePerLessons = [20, 25, 30, 35];
    const joinDates = ["2023-01-01", "2023-02-01", "2023-03-01", "2023-04-01"];
    const prepaidBalances = ["prepaid", "No prepaid"];

    const getRandomElement = (arr: any) =>
      arr[Math.floor(Math.random() * arr.length)];

    return Array.from({ length: count }, (_, index) => ({
      id: index,
      Subject: getRandomElement(names),
      Hours: getRandomElement(pricePerLessons),
      pricePerLesson: getRandomElement(pricePerLessons),
      Date: getRandomElement(joinDates),
      prepaidBalance: getRandomElement(prepaidBalances),
      Assigned: Math.random() < 0.5, // Randomly assign Assigned as true or false
    }));
  };
  const dummyData = generateDummyData(5);
  return (
    <div>
      <CustomTable
        columns={columns}
        data={dummyData}
        isLoading={false}
        isError={false}
        isSuccess={true}
        isFetching={false}
        isPagination={true}
      />
    </div>
  );
}

export default PaymentHistorySection;
