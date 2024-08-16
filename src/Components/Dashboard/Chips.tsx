import React from "react"
import { Grid, Chip, Box, ListItemIcon, Typography } from "@mui/material"
import TagFacesIcon from '@mui/icons-material/TagFaces';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
import HomeWorkRoundedIcon from '@mui/icons-material/HomeWorkRounded';

const Chips = () => {
    return (
        <>
            <Grid container display={'flex'} justifyContent={'space-evenly'} margin={'2rem 4rem'}>
                <Grid item display={'flex'} alignItems={'center'} border={'1px solid #e8e8e8'} padding={'12px'} borderRadius={'1rem'} sx={{ cursor: 'pointer', transition: 'background 0.3s ease', ':hover': { background: '#fafafa' } }}>
                    <ListItemIcon sx={{ borderRadius: '50%', minWidth: '0px', padding: '8px', background: '#e8e8e8' }}><HomeWorkRoundedIcon /></ListItemIcon>
                    <Typography marginLeft={'12px'} fontSize={'16px'}>Remote</Typography>
                    <ListItemIcon sx={{ minWidth: '0px' }}><KeyboardArrowRightRoundedIcon /></ListItemIcon>
                </Grid>
                <Grid item display={'flex'} alignItems={'center'} border={'1px solid #e8e8e8'} padding={'12px'} borderRadius={'1rem'} sx={{ cursor: 'pointer', transition: 'background 0.3s ease', ':hover': { background: '#fafafa' } }}>
                    <ListItemIcon sx={{ borderRadius: '50%', minWidth: '0px', padding: '8px', background: '#e8e8e8' }}><HomeWorkRoundedIcon /></ListItemIcon>
                    <Typography marginLeft={'12px'} fontSize={'16px'}>Remote</Typography>
                    <ListItemIcon sx={{ minWidth: '0px' }}><KeyboardArrowRightRoundedIcon /></ListItemIcon>
                </Grid>
                <Grid item display={'flex'} alignItems={'center'} border={'1px solid #e8e8e8'} padding={'12px'} borderRadius={'1rem'} sx={{ cursor: 'pointer', transition: 'background 0.3s ease', ':hover': { background: '#fafafa' } }}>
                    <ListItemIcon sx={{ borderRadius: '50%', minWidth: '0px', padding: '8px', background: '#e8e8e8' }}><HomeWorkRoundedIcon /></ListItemIcon>
                    <Typography marginLeft={'12px'} fontSize={'16px'}>Remote</Typography>
                    <ListItemIcon sx={{ minWidth: '0px' }}><KeyboardArrowRightRoundedIcon /></ListItemIcon>
                </Grid>
                <Grid item display={'flex'} alignItems={'center'} border={'1px solid #e8e8e8'} padding={'12px'} borderRadius={'1rem'} sx={{ cursor: 'pointer', transition: 'background 0.3s ease', ':hover': { background: '#fafafa' } }}>
                    <ListItemIcon sx={{ borderRadius: '50%', minWidth: '0px', padding: '8px', background: '#e8e8e8' }}><HomeWorkRoundedIcon /></ListItemIcon>
                    <Typography marginLeft={'12px'} fontSize={'16px'}>Remote</Typography>
                    <ListItemIcon sx={{ minWidth: '0px' }}><KeyboardArrowRightRoundedIcon /></ListItemIcon>
                </Grid>
            </Grid>
            <Grid container display={'flex'} justifyContent={'space-evenly'} margin={'0rem 4rem'}>
                <Grid item display={'flex'} alignItems={'center'} border={'1px solid #e8e8e8'} padding={'12px'} borderRadius={'1rem'} sx={{ cursor: 'pointer', transition: 'background 0.3s ease', ':hover': { background: '#fafafa' } }}>
                    <ListItemIcon sx={{ borderRadius: '50%', minWidth: '0px', padding: '8px', background: '#e8e8e8' }}><HomeWorkRoundedIcon /></ListItemIcon>
                    <Typography marginLeft={'12px'} fontSize={'16px'}>Remote</Typography>
                    <ListItemIcon sx={{ minWidth: '0px' }}><KeyboardArrowRightRoundedIcon /></ListItemIcon>
                </Grid>
                <Grid item display={'flex'} alignItems={'center'} border={'1px solid #e8e8e8'} padding={'12px'} borderRadius={'1rem'} sx={{ cursor: 'pointer', transition: 'background 0.3s ease', ':hover': { background: '#fafafa' } }}>
                    <ListItemIcon sx={{ borderRadius: '50%', minWidth: '0px', padding: '8px', background: '#e8e8e8' }}><HomeWorkRoundedIcon /></ListItemIcon>
                    <Typography marginLeft={'12px'} fontSize={'16px'}>Remote</Typography>
                    <ListItemIcon sx={{ minWidth: '0px' }}><KeyboardArrowRightRoundedIcon /></ListItemIcon>
                </Grid>
                <Grid item display={'flex'} alignItems={'center'} border={'1px solid #e8e8e8'} padding={'12px'} borderRadius={'1rem'} sx={{ cursor: 'pointer', transition: 'background 0.3s ease', ':hover': { background: '#fafafa' } }}>
                    <ListItemIcon sx={{ borderRadius: '50%', minWidth: '0px', padding: '8px', background: '#e8e8e8' }}><HomeWorkRoundedIcon /></ListItemIcon>
                    <Typography marginLeft={'12px'} fontSize={'16px'}>Remote</Typography>
                    <ListItemIcon sx={{ minWidth: '0px' }}><KeyboardArrowRightRoundedIcon /></ListItemIcon>
                </Grid>
            </Grid>
        </>
    )
}

export default Chips