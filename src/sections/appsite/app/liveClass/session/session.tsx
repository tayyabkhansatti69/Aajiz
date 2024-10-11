import { Avatar, Box, Button, Divider, Grid2, Paper, Typography } from "@mui/material";
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import ChatIconsLive from "@/src/assets/icons/live-class/icon-chats";
import ReactIcon from "@/src/assets/icons/live-class/icon-react";
import NotesIcon from "@/src/assets/icons/live-class/icon-notes";
import ThreeDotsIcon from "@/src/assets/icons/chats/three-dots-";
import MicIcon from "@/src/assets/icons/live-class/icon-mic";
import CameraIcon from "@/src/assets/icons/live-class/icon-camer";
import ShareIcon from "@/src/assets/icons/live-class/icon-share";
import LeaveIcons from "@/src/assets/icons/live-class/icon-leave";
import Person1 from "@/src/assets/image/session/person1.png";
import Person2 from "@/src/assets/image/session/person2.png";
import Person3 from "@/src/assets/image/session/person3.png";
import Person4 from "@/src/assets/image/session/person4.png";
import Person5 from "@/src/assets/image/session/person5.png";
import contact1 from "@/src/assets/png/contact1.png"
import contact2 from "@/src/assets/png/contact2.png"
import contact3 from "@/src/assets/png/contact3.png"
import contact4 from "@/src/assets/png/contact4.png"
import contact5 from "@/src/assets/png/contact5.png"
import contact6 from "@/src/assets/png/contact6.png"

import Image from "next/image";



function SessionSection() {
    const dataOPerson = [{
        id: 1,
        image: Person1,
        name: 'person1'
    }, {
        id: 2,
        image: Person2,
        name: 'person2'
    }, {
        id: 3,
        image: Person3,
        name: 'person3'
    }, {
        id: 4,
        image: Person4,
        name: 'person4'
    },]

    const dataOfPeoples = [{
        id: 1,
        image: contact1,
        name: 'person1'
    }, {
        id: 2,
        image: contact2,
        name: 'person2'
    }, {
        id: 3,
        image: contact3,
        name: 'person3'
    }, {
        id: 4,
        image: contact4,
        name: 'person4'
    },
    {
        id: 5,
        image: contact5,
        name: 'person4'
    },
    {
        id: 6,
        image: contact6,
        name: 'person4'
    },
    {
        id: 7,
        image: contact4,
        name: 'person4'
    },
    {
        id: 8,
        image: contact5,
        name: 'person4'
    },
    {
        id: 9,
        image: contact6,
        name: 'person4'
    },
    ]
    return (
        <Paper
            variant="elevation"
            elevation={2}
            sx={{ background: 'rgba(238, 242, 255, 1)' }}
        >
            <Grid2 container spacing={2} px={{ xs: 1, md: 2 }} pt={{ xs: 4, md: 7 }}>
                <Grid2 size={{ xs: 12 }}>
                    <Box
                        display="flex"
                        flexDirection={{ xs: 'column', md: 'row' }}
                        alignItems="center"
                        justifyContent="space-between"
                        flexWrap="wrap"
                        sx={{ p: { xs: '8px', md: '10px' } }}
                        gap={2}
                    >
                        {/* First Box at the start */}
                        <Box
                            display="flex"
                            flexDirection="row"
                            alignItems="center"
                            gap={1}
                        >
                            <RadioButtonCheckedIcon
                                sx={{ color: "rgba(185, 28, 28, 1)", fontSize: { xs: '1.2rem', md: '1.8rem' } }}
                            />
                            <Typography
                                variant="body2"
                                sx={{ fontSize: { xs: '0.9rem', md: '1rem' } }}
                            >
                                00:20:06
                            </Typography>
                        </Box>

                        {/* Second Box at the end */}
                        <Box
                            display="flex"
                            flexDirection="row"
                            alignItems="center"
                            justifyContent="flex-end"
                            gap={2}
                            flexWrap="wrap"
                        >
                            {/* Icon Buttons */}
                            {[
                                { icon: <PeopleOutlineIcon sx={{ color: ' rgba(21, 130, 165, 1)' }} />, label: "People" },
                                { icon: <ChatIconsLive />, label: "Chats" },
                                { icon: <ReactIcon />, label: "Reacts" },
                                { icon: <NotesIcon />, label: "Notes" },
                                { icon: <ThreeDotsIcon sx={{ color: ' rgba(21, 130, 165, 1)' }} />, label: "More" }
                            ].map(({ icon, label }, index) => (
                                <Box
                                    key={index}
                                    display="flex"
                                    flexDirection="column"
                                    alignItems="center"
                                    gap={0.5}
                                >
                                    {icon}
                                    <Typography
                                        variant="caption"
                                        sx={{
                                            color: 'rgba(21, 130, 165, 1)',
                                            fontSize: { xs: '0.7rem', md: '0.9rem' }
                                        }}
                                    >
                                        {label}
                                    </Typography>
                                </Box>
                            ))}

                            <Divider
                                orientation="vertical"
                                sx={{
                                    height: { xs: '30px', md: '40px' },
                                    border: '0.92px solid rgba(219, 219, 219, 1)',
                                }}
                            />

                            {[
                                { icon: <MicIcon />, label: "Mic" },
                                { icon: <CameraIcon />, label: "Camer" },
                                { icon: <ShareIcon />, label: "Share" }
                            ].map(({ icon, label }, index) => (
                                <Box
                                    key={index}
                                    display="flex"
                                    flexDirection="column"
                                    alignItems="center"
                                    gap={0.5}
                                >
                                    {icon}
                                    <Typography
                                        variant="caption"
                                        sx={{
                                            color: 'rgba(21, 130, 165, 1)',
                                            fontSize: { xs: '0.7rem', md: '0.9rem' }
                                        }}
                                    >
                                        {label}
                                    </Typography>
                                </Box>
                            ))}

                            <Button
                                startIcon={<LeaveIcons />}
                                sx={{
                                    background: 'rgba(180, 35, 24, 1)',
                                    color: '#FFF',
                                    fontSize: { xs: '0.7rem', md: '0.9rem' },
                                    mt: { xs: 1, md: 0 }
                                }}
                            >
                                Leave
                            </Button>
                        </Box>
                    </Box>
                </Grid2>


            </Grid2>
            <Grid2 container spacing={2} pb={2} pt={1}>
                <Grid2 container spacing={1} size={{ xs: 12, md: 8, lg: 8 }}>  {/* Main container takes 8 columns in md */}
                    {dataOPerson.map((person: any) => (
                        <Grid2 size={{ xs: 12, md: 6, lg: 6 }} key={person.id}> {/* Each image takes half (6/12) */}
                            <Box width={'100%'} height={'100%'} position="relative"> {/* Adjusted the width to 100% for responsiveness */}
                                <Image
                                    src={person.image}
                                    alt={person.name}
                                    height={370}
                                    width={490}
                                    layout="responsive"
                                    objectFit="cover"
                                    style={{ borderRadius: '8px' }}
                                />
                                <Typography
                                    variant="subtitle1"
                                    color="white"
                                    align="center"
                                    sx={{
                                        position: 'absolute',
                                        bottom: 20,
                                        left: 20,
                                        width: '40%',
                                        backdropFilter: 'blur(4px)', // Apply blur effect
                                        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.5)', // Shadow for depth
                                        bgcolor: 'rgba(26, 30, 77, 0.8)', // Gray background with transparency (80% opacity)
                                        p: 1, // Padding around the text
                                        borderRadius: '8px 8px', // Rounded corners at the bottom
                                    }}
                                >
                                    {person.name}
                                </Typography>

                            </Box>
                        </Grid2>
                    ))}
                </Grid2>


                {/* Right Sidebar (People's list) */}
                <Grid2 size={{ xs: 12, md: 4 }}>
                    <Box display={'flex'} justifyContent={'center'} flexDirection={'column'} alignItems={'center'} gap={1} >
                        <Typography variant="h6" color="rgba(21, 130, 165, 1)" fontWeight={700}>
                            People&apos;s
                        </Typography>
                        <Grid2 container spacing={0.5}>
                            {dataOfPeoples?.map((person) => (
                                <Grid2 size={{ xs: 6, sm: 4, md: 4 }} key={person.id} display="flex" flexDirection="column" alignItems="center">
                                    <Avatar
                                        sx={{ width: 82, height: 82 }}
                                        src={person?.image?.src}
                                        alt={person?.name}
                                    />
                                    <Typography variant="body2" align="center" color='rgba(0, 0, 0, 1)' fontWeight={600} >
                                        {person.name}
                                    </Typography>
                                </Grid2>
                            ))}
                        </Grid2>
                        <Box width={'100%'} height={'100%'}> {/* Adjusted the width to 100% for responsiveness */}
                            <Image
                                src={Person5}
                                alt={'Person5'}
                                height={170}
                                width={346}
                                layout="responsive"
                                objectFit="cover"
                                style={{ borderRadius: '8px' }}
                            />
                        </Box>
                    </Box>
                </Grid2>
            </Grid2>

        </Paper>
    );
}

export default SessionSection;
