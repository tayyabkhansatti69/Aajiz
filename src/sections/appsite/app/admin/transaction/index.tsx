import { CustomTable } from "@/src/components";
import { useGetPartnerTransactionListQuery } from "@/src/services/admin/transaction/transaction-api";
import { Card, Stack, Typography } from "@mui/material";
import { useState } from "react";

function AdminTransactionSection() {
  const [params, setParams] = useState({ limit: 10, offSet: 0 });
  const { data, isLoading, isError, isSuccess, isFetching } =
    useGetPartnerTransactionListQuery(params);

  const columns1 = [
    {
      accessorFn: (row: any) => row.donorName ?? "-",
      id: "donorName",
      cell: (info: any) => info.getValue(),
      header: () => <span>Partner Name</span>,
      isSortable: false,
    },
    {
      accessorFn: (row: any) => row.contactNumber ?? "-",
      id: "contactNumber",
      cell: (info: any) => info.getValue(),
      header: () => <span>Business Type</span>,
      isSortable: false,
    },
    {
      accessorFn: (row: any) => row.businessType ?? "-",
      id: "businessType",
      cell: (info: any) => info.getValue(),
      header: () => <span>Time</span>,
      isSortable: false,
    },
    {
      accessorFn: (row: any) => row.profile ?? "-",
      id: "profile",
      cell: (info: any) => `${info.getValue()} RS.`,
      header: () => <span>Amount</span>,
      isSortable: false,
    },
    {
      accessorFn: (row: any) => row.profile ?? "-",
      id: "profile",
      cell: (info: any) => `${info.getValue()} RS.`,
      header: () => <span>Status</span>,
      isSortable: false,
    },
  ];
  return (
    <Stack rowGap={2}>
      <Typography variant="h5">Transaction History</Typography>
      <Card sx={{ p: 4 }}>
        {/* <HorizontalTabs tabsArray={["Donor", "Partner"]}>
          <DonorTransactionSection />
          <PartnerTransactionSection />
        </HorizontalTabs> */}
        <CustomTable
          data={data?.body}
          columns={columns1}
          isLoading={isLoading}
          isFetching={isFetching}
          isError={isError}
          isSuccess={isSuccess}
          isPagination
          totalPages={data?.totalPages ?? 1}
          currentPage={data?.current_page ?? 1}
          onPageChange={(onPageData: any) => {
            setParams((prev) => {
              return { ...prev, offset: (onPageData - 1) * 10 };
            });
          }}
        />
      </Card>
    </Stack>
  );
}
export default AdminTransactionSection;
