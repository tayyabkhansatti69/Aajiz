import { CustomTable } from "@/src/components";
import HorizontalTabs from "@/src/components/Horizontal-tab";
import {
  useGetCancelDonorKycRequestsListQuery,
  useGetCancelPartnerKycRequestsListQuery,
} from "@/src/services/admin/kyc-requests/kyc-requests-api";
import { Button } from "@mui/material";
import { useState } from "react";

function CancelKYCRequests() {
  const [params, setParams] = useState({ limit: 10, offSet: 0 });
  const [params1, setParams1] = useState({ limit: 10, offSet: 0 });

  const {
    data: donor,
    isLoading: donorIsLoading,
    isError: donorIsError,
    isSuccess: donorIsSuccess,
    isFetching: donorIsFetching,
  } = useGetCancelDonorKycRequestsListQuery(params);
  const {
    data: partner,
    isLoading,
    isError,
    isSuccess,
    isFetching,
  } = useGetCancelPartnerKycRequestsListQuery(params1);
  const columns = [
    {
      accessorFn: (row: any) => row.donorName ?? "-",
      id: "donorName",
      cell: (info: any) => info.getValue(),
      header: () => <span>Donor Name</span>,
      isSortable: false,
    },
    {
      accessorFn: (row: any) => row.contact_num ?? "-",
      id: "contact_num",
      cell: (info: any) => info.getValue(),
      header: () => <span>Contact No</span>,
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
      accessorFn: (row: any) => row.profile ?? "-",
      id: "profile",
      cell: (info: any) => info.getValue(),
      header: () => <span>Business Type</span>,
      isSortable: false,
    },
    {
      accessorFn: (row: any) => row.profile ?? "-",
      id: "profile",
      cell: (info: any) => info.getValue(),
      header: () => <span>Queries</span>,
      isSortable: false,
    },
  ];
  const columns1 = [
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
      accessorFn: () => (
        <Button variant="text" sx={{ textDecoration: "underline" }}>
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
    <HorizontalTabs tabsArray={["Donor Cancel KYC", "Partner Cancel KYC"]}>
      <CustomTable
        data={donor?.body}
        columns={columns}
        isLoading={donorIsLoading}
        isFetching={donorIsFetching}
        isError={donorIsError}
        isSuccess={donorIsSuccess}
        isPagination
        totalPages={donor?.total_pages ?? 1}
        currentPage={donor?.current_page ?? 1}
        onPageChange={(onPageData: any) => {
          setParams((prev) => {
            return { ...prev, offset: (onPageData - 1) * 10 };
          });
        }}
      />
      <CustomTable
        data={partner?.body}
        columns={columns1}
        isLoading={isLoading}
        isFetching={isFetching}
        isError={isError}
        isSuccess={isSuccess}
        isPagination
        // showSerialNo
        totalPages={partner?.total_pages ?? 1}
        currentPage={partner?.current_page ?? 1}
        onPageChange={(onPageData: any) => {
          setParams1((prev) => {
            return { ...prev, offset: (onPageData - 1) * 10 };
          });
        }}
      />
    </HorizontalTabs>
  );
}
export default CancelKYCRequests;
