import { CustomTable } from "@/src/components";
import { useGetTicketsQuery } from "@/src/services/partner/support/support-api";
import { Card } from "@mui/material";
import dayjs from "dayjs";
import { useState } from "react";

export function TicketsStatusSection() {
  const [params, setParams] = useState({ offset: 0, limit: 10, page: 1 });
  const { data, isLoading, isError, isFetching, isSuccess } =
    useGetTicketsQuery(params);
  const columns = [
    {
      accessorFn: (row: any) => row.ticket_num ?? "-",
      id: "ticket_num",
      cell: (info: any) => info.getValue(),
      header: () => <span>Ticket No</span>,
      isSortable: false,
    },
    {
      accessorFn: (row: any) => row.subject ?? "-",
      id: "subject",
      cell: (info: any) => info.getValue(),
      header: () => <span>Subject</span>,
      isSortable: false,
    },
    {
      accessorFn: (row: any) => row.created_at ?? "-",
      id: "created_at",
      cell: (info: any) => dayjs(info.getValue()).format("DD/MM/YYYY"),
      header: () => <span>Created At</span>,
      isSortable: false,
    },
    {
      accessorFn: (row: any) => row.status ?? "-",
      id: "status",
      cell: (info: any) => info.getValue(),
      header: () => <span>Status</span>,
      isSortable: false,
    },
  ];
  return (
    <Card sx={{ p: 2, boxShadow: 10 }}>
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
            return {
              ...prev,
              offset: (onPageData - 1) * prev.limit,
              page: onPageData,
            };
          });
        }}
      />
    </Card>
  );
}
