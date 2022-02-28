import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

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

const renderBox = (setTemp) =>{
    let arryRows = [];
    for(let i = 0 ; i<2 ; i++){
        arryRows.push(
            <Grid item xs={12} key={i}>
                <h3>00:00:00</h3>
            </Grid>
        );
    }
    setTemp(arryRows);
}

const calculaColor = () => {
    return colorList[Math.floor(Math.random() * (7 + 0)) - 0].color;
}

export default function Rows (props){
    const [temp,setTemp]=React.useState([]);
    React.useEffect(()=>{
        renderBox(setTemp);
    },[]);
    return(
        <>
            <Box sx={{ flexGrow: 1 , textAlign:'center', backgroundColor:calculaColor(), borderRadius:'10px',}}>
                <Grid container spacing={1} sx={{cursor: 'pointer', height: '9.5rem' , padding: '10px', color:'#2C2C2C', transition: 'height 0.5s ease-out', '&:hover':{height:'12rem'}}}>
                    <Grid item xs={12}>
                        <h2>{props.id}</h2>
                        <h2>{props.day}</h2>
                    </Grid>
                    {
                        temp.map((el)=>(
                            el
                        ))
                    }
                </Grid>
            </Box>
        </>
    );
}