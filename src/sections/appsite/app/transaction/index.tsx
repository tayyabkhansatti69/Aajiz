

import { CustomChip, CustomTable, } from "@/src/components";
import {
    Box,
    Grid,
    Paper,

} from "@mui/material";
function TransactionSection() {
    const columns = [

        {
            accessorFn: (row: any) => row.recipientNumber ?? "-",
            id: "recipientNumber",
            cell: (info: any) => info.getValue(),
            header: () => <span>Recipient Number</span>,
            isSortable: false,
        },

        {
            accessorFn: (row: any) => row.donationDate ?? "-",
            id: "donationDate",
            cell: (info: any) => info.getValue(),
            header: () => <span>Donation Date</span>,
            isSortable: false,
        },
        {
            accessorFn: (row: any) => row.amountDonated ?? "-",
            id: "amountDonated",
            cell: (info: any) => `RS ${info.getValue()}`,
            header: () => <span>Amount Donated</span>,
            isSortable: false,
        },
        {
            accessorFn: (row: any) => row.paymentMethod ?? "-",
            id: "paymentMethod",
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
                            variant={info.getValue() === "Confirmed" ? "success" : "danger"}
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
    const generateDummyData = (count: number) => {
        const recipientNumber = [112, 110, 103, 104];
        const donationDates = ["27/02/2024", "25/02/2024", "23/02/2024", "22/02/2024"];
        const amountDonated = [22000, 25000, 3000, 35000];
        const paymentMethod = ["JazzCash", "Bank Transfer", "Bank Transfer", "JazzCash"];
        const status = ["Confirmed", "Rejected"];

        const getRandomElement = (arr: any) =>
            arr[Math.floor(Math.random() * arr.length)];

        return Array.from({ length: count }, (_, index) => ({
            id: index,
            recipientNumber: getRandomElement(recipientNumber),
            donationDate: getRandomElement(donationDates),
            amountDonated: getRandomElement(amountDonated),
            paymentMethod: getRandomElement(paymentMethod),
            status: getRandomElement(status),
            Assigned: Math.random() < 0.5, // Randomly assign Assigned as true or false
        }));
    };

    // Example usage:
    const dummyData = generateDummyData(10);
    console.log(dummyData);
    return (
        <Grid  pt={2} container>
            <Grid xs={12} item>
                <Paper variant="elevation" elevation={2}>


                    <CustomTable
                        columns={columns}
                        data={dummyData}
                        isLoading={false}
                        isError={false}
                        isSuccess={true}
                        isFetching={false}
                        isPagination={true}
                    />



                </Paper>
            </Grid>
        </Grid>
    );
}

export default TransactionSection;
