import { CustomChip, CustomTable } from "@/src/components";
import HorizontalTabs from "@/src/components/Horizontal-tab";
import {
  useGetBalanceQuery,
  useGetTransactionListQuery,
} from "@/src/services/donor/transaction";
import { Box, Grid, Paper } from "@mui/material";
import dayjs from "dayjs";
import { useState,  } from "react";

function TransactionSection() {
  const [donationParams, setDonationParams] = useState({
    offset: 0,
    limit: 10,
    page: 1
  });
  
  const [withdrawalParams, setWithdrawalParams] = useState({
    offset: 0,
    limit: 10,
    page: 1
  });

  const { 
    data: donationData, 
    isLoading, 
    isFetching, 
    isError, 
    isSuccess 
  } = useGetTransactionListQuery(donationParams);

  const {
    data: withdrawalData,
    isLoading: historyLoading,
    isFetching: historyFetching,
    isError: historyError,
    isSuccess: historySuccess,
  } = useGetBalanceQuery(withdrawalParams);

  const columns = [
    {
      accessorFn: (row: any) => row.donation_date ?? "-",
      id: "donationDate",
      cell: (info: any) => dayjs(info.getValue()).format("DD/MM/YYYY"),
      header: () => <span>Donation Date</span>,
      isSortable: false,
    },
    {
      accessorFn: (row: any) => row.donation_amount ?? "-",
      id: "amountDonated",
      cell: (info: any) => `RS ${info.getValue()}`,
      header: () => <span>Amount Donated</span>,
      isSortable: false,
    },
    {
      accessorFn: (row: any) => row.donation_type ?? "-",
      id: "paymentMethod",
      cell: (info: any) => info.getValue(),
      header: () => <span>Donation Method</span>,
      isSortable: false,
    },
  ];

  const columnsHistory = [
    {
      accessorFn: (row: any) => row.date_and_time ?? "-",
      id: "date_and_time",
      cell: (info: any) => dayjs(info.getValue()).format("DD/MM/YYYY"),
      header: () => <span>Donation Date</span>,
      isSortable: false,
    },
    {
      accessorFn: (row: any) => row.amount ?? "-",
      id: "amount",
      cell: (info: any) => `RS ${info.getValue()}`,
      header: () => <span>Amount Donated</span>,
      isSortable: false,
    },
    {
      accessorFn: (row: any) => row.payment_method ?? "-",
      id: "payment_method",
      cell: (info: any) => info.getValue(),
      header: () => <span>Payment Method</span>,
      isSortable: false,
    },
    {
      accessorFn: (row: any) => row.status ?? "-",
      id: "status",
      cell: (info: any) => {
        const statusValue = info.getValue() === true ? "Approved" : "Pending";
        return (
          <Box display="flex" justifyContent="flex-start" alignItems="flex-start">
            <CustomChip
              variant={info.getValue() === true ? "success" : "danger"}
              rootSx={{ fontSize: 11 }}
              ChipProps={{ label: statusValue }}
            />
          </Box>
        );
      },
      header: () => <span>Status</span>,
      isSortable: false,
    },
  ];

  const handleDonationPageChange = (newPage: number) => {
    setDonationParams(prev => ({
      ...prev,
      offset: (newPage - 1) * prev.limit,
      page: newPage
    }));
  };

  const handleWithdrawalPageChange = (newPage: number) => {
    setWithdrawalParams(prev => ({
      ...prev,
      offset: (newPage - 1) * prev.limit,
      page: newPage
    }));
  };

  return (
    <Grid pt={2} container>
      <Grid xs={12} item>
        <Paper variant="elevation" elevation={2}>
          <HorizontalTabs tabsArray={["Stamp Transactions", "Withdrawals"]}>
            <CustomTable
              data={donationData?.donations}
              columns={columns}
              isLoading={isLoading}
              isFetching={isFetching}
              isError={isError}
              isSuccess={isSuccess}
              isPagination
              showSerialNo
              totalPages={donationData?.pages ?? 1}
              currentPage={donationParams.page}
              onPageChange={handleDonationPageChange}
            />
            <CustomTable
              data={withdrawalData?.body}
              columns={columnsHistory}
              isLoading={historyLoading}
              isFetching={historyFetching}
              isError={historyError}
              isSuccess={historySuccess}
              isPagination
              showSerialNo
              totalPages={withdrawalData?.pages ?? 1}
              currentPage={withdrawalParams.page}
              onPageChange={handleWithdrawalPageChange}
            />
          </HorizontalTabs>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default TransactionSection;