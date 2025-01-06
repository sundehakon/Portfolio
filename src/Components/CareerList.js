import { Avatar, Divider, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';

const CareerList = () => {
    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <ListItem alignItems='flex-start'>
                <ListItemAvatar>
                    <Avatar sx={{ bgcolor: 'white' }}>
                        <WorkIcon color='primary'/>
                    </Avatar>
                </ListItemAvatar>
                <ListItemText
                    primary='Eksportfinansiering Norge'
                    secondary='2024 - Now'
                />
            </ListItem>
            <Divider variant='inset' component='li' />
            <ListItem alignItems='flex-start'>
                <ListItemAvatar>
                    <Avatar sx={{ bgcolor: 'seagreen' }}>
                        <SchoolIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText
                    primary='Mailand Videregående Skole'
                    secondary='2023 - Now'
                />
            </ListItem>
            <Divider variant='inset' component='li' />
            <ListItem alignItems='flex-start'>
                <ListItemAvatar>
                    <Avatar>
                        <SchoolIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText
                    primary='Sophie Radich Skole'
                    secondary='2020 - 2023'
                />
            </ListItem>
        </List>
    );
};

export default CareerList;