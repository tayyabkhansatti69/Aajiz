import { CustomTable } from "@/src/components";
import { useGetDonorDBListQuery } from "@/src/services/admin/donor/donor-db-api";
import { Card, Stack, Typography } from "@mui/material";
import dayjs from "dayjs";
import { useState } from "react";

function DonorAdminSection() {
  const [params, setParams] = useState({ limit: 10, offSet: 0 });
  const { data, isLoading, isError, isSuccess, isFetching } =
    useGetDonorDBListQuery(params);

  const columns = [
    {
      accessorFn: (row: any) => row.name ?? "-",
      id: "name",
      cell: (info: any) => info.getValue(),
      header: () => <span>Donor Name</span>,
      isSortable: false,
    },

    {
      accessorFn: (row: any) => row.email ?? "-",
      id: "email",
      cell: (info: any) => info.getValue(),
      header: () => <span>Email</span>,
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
      cell: () => <Typography color="#F36F56" fontWeight={600}>Restricted User </Typography>,
      header: () => <span>Profile</span>,
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
export default DonorAdminSection;
