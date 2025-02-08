import { CustomTable } from "@/src/components";
import { useGetWithdrawRequestListQuery } from "@/src/services/admin/withdrawal-request/withdrawal-request-api";
import { Button, Card, Stack, Typography } from "@mui/material";
import dayjs from "dayjs";
import { useState } from "react";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

function WithdrawRequestSection() {
  const [params, setParams] = useState({ limit: 10, offSet: 0 });
  const { data, isLoading, isError, isSuccess, isFetching } =
    useGetWithdrawRequestListQuery(params);

  const columns = [
    {
      accessorFn: (row: any) => row.name_requester ?? "-",
      id: "name_requester",
      cell: (info: any) => info.getValue(),
      header: () => <span>Partner Name</span>,
      isSortable: false,
    },
    {
      accessorFn: (row: any) => row.request_time ?? "-",
      id: "request_time",
      cell: (info: any) => dayjs(info.getValue()).format("DD-MM-YYYY"),
      header: () => <span>Date</span>,
      isSortable: false,
    },
    {
      accessorFn: (row: any) => row.request_amount ?? "-",
      id: "request_amount",
      cell: (info: any) => (
        <Typography color="primary.main" fontWeight={600}>
          {info.getValue()} RS.
        </Typography>
      ),
      header: () => <span>Amount</span>,
      isSortable: false,
    },
    {
      accessorFn: (row: any) => row.businessType ?? "-",
      id: "businessType",
      cell: () => (
        <Button
          variant="text"
          sx={{ fontSize: "2rem" }}
          startIcon={<RemoveRedEyeIcon />}
        >
          View
        </Button>
      ),
      header: () => <span>Action</span>,
      isSortable: false,
    },
  ];

  return (
    <Stack rowGap={2}>
      <Typography variant="h5">Withdrawal Requests</Typography>
      <Card sx={{ p: 4 }}>
        <CustomTable
          data={data?.body}
          columns={columns}
          isLoading={isLoading}
          isFetching={isFetching}
          isError={isError}
          isSuccess={isSuccess}
          isPagination
          totalPages={data?.total_pages ?? 1}
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
export default WithdrawRequestSection;
