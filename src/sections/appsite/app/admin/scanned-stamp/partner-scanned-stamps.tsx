import { useState } from "react";
import { CustomTable } from "@/src/components";
import { useGetRecentScannedStampsPartnerListQuery } from "@/src/services/admin/scanned-stamp/scanned-stamp-api";
import { Button } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useRouter } from "next/navigation";

function PartnerScannedStamps() {
  const { push } = useRouter();
  const [params, setParams] = useState({ limit: 10, offSet: 0 });
  const { data, isLoading, isError, isFetching, isSuccess } =
    useGetRecentScannedStampsPartnerListQuery(params);
  const columns = [
    {
      accessorFn: (row: any) => row.business_name ?? "-",
      id: "business_name",
      cell: (info: any) => info.getValue(),
      header: () => <span>Business Name</span>,
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
      accessorFn: (row: any) => row.card_num ?? "-",
      id: "card_num",
      cell: (info: any) => info.getValue(),
      header: () => <span>Card Number</span>,
      isSortable: false,
    },
    {
      accessorFn: (row: any) => row.amount ?? "-",
      id: "amount",
      cell: (info: any) => `${info.getValue()} RS.`,
      header: () => <span>Price</span>,
      isSortable: false,
    },
    {
      accessorFn: (row: any) => row.action ?? "-",
      id: "action",
      cell: ({ row }: any) => (
        <Button
          variant="text"
          startIcon={<VisibilityIcon />}
          onClick={() => {
            push(`view-scanned-stamp?id=${row?.original?.id}`);
          }}
        >
          View
        </Button>
      ),
      header: () => <span>Action</span>,
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
      // showSerialNo
      totalPages={data?.total_pages ?? 1}
      currentPage={data?.current_page ?? 1}
      onPageChange={(onPageData: any) => {
        setParams((prev) => {
          return { ...prev, offset: (onPageData - 1) * 10 };
        });
      }}
    />
  );
}
export default PartnerScannedStamps;
