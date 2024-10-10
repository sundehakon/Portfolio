import { Typography, Container, IconButton, useMediaQuery} from '@mui/material';
import Timeline from '@mui/lab/Timeline';
import { TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator } from '@mui/lab';
import SchoolIcon from '@mui/icons-material/School';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import WorkIcon from '@mui/icons-material/Work';
import { useTheme } from '@emotion/react';

const TimelineComponent = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    if (isMobile) return null;  

    return (
        <Container>
            <Typography sx={{ textAlign: 'center', marginBottom: 6 }} variant='h4'>Timeline</Typography>
            <Timeline position='alternate'>
                <TimelineItem>
                    <TimelineOppositeContent
                        sx={{ m: 'auto 0' }}
                        align='right'
                        variant='body2'
                        color='text.secondary'
                    >
                        2023 - Now
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector sx={{ height: 10 }}/>
                        <TimelineDot>
                            <IconButton href='https://afk.no/mailand-vgs/' target='_blank'>
                                <SchoolIcon sx={{ color: 'white' }} />
                            </IconButton>
                        </TimelineDot>
                        <TimelineConnector sx={{ height: 10 }}/>
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                        <Typography variant='h6' component='span'>Mailand VGS</Typography>
                        <Typography>Information Technology</Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent
                        sx={{ m: 'auto 0' }}
                        variant='body2'
                        color='text.secondary'
                    >
                        February 2024
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector sx={{ height: 10 }}/>
                        <TimelineDot color='primary'>
                            <IconButton href='https://sparebank1.dev/' target='_blank'>
                                <AccountBalanceIcon sx={{ color: 'white' }}/>
                            </IconButton>
                        </TimelineDot>
                        <TimelineConnector sx={{ height: 10 }}/>
                    </TimelineSeparator>
                    <TimelineContent>
                        <Typography variant='h6' component='span'>
                            Sparebank 1 Utvikling
                        </Typography>
                        <Typography>2 week internship</Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent
                        sx={{ m: 'auto 0' }}
                        variant="body2"
                        color="text.secondary"
                    >
                        September 2024 - Now
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector sx={{ height: 10 }}/>
                        <TimelineDot color='primary' variant='outlined'>
                            <IconButton href='https://www.eksfin.no/no/' target='_blank'>
                                <WorkIcon />
                            </IconButton>
                        </TimelineDot>
                    </TimelineSeparator> 
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                        <Typography variant='h6' component='span'>
                            Eksfin
                        </Typography>
                        <Typography>Internship</Typography>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
        </Container>
    );
};

export default TimelineComponent;