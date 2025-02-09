import { CustomTable } from "@/src/components";
import { useGetCardsRequestListQuery } from "@/src/services/admin/cards-request/cards-request-api";
import { Button, Card, Stack, Typography } from "@mui/material";
import { useState } from "react";

function CardRequestsSection() {
  const [params, setParams] = useState({ limit: 10, offSet: 0 });

  const { data, isLoading, isSuccess, isError, isFetching } =
    useGetCardsRequestListQuery(params);

  const columns = [
    {
      accessorFn: (row: any) => row?.requester_name ?? "-",
      id: "requester_name",
      cell: (info: any) => info.getValue(),
      header: () => <span>Donor Name</span>,
      isSortable: false,
    },
    {
      accessorFn: (row: any) => row.card_quantity ?? "-",
      id: "card_quantity",
      cell: (info: any) => info.getValue(),
      header: () => <span>Card Quantity</span>,
      isSortable: false,
    },
    {
      accessorFn: (row: any) => row.requester_email ?? "-",
      id: "requester_email",
      cell: (info: any) => info.getValue(),
      header: () => <span>Email</span>,
      isSortable: false,
    },
    {
      accessorFn: (row: any) => row?.status ?? "-",
      id: "status",
      cell: (info: any) => {
        const status = info.getValue();
        const backgroundColor =
          status === "Pending"
            ? "#F4F4F4"
            : status === "Delivered"
            ? "#ccf1f1"
            : status === "Accepted"
            ? "#E0EAFF"
            : "transparent";

        return (
          <Typography
            fontWeight={600}
            sx={{
              backgroundColor,
              padding: "4px 8px",
              borderRadius: 5,
              display: "inline-block",
              px: 2,
              py: 1,
            }}
          >
            {status}
          </Typography>
        );
      },
      header: () => <span>Status</span>,
      isSortable: false,
    },
    {
      accessorFn: (row: any) => row.profile ?? "-",
      id: "profile",
      cell: () => (
        <Button variant="text" sx={{ textDecoration: "underline" }}>
          View Request{" "}
        </Button>
      ),
      header: () => <span>Actions</span>,
      isSortable: false,
    },
  ];
  return (
    <Stack rowGap={2}>
      <Typography variant="h5">Physical Card Requests</Typography>
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
export default CardRequestsSection;
