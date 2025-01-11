import { CustomTable } from "@/src/components";
import HorizontalTabs from "@/src/components/Horizontal-tab";
import { Card, Stack, Typography } from "@mui/material";

function ScannedStampSection() {
  const data = [
    {
      id: 1,
      businessName: "KFC",
      stampType: "Physical",
      cardNumber: "123456",
      price: 2500,
    },
  ];
  const columns = [
    {
      accessorFn: (row: any) => row.businessName ?? "-",
      id: "businessName",
      cell: (info: any) => info.getValue(),
      header: () => <span>Business Name</span>,
      isSortable: false,
    },
    {
      accessorFn: (row: any) => row.stampType ?? "-",
      id: "stampType",
      cell: (info: any) => info.getValue(),
      header: () => <span>Stamp Type</span>,
      isSortable: false,
    },
    {
      accessorFn: (row: any) => row.cardNumber ?? "-",
      id: "cardNumber",
      cell: (info: any) => info.getValue(),
      header: () => <span>Card Number</span>,
      isSortable: false,
    },
    {
      accessorFn: (row: any) => row.price ?? "-",
      id: "price",
      cell: (info: any) => `${info.getValue()} RS.`,
      header: () => <span>Price</span>,
      isSortable: false,
    },
  ];
  const columns1 = [
    {
      accessorFn: (row: any) => row.businessName ?? "-",
      id: "businessName",
      cell: (info: any) => info.getValue(),
      header: () => <span>Business Name</span>,
      isSortable: false,
    },
    {
      accessorFn: (row: any) => row.stampType ?? "-",
      id: "stampType",
      cell: (info: any) => info.getValue(),
      header: () => <span>Stamp Type</span>,
      isSortable: false,
    },
    {
      accessorFn: (row: any) => row.cardNumber ?? "-",
      id: "cardNumber",
      cell: (info: any) => info.getValue(),
      header: () => <span>Card Number</span>,
      isSortable: false,
    },
    {
      accessorFn: (row: any) => row.price ?? "-",
      id: "price",
      cell: (info: any) => `${info.getValue()} RS.`,
      header: () => <span>Price</span>,
      isSortable: false,
    },
  ];
  return (
    <Stack rowGap={2}>
      <Typography variant="h5">Recent Donations</Typography>
      <Card sx={{p:4}}>
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
export default ScannedStampSection;
