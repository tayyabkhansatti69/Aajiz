import { CustomTable } from "@/src/components";
import { useGetRecentScannedStampsPartnerListQuery } from "@/src/services/admin/scanned-stamp/scanned-stamp-api";
import dayjs from "dayjs";
import { useState } from "react";

export function StampTransactionSection() {
  const [params, setParams] = useState({ offset: 0, limit: 10, page: 1 });
  const { data, isLoading, isError, isFetching, isSuccess } =
    useGetRecentScannedStampsPartnerListQuery(params);
  const columns = [
    {
      accessorFn: (row: any) => row.card_num ?? "-",
      id: "card_num",
      cell: (info: any) => info.getValue(),
      header: () => <span>Stamp No.</span>,
      isSortable: false,
    },
    {
      accessorFn: (row: any) => row.Card_Type ?? "-",
      id: "Card_Type",
      cell: (info: any) => info.getValue(),
      header: () => <span>Stamp Type</span>,
      isSortable: false,
    },
    {
      accessorFn: (row: any) => row.created_at ?? "-",
      id: "created_at",
      cell: (info: any) => dayjs(info.getValue()).format("DD/MM/YYYY"),
      header: () => <span>Donation Date</span>,
      isSortable: false,
    },
    {
      accessorFn: (row: any) => row.created_at ?? "-",
      id: "created_at",
      cell: (info: any) => dayjs(info.getValue()).format("h:MM:A"),
      header: () => <span>Donation Time</span>,
      isSortable: false,
    },
    {
      accessorFn: (row: any) => row.amount ?? "-",
      id: "amount",
      cell: (info: any) => `RS ${info.getValue()}`,
      header: () => <span>Amount Donated</span>,
      isSortable: false,
    },
  ];
  return (
    <CustomTable
      data={data?.notifications}
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
  );
}
