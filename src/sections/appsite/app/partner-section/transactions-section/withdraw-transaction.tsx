import { CustomChip, CustomTable } from "@/src/components";
import { useGetPartnerTransactionListQuery } from "@/src/services/admin/transaction/transaction-api";
import { Box } from "@mui/material";
import dayjs from "dayjs";
import { useState } from "react";

export function WithdrawTransactionSection() {
  const [params, setParams] = useState({ offset: 0, limit: 10, page: 1 });
  const { data, isLoading, isError, isFetching, isSuccess } =
    useGetPartnerTransactionListQuery(params);
  const columnsHistory = [
    {
      accessorFn: (row: any) => row.transaction_id ?? "-",
      id: "transaction_id",
      cell: (info: any) => dayjs(info.getValue()).format("DD/MM/YYYY"),
      header: () => <span>Transaction Id</span>,
      isSortable: false,
    },
    {
      accessorFn: (row: any) => row.bank_name ?? "-",
      id: "bank_name",
      cell: (info: any) => `RS ${info.getValue()}`,
      header: () => <span>Withdrawal Method</span>,
      isSortable: false,
    },
    {
      accessorFn: (row: any) => row.request_time ?? "-",
      id: "request_time",
      cell: (info: any) => dayjs(info.getValue()).format("DD/MM/YYYY"),
      header: () => <span>Withdrawal Date</span>,
      isSortable: false,
    },
    {
      accessorFn: (row: any) => row.request_time ?? "-",
      id: "request_time",
      cell: (info: any) => dayjs(info.getValue()).format("h:MM:A"),
      header: () => <span>Time</span>,
      isSortable: false,
    },
    {
      accessorFn: (row: any) => row.request_amount ?? "-",
      id: "request_amount",
      cell: (info: any) => info.getValue(),
      header: () => <span>Amount</span>,
      isSortable: false,
    },
    {
      accessorFn: (row: any) => row.clear_status ?? "-",
      id: "clear_status",
      cell: (info: any) => {
        return (
          <Box
            display="flex"
            justifyContent="flex-start"
            alignItems="flex-start"
          >
            <CustomChip
              variant={info.getValue() === "PENDING" ? "danger" : "success"}
              rootSx={{
                fontSize: 11,
              }}
              ChipProps={{ label: info.getValue() }}
            />
          </Box>
        );
      },
      header: () => <span>Status</span>,
      isSortable: false,
    },
  ];
  return (
    <CustomTable
      data={data?.body}
      columns={columnsHistory}
      isLoading={isLoading}
      isFetching={isFetching}
      isError={isError}
      isSuccess={isSuccess}
      isPagination
      totalPages={data?.total_pages ?? 1}
      currentPage={data?.current_page ?? 1}
      onPageChange={(onPageData: any) => {
        setParams((prev) => {
          return {
            ...prev,
            offset: (onPageData - 1) * prev.limit,
            page: onPageData,
          };
        });
      }}
    />
  );
}
