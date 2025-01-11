import { CustomTable } from "@/src/components";
import { Card, Stack, Typography } from "@mui/material";

function DonorAdminSection() {
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
      header: () => <span>Donor Name</span>,
      isSortable: false,
    },

    {
      accessorFn: (row: any) => row.contactNumber ?? "-",
      id: "contactNumber",
      cell: (info: any) => info.getValue(),
      header: () => <span>Email</span>,
      isSortable: false,
    },
    {
      accessorFn: (row: any) => row.businessType ?? "-",
      id: "businessType",
      cell: (info: any) => info.getValue(),
      header: () => <span>Business Type</span>,
      isSortable: false,
    },
    {
      accessorFn: (row: any) => row.profile ?? "-",
      id: "profile",
      cell: (info: any) => info.getValue(),
      header: () => <span>Last Login</span>,
      isSortable: false,
    },
    {
      accessorFn: (row: any) => row.profile ?? "-",
      id: "profile",
      cell: (info: any) => info.getValue(),
      header: () => <span>Profile</span>,
      isSortable: false,
    },
  ];
  return (
    <Stack rowGap={2}>
      <Typography variant="h5">Database</Typography>
      <Card sx={{ p: 4 }}>
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
      </Card>
    </Stack>
  );
}
export default DonorAdminSection;
