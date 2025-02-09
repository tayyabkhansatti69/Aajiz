import { CustomTable } from "@/src/components";
import { useGetPartnerDBListQuery } from "@/src/services/admin/partner/partner-db-api";
import { Button, Card, Stack, Typography } from "@mui/material";
import dayjs from "dayjs";
import { useState } from "react";

function PartnerAdminSection() {
  const [params, setParams] = useState({ limit: 10, offSet: 0 });
  const { data, isLoading, isError, isSuccess, isFetching } =
    useGetPartnerDBListQuery(params);
  const columns = [
    {
      accessorFn: (row: any) => row.business_name ?? "-",
      id: "business_name",
      cell: (info: any) => info.getValue(),
      header: () => <span>Business Name</span>,
      isSortable: false,
    },

    {
      accessorFn: (row: any) => row.industry ?? "-",
      id: "industry",
      cell: (info: any) => info.getValue(),
      header: () => <span>Industry Type</span>,
      isSortable: false,
    },
    {
      accessorFn: (row: any) => row.business ?? "-",
      id: "business",
      cell: (info: any) => info.getValue(),
      header: () => <span>Business Type</span>,
      isSortable: false,
    },
    {
      accessorFn: (row: any) => row.last_login ?? "-",
      id: "last_login",
      cell: (info: any) => dayjs(info.getValue()).format("DD/MM/YYYY"),
      header: () => <span>Last Login</span>,
      isSortable: false,
    },
    {
      accessorFn: (row: any) => row.profile ?? "-",
      id: "profile",
      cell: () => (
        <Button variant="text" sx={{ textDecoration: "underline" }}>
          View Profile
        </Button>
      ),
      header: () => <span>Profile</span>,
      isSortable: false,
    },
    {
      accessorFn: (row: any) => row.profile ?? "-",
      id: "profile",
      cell: () => (
        <Typography color="#F36F56" fontWeight={600}>
          Restricted User{" "}
        </Typography>
      ),
      header: () => <span>Action</span>,
      isSortable: false,
    },
  ];
  return (
    <Stack rowGap={2}>
      <Typography variant="h5">Database</Typography>
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
export default PartnerAdminSection;
