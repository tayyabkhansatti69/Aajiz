import { Avatar, AvatarGroup, Box, Button, Grid2, IconButton, List, ListItem, ListItemIcon, ListItemText, Paper, Typography } from "@mui/material"
import lecturePerson from "@/src/assets/image/lecture.png"
import Image from "next/image"
import ZoomIcon from "@/src/assets/icons/live-class/icon-zoom"
import PhoneClassIcons from "@/src/assets/icons/live-class/icon-phone"
import CircleIcon from '@mui/icons-material/Circle';
import { useRouter } from "next/navigation"

function TestClassSection() {
    const activities = [
        { title: "You'll see the lesson topic here", description: "Choose a course to see the topic" },
        { title: "Welcome", description: "Greet and connect with your student" },
        { title: "Placement test reminder", description: "Encourage your student to check their skills" },
        { title: "Discuss goals and start a course", description: "Choose a course to see the topic" },
        { title: "Self-study activity", description: "Start a course to get study activities" },
        { title: "Live lesson activity", description: "Start a course to get speaking activities" },
        { title: "Feedback", description: "Correct errors and discuss progress" },
        { title: "Plan the next lessons", description: "Discuss assignment and lesson schedule" },
    ];
const router=useRouter()
    return (

        <Grid2 container spacing={2} px={0} pt={4}>
            <Grid2 container sx={{ height: '100%', mt: 2 }} px={4} size={{ xs: 12, }} >
                <Box
                    display={'flex'}
                    justifyContent={'flex-end'}
                    alignItems={'flex-end'}
                    sx={{ width: '100%', height: '100%' }}
                >
                    <Button variant="contained" sx={{ backgroundColor: '#242459', color: '#FFF' }} onClick={()=>{router.push('/liveclass/session')}} >
                        Start Video Lecture
                    </Button>
                </Box>
            </Grid2>
            <Grid2 size={{ xs: 12, md: 8 }}>
                <Paper variant="elevation" elevation={2} >
                    <Box display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} alignItems={'flex-start'} p={2} gap={2}>
                        <Typography variant="h5" >
                            Test the classroom

                        </Typography>
                        <Typography variant="caption" sx={{ pl: '1rem' }}>
                            10k students
                        </Typography>


                    </Box>
                    <Box
                        display="flex"
                        justifyContent={'flex-start'}
                        alignItems={'flex-start'}
                        flexDirection={'row'}
                        p={2}
                        sx={{ height: '100%', width: '100%', position: 'relative' }}
                    >
                        {/* Image component */}
                        <Image
                            src={lecturePerson}
                            alt="Lecture Person"
                            layout="responsive"
                            width={976}
                            height={567.62}
                        />

                        {/* Live text and icon overlay */}
                        <Box
                            sx={{
                                position: 'absolute',
                                top: '40px',
                                left: '40px',
                                backgroundColor: 'rgba(55, 69, 87, 0.5)', // Semi-transparent red
                                padding: '5px 10px',
                                borderRadius: '5px',
                                display: 'flex',
                                alignItems: 'center',
                                gap:'1rem'
                            }}
                        >
                            <CircleIcon sx={{color:'rgba(252, 107, 87, 1)',width:'8px',height:'7.93px'}}/>
                            {/* <Box sx={{ backgroundColor: 'red', fontSize: '18px', mr: 1,borderRadius:'50%' }} /> */}
                            <Typography variant="caption" sx={{ color: 'white', fontWeight: 'bold' }}>
                                LIVE
                            </Typography>
                        </Box>
                    </Box>
                    <Box display={'flex'} flexDirection={'row'} justifyContent={'space-between'} alignItems={"flex-start"} mt={2} px={2} pb={2}>
                        <Box display={'flex'} flexDirection={'column'} alignItems={'flex-start'} justifyContent={'center'} gap={1}>
                            <Typography variant="body2" fontWeight={700}>Students</Typography>

                            <AvatarGroup max={4}>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                                <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                                <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
                                <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
                            </AvatarGroup>
                        </Box>

                        <Box display="flex" flexDirection="row" alignItems={"center"} justifyContent={"center"} gap={1}>
                            <IconButton sx={{
                                background: 'rgba(85, 190, 230, 1)', borderRadius: '16px', width: '60.3px', height: '64.5px', '&:hover': {
                                    background: 'rgba(85, 190, 230, 1)', // No color change on hover
                                },
                            }}>
                                <PhoneClassIcons sx={{ width: '21.4px', height: '29.3px' }} />
                            </IconButton>
                            <IconButton sx={{
                                background: 'rgba(85, 190, 230, 1)', borderRadius: '16px', width: '60.3px', height: '64.5px', '&:hover': {
                                    background: 'rgba(85, 190, 230, 1)', // No color change on hover
                                },
                            }}>
                                <ZoomIcon sx={{ width: '30.4px', height: '17.3px' }} />
                            </IconButton>
                        </Box>
                    </Box>
                </Paper>
            </Grid2>
            <Grid2 size={{ xs: 12, md: 4 }}>
                <Paper variant="elevation" elevation={2} >
                    <Box display="flex" justifyContent="flex-start" alignItems="flex-start" flexDirection={'column'} sx={{ padding: '16px', maxWidth: '400px', borderRadius: '8px', p: '2rem', pb: '10rem' }}>
                        <Typography variant="h6" sx={{ marginBottom: '16px' }}>Lesson activities</Typography>
                        <List>
                            {activities.map((activity, index) => (
                                <ListItem key={index} sx={{ paddingY: '2px' }}>
                                    <ListItemIcon>
                                        <CircleIcon sx={{ fontSize: '10px', color: '#00b8f5' }} />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={activity.title}
                                        secondary={activity.description}
                                        primaryTypographyProps={{ sx: { fontWeight: 'bold', fontSize: '14px' } }}
                                        secondaryTypographyProps={{ sx: { color: '#9e9e9e', fontSize: '12px' } }}
                                    />
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                </Paper>
            </Grid2>

        </Grid2>
    )
}
export default TestClassSection
