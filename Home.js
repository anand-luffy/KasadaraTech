import React from 'react';
import { Box, Stack,Paper,Typography } from '@mui/material';
import "../App.css";
import brushes from "../assets/brushes.jpg";


const title=["title1","title2","title3"];

export default function Home(){
    return(
        <>            
            <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",margin:{xs:"20px",md:"90px"} }}>
                <Typography  color="text.secondary" variant='h4'>XYZ ART SUPPLIES<br></br></Typography>           
            </Box>
            <Stack>
                <Box sx={{display:"flex",flexDirection:{xs:"column",md:"row"},justifyContent:"space-between",gap:"4"}}>
                    {title.map((title)=>
                    <Box sx={{m:3}}>
                        <Paper className='card' elevation={3} sx={{p:0.2,height:"23vw",width:"29.2vw",overflow:"hidden"}}>
                            <img src={brushes}alt="imgpics" style={{objectFit:"cover"}} height="310px" width="395px"/>
                            <Box  className='cardtext' sx={{justifyContent:"center",backdropFilter:`blur("5px")`,background:"#1f3d4738"}}>
                            <Typography component="div" color="text.secondary" variant='h4'>{title}</Typography>
                            <Typography component="div" variant="subtitle1" color="text.secondary" sx={{mt:2}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </Typography>
                            </Box>
                        </Paper>
                    </Box>
                    )}
                </Box>
                <Box>
                    <Typography color="text.secondary" variant='h4'>let's make magic art</Typography>
                </Box>
            </Stack>
        </>
    );
}