import { useState , createContext } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, Stack, ThemeProvider, Typography, createTheme } from '@mui/material';
import NavBar from '../components/Navbar';
import Slidebar from '../components/Slidebar';
import Footer from '../components/Footer';
import HomeBody from './HomeBody';
import Parallax from './Parallax';
import Boxthree from '../components/Three';
import texture from "../assets/shop1.jpg";
import texture2 from "../assets/shop2.jpg";
import texture3 from "../assets/shop3.jpg";
export const add=createContext();
function App() {
  const [ theme , setTheme ] = useState('light');
  const Theme = createTheme({
    palette:{
      mode:theme
    }
  })
  const [sideBar, setSideBar] = useState(false);
  return (
    <ThemeProvider theme={Theme}>
      <Box>
          <add.Provider value={{sideBar,setSideBar}}>
            <CssBaseline/>
              <Box sx={{position:"fixed",top:"0",zIndex:"100",width:"100vw",height:{xs:"10vw",md:"4vw"}}} bgcolor={'background.default'} color={'text.primary'}>
                    <NavBar themeSetter={setTheme} themeIcon={theme}/>
              </Box>
          </add.Provider>
          
          <Parallax/>

        <Box sx={{zIndex:"5",margin:"3%"}}>  
            <Stack sx={{position:"relative",justifyContent:"center",alignItems:"center"}} pt={10}>
                <Box sx={{width:{xs:"100vw",md:"50vw"} ,height:{xs:"50vh"},borderRadius:"20px"}} ClassName="slidebar">
                    <Slidebar/>
                </Box>
            </Stack>
            <HomeBody/>
            <Box>
            <Typography sx={{textAlign:"center",zIndex:"-1",fontSize:{xs:"2rem",md:"3rem"}}} color="text.primary" variant='h5' >
              <strong>Explore the Shop</strong>
              <Typography color="text.primary" sx={{fontSize:{xs:"0.7rem",md:"1.5rem"}}}variant='h6'>By Clicking Below images</Typography>
            </Typography>
            </Box>
            <Box sx={{height:{md:"50vh",padding:"10px",display:"flex"}}}>
             <Boxthree texture={texture} position-x={-0.5} rotation-y={Math.PI/8}/>
             <Boxthree texture={texture2} position-x={-0.5}  rotation-y={Math.PI/8}/>
             <Boxthree texture={texture3} position-x={-0.5}  rotation-y={Math.PI/8}/>
            </Box>
            <Footer/>
        </Box>
        
      </Box>
    </ThemeProvider>
  );
}

export default App;
