import { CustomTable } from "@/src/components";
import HorizontalTabs from "@/src/components/Horizontal-tab";
import { Card, Stack, Typography } from "@mui/material";

function QueriesSection() {
  const data = [
    {
      id: 1,
      donorName: "KFC",
      contactNumber: "Physical",
      businessType: "123456",
      profile: 2500,
    },
  ];
  const columns = [
    {
      accessorFn: (row: any) => row.donorName ?? "-",
      id: "donorName",
      cell: (info: any) => info.getValue(),
      header: () => <span>Ticket Name</span>,
      isSortable: false,
    },
    {
      accessorFn: (row: any) => row.contactNumber ?? "-",
      id: "contactNumber",
      cell: (info: any) => info.getValue(),
      header: () => <span>Date</span>,
      isSortable: false,
    },
    {
      accessorFn: (row: any) => row.contactNumber ?? "-",
      id: "contactNumber",
      cell: (info: any) => info.getValue(),
      header: () => <span>Subject</span>,
      isSortable: false,
    },
    {
      accessorFn: (row: any) => row.businessType ?? "-",
      id: "businessType",
      cell: (info: any) => info.getValue(),
      header: () => <span>Ticket Details</span>,
      isSortable: false,
    },
    {
      accessorFn: (row: any) => row.profile ?? "-",
      id: "profile",
      cell: (info: any) => info.getValue(),
      header: () => <span>Status</span>,
      isSortable: false,
    },
  ];
  const columns1 = [
    {
      accessorFn: (row: any) => row.donorName ?? "-",
      id: "donorName",
      cell: (info: any) => info.getValue(),
      header: () => <span>Ticket Name</span>,
      isSortable: false,
    },
    {
      accessorFn: (row: any) => row.contactNumber ?? "-",
      id: "contactNumber",
      cell: (info: any) => info.getValue(),
      header: () => <span>Date</span>,
      isSortable: false,
    },
    {
      accessorFn: (row: any) => row.contactNumber ?? "-",
      id: "contactNumber",
      cell: (info: any) => info.getValue(),
      header: () => <span>Subject</span>,
      isSortable: false,
    },
    {
      accessorFn: (row: any) => row.businessType ?? "-",
      id: "businessType",
      cell: (info: any) => info.getValue(),
      header: () => <span>Ticket Details</span>,
      isSortable: false,
    },
    {
      accessorFn: (row: any) => row.profile ?? "-",
      id: "profile",
      cell: (info: any) => info.getValue(),
      header: () => <span>Status</span>,
      isSortable: false,
    },
  ];

  return (
    <Stack rowGap={2}>
      <Typography variant="h5">Queries</Typography>
      <Card sx={{ p: 4 }}>
        <HorizontalTabs tabsArray={["Donor", "Partner"]}>
          <CustomTable
            data={data}
            columns={columns}
            //   isLoading={isLoading}
            //   isFetching={isFetching}
            //   isError={isError}
            isSuccess={true}
            isPagination
            showSerialNo
            //   totalPages={data?.pages ?? 1}
            //   currentPage={data?.current_page ?? 1}
            //   onPageChange={(onPageData: any) => {
            //     setParams((prev) => {
            //       return { ...prev, offset: (onPageData - 1) * 10 };
            //     });
            //   }}
          />
          <CustomTable
            data={data}
            columns={columns1}
            //   isLoading={hisltoryLoading}
            //   isFetching={historyFetching}
            //   isError={historyError}
            //   isSuccess={historySuccess}
            isPagination
            showSerialNo
            //   totalPages={getHistor?.pages ?? 1}
            //   currentPage={getHistor?.current_page ?? 1}
            //   onPageChange={(onPageData: any) => {
            //     setParams((prev) => {
            //       return { ...prev, offset: (onPageData - 1) * 10 };
            //     });
            //   }}
          />
        </HorizontalTabs>
      </Card>
    </Stack>
  );
}
export default QueriesSection;
