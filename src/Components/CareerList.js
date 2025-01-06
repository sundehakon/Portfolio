import { Avatar, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';

const CareerList = () => {
    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <ListItem alignItems='flex-start'>
                <ListItemAvatar>
                    <Avatar alt='Icon' src={<SchoolIcon />} />
                </ListItemAvatar>
                <ListItemText
                    primary='Sophie Radich Skole'
                    secondary=''
                >
                </ListItemText>
            </ListItem>
        </List>
    );
};

export default CareerList;