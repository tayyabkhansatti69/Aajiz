import { CustomTable } from "@/src/components";
import { useGetDonorQueriesListQuery } from "@/src/services/admin/queries/queries-api";
import { Button } from "@mui/material";
import dayjs from "dayjs";
import { useState } from "react";

function PartnerQueries() {
  const [params, setParams] = useState({ limit: 10, offset: 0 });
  const { data, isLoading, isError, isSuccess, isFetching } =
    useGetDonorQueriesListQuery(params);

  const columns = [
    {
      accessorFn: (row: any) => row.ticket_num ?? "-",
      id: "ticket_num",
      cell: (info: any) => info.getValue(),
      header: () => <span>Ticket Name</span>,
      isSortable: false,
    },
    {
      accessorFn: (row: any) => row.created_at ?? "-",
      id: "created_at",
      cell: (info: any) => dayjs(info.getValue()).format("DD-MM-YYYY"),
      header: () => <span>Date</span>,
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
      accessorFn: (row: any) => row.businessType ?? "-",
      id: "businessType",
      cell: () => (
        <Button variant="text" sx={{ textDecoration: "underline" }}>
          View Ticket
        </Button>
      ),
      header: () => <span>Ticket Details</span>,
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
    <CustomTable
      data={data?.body}
      columns={columns}
      isLoading={isLoading}
      isFetching={isFetching}
      isError={isError}
      isSuccess={isSuccess}
      isPagination
      // showSerialNo
      totalPages={data?.pages ?? 1}
      currentPage={data?.current_page ?? 1}
      onPageChange={(onPageData: any) => {
        setParams((prev) => {
          return { ...prev, offset: (onPageData - 1) * 10 };
        });
      }}
    />
  );
}
export default PartnerQueries;
