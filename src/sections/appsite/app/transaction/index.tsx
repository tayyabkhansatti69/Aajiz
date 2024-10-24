

import {  CustomChip, CustomTable, } from "@/src/components";
import HorizontalTabs from "@/src/components/Horizontal-tab";
import { useGetBalanceQuery, useGetTransactionListQuery } from "@/src/services/donor/transaction";
import {
    Box,
    // Box,
    Grid,
    Paper,

} from "@mui/material";
import dayjs from "dayjs";
import { useState } from "react";
function TransactionSection() {
    const [param, setParams] = useState({
        offset: 0,
        limit: 10
    });

    const { data, isLoading, isFetching, isError, isSuccess } = useGetTransactionListQuery({ ...param });
const {data:getHistor,isLoading:hisltoryLoading,isFetching:historyFetching,isError:historyError,isSuccess:historySuccess}=useGetBalanceQuery({...param});
    const columns = [

        // {
        //     accessorFn: (row: any) => row.recipientNumber ?? "-",
        //     id: "recipientNumber",
        //     cell: (info: any) => info.getValue(),
        //     header: () => <span>Recipient Number</span>,
        //     isSortable: false,
        // },

        {
            accessorFn: (row: any) => row.donation_date ?? "-",
            id: "donationDate",
            cell: (info: any) => dayjs(info.getValue()).format('DD/MM/YYYY'),
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
            header: () => <span>Payment Method</span>,
            isSortable: false,
        },
        // {
        //     accessorFn: (row: any) => row.status ?? "-",
        //     id: "status",
        //     cell: (info: any) => {
        //         return (
        //             <Box
        //                 display="flex"
        //                 justifyContent="flex-start"
        //                 alignItems="flex-start"
        //             >
        //                 <CustomChip
        //                     variant={info.getValue() === "Confirmed" ? "success" : "danger"}
        //                     rootSx={{
        //                         fontSize: 11,
        //                     }}
        //                     ChipProps={{ label: `${info.getValue()}` }}
        //                 />
        //             </Box>
        //         );
        //     },
        //     header: () => <span>Status</span>,
        //     isSortable: false,
        // },

    ];
    const columnsHistory = [

        // {
        //     accessorFn: (row: any) => row.payment_method ?? "-",
        //     id: "payment_method",
        //     cell: (info: any) => info.getValue(),
        //     header: () => <span>Payment Method</span>,
        //     isSortable: false,
        // },

        {
            accessorFn: (row: any) => row.date_and_time ?? "-",
            id: "date_and_time",
            cell: (info: any) => dayjs(info.getValue()).format('DD/MM/YYYY'),
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
                return (
                    <Box
                        display="flex"
                        justifyContent="flex-start"
                        alignItems="flex-start"
                    >
                        <CustomChip
                            variant={info.getValue() === true ? "success" : "danger"}
                            rootSx={{
                                fontSize: 11,
                            }}
                            ChipProps={{ label: `${info.getValue()}` }}
                        />
                    </Box>
                );
            },
            header: () => <span>Status</span>,
            isSortable: false,
        },

    ];
    // const generateDummyData = (count: number) => {
    //     const recipientNumber = [112, 110, 103, 104];
    //     const donationDates = ["27/02/2024", "25/02/2024", "23/02/2024", "22/02/2024"];
    //     const amountDonated = [22000, 25000, 3000, 35000];
    //     const paymentMethod = ["JazzCash", "Bank Transfer", "Bank Transfer", "JazzCash"];
    //     const status = ["Confirmed", "Rejected"];

    //     const getRandomElement = (arr: any) =>
    //         arr[Math.floor(Math.random() * arr.length)];

    //     return Array.from({ length: count }, (_, index) => ({
    //         id: index,
    //         recipientNumber: getRandomElement(recipientNumber),
    //         donationDate: getRandomElement(donationDates),
    //         amountDonated: getRandomElement(amountDonated),
    //         paymentMethod: getRandomElement(paymentMethod),
    //         status: getRandomElement(status),
    //         Assigned: Math.random() < 0.5, // Randomly assign Assigned as true or false
    //     }));
    // };

    // // Example usage:
    // const dummyData = generateDummyData(10);
    // console.log(dummyData);
    return (
        <Grid pt={2} container>
            <Grid xs={12} item>
                <Paper variant="elevation" elevation={2}>

                <HorizontalTabs tabsArray={['Stamp Transactions', 'Withdrawals']}>



                    <CustomTable
                        data={data?.donations}
                        columns={columns}
                        isLoading={isLoading}
                        isFetching={isFetching}
                        isError={isError}
                        isSuccess={isSuccess}
                        isPagination
                        showSerialNo
                        totalPages={data?.pages ?? 1}
                        currentPage={data?.current_page ?? 1}
                        onPageChange={(onPageData: any) => {
                            setParams((prev) => {
                                return { ...prev, offset: (onPageData - 1) * 10 };
                            });
                        }}

                    />
                    <CustomTable
                        data={getHistor?.body}
                        columns={columnsHistory}
                        isLoading={hisltoryLoading}
                        isFetching={historyFetching}
                        isError={historyError}
                        isSuccess={historySuccess}
                        isPagination
                        showSerialNo
                        totalPages={getHistor?.pages ?? 1}
                        currentPage={getHistor?.current_page ?? 1}
                        onPageChange={(onPageData: any) => {
                            setParams((prev) => {
                                return { ...prev, offset: (onPageData - 1) * 10 };
                            });
                        }}

                    />
                    </HorizontalTabs>
                </Paper>
            </Grid>
        </Grid>
    );
}

export default TransactionSection;
