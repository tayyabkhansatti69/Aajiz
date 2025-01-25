// import { useState } from "react";
import { CustomTable } from "@/src/components";
// import { useGetRecentScannedStampsListQuery } from "@/src/services/admin/scanned-stamp/scanned-stamp-api";
import { Button } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useRouter } from "next/navigation";

function PartnerScannedStamps() {
  const { push } = useRouter();
  // const [params, setParams] = useState({ limit: 10, offSet: 0 });
  // const { data, isLoading, isError, isFetching, isSuccess } =
  //   useGetRecentScannedStampsListQuery(params);
  const data = [
    {
      id: 1,
      businessName: "KFC",
      stampType: "Physical",
      cardNumber: "5121754",
      price: 500,
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
      data={data}
      columns={columns}
      // isLoading={isLoading}
      // isFetching={isFetching}
      // isError={isError}
      isSuccess={true}
      isPagination
      // showSerialNo
      // totalPages={data?.total_pages ?? 1}
      // currentPage={data?.current_page ?? 1}
      // onPageChange={(onPageData: any) => {
      //   setParams((prev) => {
      //     return { ...prev, offset: (onPageData - 1) * 10 };
      //   });
      // }}
    />
  );
}
export default PartnerScannedStamps;
