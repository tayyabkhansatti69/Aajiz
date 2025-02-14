import { CustomTable } from "@/src/components";
import { useGetPartnerKycRequestsListQuery } from "@/src/services/admin/kyc-requests/kyc-requests-api";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";

function PartnerKYCRequests() {
  const { push } = useRouter();
  const { data, isLoading, isError, isSuccess, isFetching } =
    useGetPartnerKycRequestsListQuery({});

  const columns = [
    {
      accessorFn: (row: any) => row.name ?? "-",
      id: "name",
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
      accessorFn: (row: any) => row.email ?? "-",
      id: "email",
      cell: (info: any) => info.getValue(),
      header: () => <span>Email</span>,
      isSortable: false,
    },
    {
      accessorFn: (row: any) => row.business_type ?? "-",
      id: "business_type",
      cell: (info: any) => info.getValue(),
      header: () => <span>Business Type</span>,
      isSortable: false,
    },
    {
      accessorFn: (row: any) => (
        <Button
          variant="text"
          sx={{ textDecoration: "underline" }}
          onClick={() => {
            push(`/kyc-requests/view-profile?id=${row?.id}`);
          }}
        >
          View Profile
        </Button>
      ),
      id: "profile",
      cell: (info: any) => info.getValue(),
      header: () => <span>Profile</span>,
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
      //   totalPages={data?.pages ?? 1}
      //   currentPage={data?.current_page ?? 1}
      //   onPageChange={(onPageData: any) => {
      //     setParams((prev) => {
      //       return { ...prev, offset: (onPageData - 1) * 10 };
      //     });
      //   }}
    />
  );
}
export default PartnerKYCRequests;
