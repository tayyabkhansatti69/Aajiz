import { useState } from "react";
import { CustomTable } from "@/src/components";
import { Typography } from "@mui/material";
import dayjs from "dayjs";
import { useGetRecentScannedStampsListQuery } from "@/src/services/admin/scanned-stamp/scanned-stamp-api";

function DonorScannedStamps() {
  const [params, setParams] = useState({ limit: 10, offSet: 0 });
  const { data, isLoading, isError, isFetching, isSuccess } =
    useGetRecentScannedStampsListQuery(params);

  const columns = [
    {
      accessorFn: (row: any) => row?.user_name ?? "-",
      id: "user_name",
      cell: (info: any) => info.getValue(),
      header: () => <span>Donor Name</span>,
      isSortable: false,
    },
    {
      accessorFn: (row: any) => row?.Card_Type ?? "-",
      id: "Card_Type",
      cell: (info: any) => info.getValue(),
      header: () => <span>Stamp Type</span>,
      isSortable: false,
    },
    {
      accessorFn: (row: any) => row?.card_num ?? "-",
      id: "card_num",
      cell: (info: any) => info.getValue(),
      header: () => <span>Card No</span>,
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
      accessorFn: (row: any) => row?.created_at ?? "-",
      id: "created_at",
      cell: (info: any) => dayjs(info.getValue()).format("hh:mm:ss A"),
      header: () => <span>Donation Time</span>,
      isSortable: false,
    },
    {
      accessorFn: (row: any) => row?.amount ?? "-",
      id: "amount",
      cell: (info: any) => (
        <Typography variant="body1" fontWeight={600} color="primary.main">
          {info.getValue()} RS.
        </Typography>
      ),
      header: () => <span>Price</span>,
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
      //   showSerialNo
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
export default DonorScannedStamps;
