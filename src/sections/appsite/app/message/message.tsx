import { Box, Button, Divider, Grid2, IconButton, InputAdornment, Paper, TextField, Typography } from "@mui/material"
import messagnger1 from "@/src/assets/png/messanger-img.png"
import contact1 from "@/src/assets/png/contact1.png"
import contact2 from "@/src/assets/png/contact2.png"
import contact3 from "@/src/assets/png/contact3.png"
import contact4 from "@/src/assets/png/contact4.png"
import contact5 from "@/src/assets/png/contact5.png"
import contact6 from "@/src/assets/png/contact6.png"
// import io from 'socket.io-client';

import fileIcon from "@/src/assets/png/icon-file.png"
import copyIcon from "@/src/assets/png/icon-image.png"

import Image from "next/image"
import { CustomTabs } from "@/src/components"
import { useState } from "react"
import PhoneIcon from "@/src/assets/icons/chats/phone-icon"
import SendIcon from '@mui/icons-material/Send';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import VideoIcon from "@/src/assets/icons/chats/video-icons"
import ThreeDotsIcon from "@/src/assets/icons/chats/three-dots-"
// const socket = io('http://localhost:5000'); 
// let socket;
function MessageSection() {
    const [message, setMessage] = useState('');
    // const [chat, setChat] = useState([]);

    const senderData = [{
        id: 1,
        message: 'hi'
    },
    {
        id: 2,
        message: 'how are you'
    }
    ]
    const reciverData = [{
        id: 1,
        message: 'hi'
    },
    {
        id: 2,
        message: 'i am fine'
    }
    ]

    const fileData = [{
        id: 1,
        image: copyIcon,
        type: "file.doc",
        date: '2 March 2021, 13:45 PM',
        size: '1.2 Mb'
    },

    {
        id: 2,
        image: copyIcon,
        type: "file.jpg",
        date: '2 March 2021, 13:45 PM',
        size: '2.2 Mb'
    },
    {
        id: 1,
        image: copyIcon,
        type: "file.png",
        date: '2 March 2021, 13:45 PM',
        size: '1 Mb'
    },
    {
        id: 1,
        image: copyIcon,
        type: "file.excel",
        date: '2 March 2021, 13:45 PM',
        size: '1.7 Mb'
    }
    ]
    const downloadData = [{
        id: 1,
        image: fileIcon,
        type: "link.com",
        date: '2 March 2021, ',
        size: '13:45 PM'
    },

    {
        id: 2,
        image: fileIcon,
        type: "link.com",
        date: '2 March 2021, ',
        size: '13:45 PM'
    },
    {
        id: 3,
        image: fileIcon,
        type: "link.com",
        date: '2 March 2021, ',
        size: '13:45 PM'
    },
    {
        id: 4,
        image: fileIcon,
        type: "link.com",
        date: '2 March 2021, ',
        size: '13:45 PM'
    }
    ]

    //   useEffect(() => {
    //     // Initialize socket connection on component mount
    //     socket = io();

    //     // Listen for incoming messages
    //     socket.on('receiveMessage', (message) => {
    //       setChat((prevChat) => [...prevChat, message]);
    //     });

    //     return () => {
    //       socket.off('receiveMessage'); // Clean up event listener on component unmount
    //       socket.disconnect(); // Disconnect socket on unmount
    //     };
    //   }, []);

    //   const handleSendMessage = () => {
    //     if (message.trim()) {
    //       const newMessage = { user: 'Mohamed Farag', text: message };
    //       // Emit message to the server
    //     //   socket.emit('sendMessage', newMessage);

    //       // Update local chat array with the new message
    //       setChat((prevChat) => [...prevChat, newMessage]);
    //       setMessage(''); // Clear the input
    //     }
    //   };


    const contactsData = [
        {
            id: 1,
            image: contact1
        },
        {
            id: 2,
            image: contact2
        },
        {
            id: 3,
            image: contact3
        },
        {
            id: 4,
            image: contact4
        },
        {
            id: 5,
            image: contact5
        },
        {
            id: 6,
            image: contact6
        },
        {
            id: 7,
            image: contact5
        },
        {
            id: 8,
            image: contact6
        },

    ]
    const chatsData = [

        {
            id: 1,
            live: false,
            image: contact1,
            name: 'student1',
            status: 'unread',
            message: 'hello how are',
            time: '12:45 PM',
            count: '2'
        },
        {
            id: 2,
            live: true,
            image: contact2,
            name: 'student2',
            status: 'unread',
            message: 'hello how are',
            time: '12:45 PM',
            count: '2'
        },
        {
            id: 3,
            live: false,
            image: contact3,
            name: 'student3',
            status: 'read',
            message: 'hello how are',
            time: '12:45 PM',
            count: '0'
        },
        {
            id: 4,
            live: true,
            image: contact4,
            name: 'student4',
            status: 'unread',
            message: 'hello how are',
            time: '12:45 PM',
            count: '2'
        },
        {
            id: 5,
            live: true,
            image: contact5,
            name: 'student5',
            status: 'unread',
            message: 'hello how are',
            time: '12:45 PM',
            count: '2'
        },
        {
            id: 6,
            live: true,
            image: contact6,
            name: 'student6',
            status: 'unread',
            message: 'hello how are',
            time: '12:45 PM',
            count: '2'
        },
        {
            id: 7,
            live: true,
            image: contact3,
            name: 'student3',
            status: 'unread',
            message: 'hello how are',
            time: '12:45 PM',
            count: '2'
        },
    ]



    const unReadData = chatsData.filter(item => item.status === "unread");

    return (
        <Grid2 container spacing={2} px={0} pt={3.4} pb={0}>
            <Grid2 size={{ xs: 12, md: 4,lg:3.5 }}>
                <Paper variant="elevation" elevation={2} sx={{ p: '10px 10px' }}>
                    <Box display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'flex-start'} gap={2} pt={1} >
                        <Image src={messagnger1} alt={'messagnger1'} width={88.7} height={88.7} />
                        <Box display={'flex'} flexDirection={'column'} alignItems={'flex-start'} justifyContent={'flex-start'}>
                            <Typography variant='h6' fontWeight={700}>
                                Mohamed farag
                            </Typography>
                            <Typography variant='body1'>
                                Student
                            </Typography>
                        </Box>
                    </Box>
                    <Divider sx={{ mb: 3, marginTop: 3, border: '1px solid rgba(219, 219, 219, 1)' }} />
                    <Box display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={"space-between"}>
                        <Typography variant="body2" fontWeight={600}>
                            Contacts
                        </Typography>
                        <Typography variant="caption" fontWeight={400}>
                            View All
                        </Typography>
                    </Box>
                    <Box
                        display={'flex'}
                        justifyContent={'center'}
                        flexDirection={'row'}
                        alignItems={'center'}
                        mt={2}
                        gap={1}
                        pb={2}// Add gaps between images
                        sx={{
                            maxWidth: '330px',
                            overflowX: 'auto',
                            '&::-webkit-scrollbar': {
                                height: '0px',
                                width: '10px',
                                mt: '1rem' // Custom scrollbar height (optional)
                            },
                            '&::-webkit-scrollbar-thumb': {
                                backgroundColor: '#888', // Custom scrollbar color (optional)
                                borderRadius: '10px',
                            },
                        }}
                    >
                        {contactsData?.map((item) => {
                            return (
                                <Image
                                    src={item?.image}
                                    alt={'contacts'}
                                    width={44.4}
                                    height={44.4}
                                    key={item?.id} // Add a key if available
                                />
                            );
                        })}
                    </Box>

                    <Divider sx={{ mb: 3, marginTop: 1, border: '1px solid rgba(219, 219, 219, 1)' }} />
                    <Box mt={4} display={'flex'} flexDirection={'column'}>
                        <Box display={'flex'} flexDirection={'row'} justifyContent={'flex-start'} alignItems={'center'}>
                            <Typography variant="body2" fontWeight={600}>
                                Chats
                            </Typography>
                        </Box>
                        <CustomTabs tabsNameArray={["All", "Urread"]} >
                            <Box>
                                <Divider sx={{ mb: 1, width: '100%', marginTop: '-26px', border: '0.92px solid rgba(219, 219, 219, 1)' }} />

                                <Box display="flex" justifyContent="center" flexDirection="column" alignItems="center" gap={0} sx={{
                                    maxHeight: '400px',
                                    overflowY: 'auto',
                                    '&::-webkit-scrollbar': {
                                        width: '0px',
                                        height: '0px' // Width of the scrollbar
                                    },
                                    '&::-webkit-scrollbar-thumb': {
                                        backgroundColor: '#888', // Color of the scrollbar thumb
                                        borderRadius: '10px',
                                        minHeight: '5px', // Minimum height for the scrollbar thumb
                                        height: '5px', // Set the height of the scrollbar thumb (make it smaller)
                                    },
                                    '&::-webkit-scrollbar-thumb:hover': {
                                        backgroundColor: '#555', // Change color on hover
                                    },

                                }}>
                                    {chatsData?.map((item, index) => (
                                        <>
                                            <Box
                                                key={index} // Add a key prop when mapping
                                                display="flex"
                                                justifyContent="space-between"
                                                alignItems="center"
                                                flexDirection="row"
                                                width="100%" // Optional: to ensure full-width for alignment
                                                mb={1} // Optional: margin-bottom for spacing between rows
                                            >

                                                <Box display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'flex-start'} gap={0} >

                                                    <Box display="flex" alignItems="center" position="relative">
                                                        <Image src={item?.image} alt="chats" width={55.5} height={55.5} />
                                                        {item?.live && (
                                                            <IconButton
                                                                sx={{
                                                                    border: '1.8px solid white',
                                                                    borderRadius: '3.75px',
                                                                    position: 'absolute',
                                                                    bottom: 0,
                                                                    right: 0,
                                                                    width: '14.78px',
                                                                    height: '14.78px',
                                                                    background: 'rgba(50, 105, 211, 1)'
                                                                }}
                                                            />
                                                        )}
                                                    </Box>


                                                    <Box display="flex" flexDirection="column" alignItems="flex-start" justifyContent="flex-start" ml={1}>
                                                        <Typography variant="body2" fontWeight={700}>
                                                            {item?.name}
                                                        </Typography>
                                                        <Typography variant="caption">
                                                            {item?.message}
                                                        </Typography>
                                                    </Box>
                                                </Box>
                                                <Box display="flex" flexDirection="column" alignItems="flex-end" justifyContent="flex-start" ml={2}>
                                                    <Typography variant="caption" fontWeight={400}>
                                                        {item?.time}
                                                    </Typography>
                                                    {item?.count !== '0' && (


                                                        <Box display="flex" justifyContent={'center'} alignItems={'center'} sx={{
                                                            width: '22.17px',
                                                            height: '22.17px',
                                                            borderRadius: '3.75px',
                                                            background: 'rgba(50, 105, 211, 1)'
                                                        }}>
                                                            <Typography variant="caption" color="#FFF">
                                                                {item?.count}
                                                            </Typography>
                                                        </Box>
                                                    )}
                                                </Box>

                                            </Box>

                                            <Divider sx={{ mb: 1, width: '100%', marginTop: 0, border: '0.92px solid rgba(219, 219, 219, 1)' }} />
                                        </>
                                    ))}
                                </Box>


                            </Box>

                            <Box>
                                <Divider sx={{ mb: 1, width: '100%', marginTop: '-26px', border: '0.92px solid rgba(219, 219, 219, 1)' }} />

                                <Box display="flex" justifyContent="center" flexDirection="column" alignItems="center">
                                    {unReadData?.map((item, index) => (
                                        <>

                                            <Box

                                                key={index} // Add a key prop when mapping
                                                display="flex"
                                                justifyContent="space-between"
                                                alignItems="center"
                                                flexDirection="row"
                                                width="100%" // Optional: to ensure full-width for alignment
                                                mb={1}
                                                sx={{
                                                    maxHeight: '400px',
                                                    overflowY: 'auto',
                                                    '&::-webkit-scrollbar': {
                                                        height: '0px',
                                                        width: '1px',
                                                        ml: '1rem' // Custom scrollbar height (optional)
                                                    },
                                                    '&::-webkit-scrollbar-thumb': {
                                                        backgroundColor: '#888', // Custom scrollbar color (optional)
                                                        borderRadius: '10px',
                                                    },
                                                }}
                                            // Optional: margin-bottom for spacing between rows
                                            >
                                                <Box display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'flex-start'} gap={0} >

                                                    <Box display="flex" alignItems="center" position="relative">
                                                        <Image src={item?.image} alt="chats" width={55.5} height={55.5} />
                                                        {item?.live && (
                                                            <IconButton
                                                                sx={{
                                                                    border: '1.8px solid white',
                                                                    borderRadius: '3.75px',
                                                                    position: 'absolute',
                                                                    bottom: 0,
                                                                    right: 0,
                                                                    width: '14.78px',
                                                                    height: '14.78px',
                                                                    background: 'rgba(50, 105, 211, 1)'
                                                                }}
                                                            />
                                                        )}
                                                    </Box>


                                                    <Box display="flex" flexDirection="column" alignItems="flex-start" justifyContent="flex-start" ml={1}>
                                                        <Typography variant="body2" fontWeight={700}>
                                                            {item?.name}
                                                        </Typography>
                                                        <Typography variant="caption">
                                                            {item?.message}
                                                        </Typography>
                                                    </Box>
                                                </Box>
                                                <Box display="flex" flexDirection="column" alignItems="flex-end" justifyContent="flex-start" ml={2}>
                                                    <Typography variant="caption" fontWeight={400}>
                                                        {item?.time}
                                                    </Typography>
                                                    {item?.count !== '0' && (


                                                        <Box display="flex" justifyContent={'center'} alignItems={'center'} sx={{
                                                            width: '22.17px',
                                                            height: '22.17px',
                                                            borderRadius: '3.75px',
                                                            background: 'rgba(50, 105, 211, 1)'
                                                        }}>
                                                            <Typography variant="caption" color="#FFF">
                                                                {item?.count}
                                                            </Typography>
                                                        </Box>
                                                    )}
                                                </Box>

                                            </Box>
                                            <Divider sx={{ mb: 1, width: '100%', marginTop: 0, border: '0.92px solid rgba(219, 219, 219, 1)' }} />
                                        </>
                                    ))}
                                </Box>


                            </Box>

                        </CustomTabs>

                    </Box>
                </Paper>
            </Grid2>
            <Grid2 size={{ xs: 12, md: 5,lg:5 }}  pt={4} >
                <Box display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'flex-start'} gap={2} >
                    <Image src={messagnger1} alt={'messagnger1'} width={64} height={64} />
                    <Box display={'flex'} flexDirection={'column'} alignItems={'flex-start'} justifyContent={'flex-start'}>
                        <Typography variant='h6' fontWeight={700}>
                            Mohamed farag
                        </Typography>
                        <Box display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'center'} gap={1}>
                            <Box
                                sx={{

                                    borderRadius: '50%',
                                    width: '10px',
                                    height: '10px',
                                    background: 'rgba(50, 105, 211, 1)'
                                }}
                            />
                            <Typography variant='body1'>
                                Online
                            </Typography>
                        </Box>
                    </Box>
                </Box>
                <Divider sx={{ mb: 3, marginTop: 3, border: '1px solid rgba(219, 219, 219, 1)' }} />
                <Box
                    sx={{
                        height: '85vh',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                    }}
                >
                    <Box
                        sx={{
                            flexGrow: 1, // This allows the message container to expand and take available space
                            overflowY: 'auto',
                            display: 'flex',
                            flexDirection: 'column',
                            padding: 2,
                        }}
                    >
                        {/* Sender's Messages */}
                        {senderData.map((item: any) => (
                            <Typography
                                variant="body2"
                                key={item?.id}
                                sx={{
                                    marginBottom: 2,
                                    alignSelf: 'flex-start', // Aligns messages to the start (left)
                                    background: 'rgba(219, 219, 219, 1)',
                                    color: 'text.secondary',
                                    borderRadius: '16px',
                                    padding: '12px 106px 12px 18px',
                                }}
                            >
                                {item?.message}
                            </Typography>
                        ))}

                        {/* Receiver's Messages */}
                        {reciverData.map((item: any) => (
                            <Typography
                                variant="body2"
                                key={item?.id}
                                sx={{
                                    marginBottom: 2,
                                    alignSelf: 'flex-end', // Aligns messages to the end (right)
                                    background: 'rgba(50, 105, 211, 1)',
                                    color: '#FFFFFF',
                                    borderRadius: '16px',
                                    padding: '12px 106px 12px 18px',
                                }}
                            >
                                {item?.message}
                            </Typography>
                        ))}
                    </Box>

                    <Box
                        sx={{
                            display: 'flex',
                            width: '100%',
                            alignItems: 'baseline',
                            padding: 4,
                        }}
                    >
                        <TextField
                            fullWidth
                            variant="outlined"
                            label="Type your message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            sx={{ marginRight: 2, background: '#FFF' }}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            edge="end"
                                            aria-label="upload document"
                                            onClick={() => console.log('Upload clicked')}
                                        >
                                            <AttachFileIcon sx={{ transform: 'rotate(45deg)' }} />
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}


                        />
                        <Button variant="contained" sx={{ background: "rgba(50, 105, 211, 1)", color: '#FFF' }} endIcon={<SendIcon />}>
                            Send
                        </Button>
                    </Box>
                </Box>

            </Grid2>
            <Grid2 size={{ xs: 12, md: 3 ,lg:3.5 }} >
                <Paper variant="elevation" elevation={2} sx={{ p: '10px 10px' }}>
                    <Box display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'space-evenly'} pt={2} pb={2} >
                        <PhoneIcon sx={{ width: '44.35px', height: '44.5px' }} />
                        <VideoIcon sx={{ width: '44.35px', height: '44.5px' }} />
                        <ThreeDotsIcon sx={{ width: '44.35px', height: '44.5px' }} />

                    </Box>

                    <Divider sx={{ mb: 3, marginTop: 3, border: '1px solid rgba(219, 219, 219, 1)' }} />
                    <Box display={'flex'} justifyContent={'space-between'} flexDirection={'row'} alignItems={'center'} mb={2}>
                        <Typography variant="body1" fontWeight={700}>Shared File</Typography>
                        <Typography variant="body2" fontWeight={400} color='text?.primary'>View All</Typography>
                    </Box>

                    <Box display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} alignItems={'flex-start'} >

                        {fileData?.map((item: any) => (
                            <Box key={item?.id} display={'flex'} flexDirection={'row'} alignItems={'flex-start'} justifyContent={'space-between'} gap={1}>
                                <Image src={item?.image} alt="chat" width={36.96} height={36.96} />
                                <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'flex-start'} mr={1}>
                                    <Typography variant="body2">{item?.type}</Typography>
                                    <Typography variant="body2">{item?.date}</Typography>
                                </Box>
                                <Typography variant="body2" ml={2}>{item?.size}</Typography>
                            </Box>
                        ))}
                    </Box>


                    <Divider sx={{ mb: 3, marginTop: 3, border: '1px solid rgba(219, 219, 219, 1)' }} />
                    <Box display={'flex'} justifyContent={'space-between'} flexDirection={'row'} alignItems={'center'} mb={2} mt={4}>
                        <Typography variant="body1" fontWeight={700}>Shared Link</Typography>
                        <Typography variant="body2" fontWeight={400} color='text?.primary'>View All</Typography>
                    </Box>

                    <Box display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} alignItems={'flex-start'} pb={10}>

                        {downloadData?.map((item: any) => (
                            <Box key={item?.id} display={'flex'} flexDirection={'row'} alignItems={'flex-start'} justifyContent={'space-between'} gap={2} >
                                <Image src={item?.image} alt="chat" width={36.96} height={36.96} />
                                <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'flex-start'} mr={2}>
                                    <Typography variant="body2">{item?.type}</Typography>
                                    <Typography variant="body2">{item?.date}</Typography>
                                </Box>
                                <Typography variant="body2" ml={2}>{item?.size}</Typography>
                            </Box>
                        ))}
                    </Box>
                </Paper>

            </Grid2>

        </Grid2>
    )
}
export default MessageSection