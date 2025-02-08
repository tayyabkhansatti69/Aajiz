import { CustomTable } from "@/src/components";
import { useGetInactiveCampaignsListQuery } from "@/src/services/admin/create-campaigns/create-campaigns-api";
import { Button } from "@mui/material";
import { useState } from "react";

function InactiveCampaign() {
  const [params, setParams] = useState({ limit: 10, offset: 0 });
  const { data, isLoading, isError, isSuccess, isFetching } =
    useGetInactiveCampaignsListQuery(params);

  const columns = [
    {
      accessorFn: (row: any) => row?.campaign_title ?? "-",
      id: "donorName",
      cell: (info: any) => info.getValue(),
      header: () => <span>Campaign Title</span>,
      isSortable: false,
    },
    {
      accessorFn: (row: any) => row.complete_goal ?? "-",
      id: "complete_goal",
      cell: (info: any) => `${info.getValue()} RS.`,
      header: () => <span>Achieve Goal</span>,
      isSortable: false,
    },
    {
      accessorFn: (row: any) => row.donation_goal ?? "-",
      id: "donation_goal",
      cell: (info: any) => `${info.getValue()} RS.`,
      header: () => <span>Donation Goal</span>,
      isSortable: false,
    },
    {
      accessorFn: (row: any) => row.profile ?? "-",
      id: "profile",
      cell: () => (
        <Button variant="text" sx={{ textDecoration: "underline" }}>
          View Campaign
        </Button>
      ),
      header: () => <span>Campaigns</span>,
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
export default InactiveCampaign;
