import ThreeDotsIcon from "@/src/assets/icons/chats/three-dots-";

import personMale from "@/src/assets/png/maleperson.jpeg";
import { CustomTable, CustomTabs, TableHeader } from "@/src/components";
import {
    Avatar,
    Box,
    Button,
    Checkbox,
    Grid,
    Grid2,
    IconButton,
    Paper,
    TextField,
    Typography
} from "@mui/material";
import { useState } from "react";

import { useRouter } from "next/navigation";
function LiveClassSection() {
    const [fields, setFields] = useState([{ id: 1, value: '' }]);
const router=useRouter()
    const handleStartLecture=()=>{
        router?.push("/liveclass/testclass")
    }

    const addNewField = () => {
        const newField = { id: fields.length + 1, value: '' };
        setFields([...fields, newField]);
    };

    const handleInputChange = (id, event) => {
        const newFields = fields.map((field) =>
            field.id === id ? { ...field, value: event.target.value } : field
        );
        setFields(newFields);
    };
    const columns = [
        {
            id: "select",
            header: ({ table }: any) => {
                return (
                    <Box>
                        <Checkbox
                            checked={table.getIsAllRowsSelected()}
                            onChange={table.getToggleAllRowsSelectedHandler()}
                        />
                    </Box>
                );
            },
            cell: ({ row }: any) => (
                <Box>
                    <Checkbox
                        disabled={row?.original?.Assigned}
                        checked={row?.original?.Assigned ? false : row.getIsSelected()}
                        onChange={row.getToggleSelectedHandler()}
                    />
                </Box>
            ),
        },
        {
            accessorFn: (row: any) => row.Name ?? "-",
            id: "Name",
            cell: (info: any) => (
                <Box display={"flex"} gap={2} alignItems={"center"}>
                    <Avatar
                        variant="circular"
                        src={personMale.src}
                        alt={info.getValue()}
                    />
                    <Typography variant="subtitle1" fontWeight={600} color="#374557">
                        {info.getValue()}
                    </Typography>
                </Box>
            ),
            header: () => <span>Name</span>,
            isSortable: false,
        },
        {
            accessorFn: (row: any) => row.studentID ?? "-",
            id: "studentID",
            cell: (info: any) => info.getValue(),
            header: () => <span>Student ID</span>,
            isSortable: false,
        },
        {
            accessorFn: (row: any) => row.pricePerLesson ?? "-",
            id: "pricePerlesson",
            cell: (info: any) => `$ ${info.getValue()}`,
            header: () => <span>Price per lesson</span>,
            isSortable: false,
        },
        {
            accessorFn: (row: any) => row.joinDate ?? "-",
            id: "joinDate",
            cell: (info: any) => info.getValue(),
            header: () => <span>Join Date</span>,
            isSortable: false,
        },
        {
            accessorFn: (row: any) => row.startingTime ?? "-",
            id: "startingTime",
            cell: (info: any) => info.getValue(),
            header: () => <span>starting Time</span>,
            isSortable: false,
        },
        {
            accessorFn: (row: any) => row.Action ?? "-",
            id: "Action",
            cell: () => {
                return (
                    <Box
                        display="flex"
                        justifyContent="flex-start"
                        alignItems="flex-start"
                        gap={1}
                    >
                        <IconButton>
                            <ThreeDotsIcon sx={{ width: '34.35px', height: '34.5px' }} />
                        </IconButton>

                    </Box>
                );
            },
            header: () => <span>Action</span>,
            isSortable: false,
        },
    ];
    const generateDummyData = (count: number) => {
        const names = ["John Doe", "Jane Smith",];
        const studentIDs = ["S001", "S002",];
        const pricePerLessons = [20, 25];
        const joinDates = ["2023-01-01", "2023-02-01",];
        const startingTime = ["15:30", "6:00"];

        const getRandomElement = (arr: any) =>
            arr[Math.floor(Math.random() * arr.length)];

        return Array.from({ length: count }, (_, index) => ({
            id: index,
            Name: getRandomElement(names),
            studentID: getRandomElement(studentIDs),
            pricePerLesson: getRandomElement(pricePerLessons),
            joinDate: getRandomElement(joinDates),
            startingTime: getRandomElement(startingTime),
            Assigned: Math.random() < 0.5, // Randomly assign Assigned as true or false
        }));
    };

    // Example usage:
    const dummyData = generateDummyData(2);
    console.log(dummyData);
    return (
        <>
        <Grid px={2} pt={7} container>
            <Grid xs={12} px={4} item>
                <Paper variant="elevation" elevation={2}>
                    <Typography variant="h5" sx={{ p: 2 }}>Choose Student </Typography>
                    <CustomTabs tabsNameArray={["Current students"]}>
                        <Box>
                            <Box px={2} my={1}>
                                <TableHeader
                                    tableHeaderData={[
                                        {
                                            type: "search",
                                            FieldProps: { name: "search", placeholder: "Search" },
                                        },
                                    ]}
                                />
                            </Box>

                            <CustomTable
                                columns={columns}
                                data={dummyData}
                                isLoading={false}
                                isError={false}
                                isSuccess={true}
                                isFetching={false}
                                isPagination={true}
                            />
                        </Box>

                    </CustomTabs>
                </Paper>
            </Grid>
            <Grid xs={12} px={4} item pt={2}>
                <Paper variant="elevation" elevation={2} >
                    <Box px={1} pt={1}>
                        <Typography variant="h5" sx={{ m: 2 }}>Lesson activity </Typography>
                        <Box maxWidth={{xs:'100vw',md:'50vh'}} px={2} pb={2}>

                            {fields.map((field, index) => (
                                <TextField
                                    key={field.id}
                                    variant="outlined"
                                    label={`Retractable answer ${index + 1}`}
                                    placeholder="Add a draggable item"
                                    value={field.value}
                                    onChange={(e) => handleInputChange(field.id, e)}
                                    fullWidth
                                    margin="normal"
                                />
                            ))}

                            <Button
                                variant="outlined"
                                onClick={addNewField}
                                startIcon={<span>+</span>}
                                sx={{
                                    fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1rem' },  // Font size based on screen size
                                    padding: { xs: '6px 12px', sm: '8px 16px', md: '10px 20px' },  // Adjust padding for different screen sizes
                                    width: { xs: '100%', sm: 'auto' },  // Full width on small screens, auto on larger
                                  }}
                                >
                                Add a new lesson activity
                            </Button>
                        </Box>
                    </Box>
                </Paper>

            </Grid>
            <Grid2 container sx={{ height: '100%',mt:2 }} px={4} size={{ xs: 12, }} >
                <Box
                    display={'flex'}
                    justifyContent={'flex-end'}
                    alignItems={'flex-end'}
                    sx={{ width: '100%', height: '100%' }}
                >
                    <Button variant="contained" sx={{ backgroundColor: '#242459', color: '#FFF' }} onClick={handleStartLecture}>
                        Start Video Lecture
                    </Button>
                </Box>
            </Grid2>


        </Grid>

        </>
    );
}

export default LiveClassSection;
