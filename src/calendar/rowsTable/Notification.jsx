import * as React from 'react';
import Grid from '@mui/material/Grid';

/*const boxStyle = {
    maxWidth: '300px',

}*/

export default function Notification(porps){
    return (
        <>
            {
                porps.notifications.length>0?
                    <>
                        <Grid item xs={12} sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center',minHeight:'30px',cursor: 'pointer', width:'100px',borderRadius:'10px', backgroundColor:'#6C64A0', transition: 'background-color 0.5s ease-out 0s', color:'white', '&:hover':{backgroundColor:'#5FBFAF'}}}>
                            <h4 >{porps.notifications.length>0?porps.notifications[0].msg:null}</h4>
                        </Grid>
                        <Grid item xs={12}>
                            <h3>{porps.notifications?porps.notifications.length>1?'+'+(porps.notifications.length-1):null:null}</h3>
                        </Grid>
                    </>
                :
                null
            }
            
        </>
    );
}