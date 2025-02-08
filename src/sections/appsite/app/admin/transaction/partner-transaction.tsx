import { CustomTable } from "@/src/components";
import { useGetPartnerTransactionListQuery } from "@/src/services/admin/transaction/transaction-api";
import { useState } from "react";

export function PartnerTransactionSection() {
  const [params, setParams] = useState({ limit: 10, offSet: 0 });
  const { data, isLoading, isError, isSuccess, isFetching } =
    useGetPartnerTransactionListQuery(params);

  const columns1 = [
    {
      accessorFn: (row: any) => row.donorName ?? "-",
      id: "donorName",
      cell: (info: any) => info.getValue(),
      header: () => <span>Stamp No.</span>,
      isSortable: false,
    },
    {
      accessorFn: (row: any) => row.contactNumber ?? "-",
      id: "contactNumber",
      cell: (info: any) => info.getValue(),
      header: () => <span>Stamp Type</span>,
      isSortable: false,
    },
    {
      accessorFn: (row: any) => row.businessType ?? "-",
      id: "businessType",
      cell: (info: any) => info.getValue(),
      header: () => <span>Donation Date</span>,
      isSortable: false,
    },
    {
      accessorFn: (row: any) => row.profile ?? "-",
      id: "profile",
      cell: (info: any) => `${info.getValue()} RS.`,
      header: () => <span>Donation Time</span>,
      isSortable: false,
    },
    {
      accessorFn: (row: any) => row.profile ?? "-",
      id: "profile",
      cell: (info: any) => `${info.getValue()} RS.`,
      header: () => <span>Amount</span>,
      isSortable: false,
    },
  ];
  return (
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
  );
}
