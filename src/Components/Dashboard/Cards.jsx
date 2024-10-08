/* eslint-disable react/prop-types */
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ShareMenuItem from '../Resuable/ShareMenuItem';
import { useState } from 'react';
import { isMobile } from 'react-device-detect';

export default function Cards(props) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Card sx={{height:isMobile ? '19.8rem':'20rem', width: '100%', marginTop:"1rem", borderRadius:'24px', cursor:'pointer'}} id='card-id'>
      <img src={props.image}  style={{ height: 125, cursor:'pointer', marginTop:'1rem' }}/>
      <div>
        <ShareMenuItem anchorEl = {anchorEl} open={open} handleClose={handleClose}/>
      </div>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color="#757575">
        {props.title}
        </Typography>
        <Typography variant="body2" color="#757575">
        {props.description}
        </Typography>
      </CardContent>
      <CardActions sx={{padding:isMobile ? '12px':'12px 48px'}} id='card-buttons'>
        <Button size="small" fullWidth variant='outlined' sx={{fontSize:isMobile ?'10px':'14px'}} onClick={handleClick}>Share</Button>
        <Button size="small" fullWidth variant='outlined' sx={{fontSize:isMobile ?'10px':'14px'}} onClick={()=> window.open(props.link, '_blank')}>Learn More</Button>
      </CardActions>
    </Card>
  );
}