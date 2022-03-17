import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Notification from './Notification';

const colorList = [
    {id:1, color:'#6874CD'},
    {id:2, color:'#68BFCD'},
    {id:3, color:'#8768CD'},
    {id:4, color:'#B668CD'},
    {id:5, color:'#CD6893'},
    {id:6, color:'#CD6868'},
    {id:7, color:'#CDC868'},
    {id:8, color:'#CD9B68'},
];

const calculateColor = () => {
    return colorList[Math.floor(Math.random() * (7))].color;
}

export default function Rows (props){
    return(
        <>
            <Box sx={{textAlign:'center',backgroundColor:calculateColor(), borderRadius:'10px',}}>
                <Grid container spacing={0} sx={{height: '9.5rem' , padding: '10px', color:'#2C2C2C', transition: 'height 0.5s ease-out 0.2s', '&:hover':{height:'12rem'}}}>
                    <Grid item xs={12} >
                        <h2>{props.id}</h2>
                        <h2>{props.day}</h2>
                    </Grid>
                    <Notification notifications={props.notifications}/>
                </Grid>
            </Box>
        </>
    );
}