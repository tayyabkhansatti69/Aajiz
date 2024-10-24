import HorizontalTabs from "@/src/components/Horizontal-tab";
import { Box, Button, Grid, Paper, Typography } from "@mui/material";

function NotificationSection() {
    const notificationsData = [
        {
            section: 'New',
            items: [
                {
                    title: 'Your Donation offer is about to expire',
                    time: 'about an hour ago',
                    actionText: 'Recharge',
                },
                {
                    title: 'Your Donation has been received',
                    time: 'about an hour ago',
                    actionText: 'View Details',
                },
                {
                    title: 'Your Balance Expired on Card #126567213',
                    time: 'about an hour ago',
                },
                {
                    title: 'System will undergo scheduled maintenance on 24th October 2024',
                    time: 'about an hour ago',
                },
            ],
        },
        {
            section: 'Earlier',
            items: [
                {
                    title: 'Your Balance Expired on Card #126567213',
                    time: 'about an hour ago',
                },
            ],
        },
    ];

    return (
        <Grid pt={2} container>
            <Grid xs={12} item>
                <Typography variant='h4'>Notification</Typography>
            </Grid>

            <Grid xs={12} item>
                <Paper variant="elevation" elevation={2}>

                    <HorizontalTabs tabsArray={['Read', 'UnRead']}>
                        <Box px={2}>
                        {notificationsData.map((sectionData, sectionIndex) => (
                            <Grid item xs={12} key={sectionIndex}>
                                {/* Section Title */}
                                <Box px={1} py={1}>
                                <Typography variant="h6">{sectionData.section}</Typography>
                                </Box>
                                {/* Map through each notification item */}
                                {sectionData.items.map((item, itemIndex) => (
                                    <NotificationItem
                                        key={itemIndex}
                                        title={item.title}
                                        time={item.time}
                                        button={item.actionText}
                                    />
                                ))}
                            </Grid>
                        ))}
                        </Box>
                        <Box px={2}>
                        {notificationsData.map((sectionData, sectionIndex) => (
                            <Grid item xs={12} key={sectionIndex}>
                                {/* Section Title */}
                                <Box px={1}>
                                <Typography variant="h6">{sectionData.section}</Typography>
                                </Box>
                                {/* Map through each notification item */}
                                {sectionData.items.map((item, itemIndex) => (
                                    <NotificationItem
                                        key={itemIndex}
                                        title={item.title}
                                        time={item.time}
                                        button={item.actionText}
                                    />
                                ))}
                            </Grid>
                        ))}
                        </Box>
                    </HorizontalTabs>
                </Paper>
            </Grid>
        </Grid>
    )
}
export default NotificationSection


const NotificationItem = ({ title, time, button }) => (
    <Grid item xs={12}>
        <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottom: '1px solid #e0e0e0',
            padding: '12px 0px',
        }}>
            <Box>
                <Typography variant="body1" sx={{ fontWeight: 'bold' }}>{title}</Typography>
                <Typography variant="body2" color="textSecondary">{time}</Typography>
            </Box>
            {button && (
                <Button variant="contained" size="small" sx={{ marginLeft: 2 }}>
                    {button}
                </Button>
            )}
        </Box>
    </Grid>
);
