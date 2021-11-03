import React, {useState} from 'react'
import { 
  Drawer, 
  Toolbar, 
  List,
  Typography,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  Box,
  Avatar
  } from '@mui/material'
import { Apps, Home, Mail, Person, } from '@mui/icons-material';
import { Link } from 'react-scroll'

const drawerWidth = '20%';



const SideBar = () => {

  const [color, setColor] = useState('primary.main');
  const [selectedIndex, setSelectedIndex] = useState(1);
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index)
  }


    return (
        <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
        }}
        variant="permanent"
        anchor="left"
      >
        <Box sx={{
          bgcolor:'primary.main',
          position:'fixed',
          paddingBottom:50
        }} >
          <Toolbar
            sx={{
            }} >
            <Box 
                sx={{
                  display:'flex',
                  flexDirection:'row',
                  alignItems: 'center',
                  paddingTop: 5,
                  paddingBottom: 5
                }}>
                <Avatar sx={{ flex:1, marginRight:3, width:70, height:70 }} variant='square' ></Avatar>
                <Box sx={{ }} >
                  <Typography color='white' >Rafael Carranza</Typography>
                  <Typography color='white'  variant='overline'>SoftWare Developer</Typography>
                </Box>
            </Box>
          </Toolbar>
          <Box className='sidebarlist'
            sx={{  display:'flex', flexDirection:'column', }}
          >
            <List>
              <Link to='intro' activeClass={true} spy={true} smooth={true} duration={2000} >
                <ListItemButton 
                  sx={{ padding:3, display:'flex', alignItems:'center', bgcolor:color }}
                  selected={selectedIndex === 0}
                  onClick={(event) => handleListItemClick(event, 0)}>
                  <ListItemIcon sx={{ flex:1, paddingLeft:2 }} ><Home color='secondary' /></ListItemIcon>
                  <Typography color='white'  >Intro</Typography>
                </ListItemButton>
              </Link>
              <Link to='portafolio' activeClass={true} spy={true} smooth={true} offset={-50} duration={2000} >
                <ListItemButton 
                  sx={{ padding:3, display:'flex', alignItems:'center', bgcolor:color }} 
                  selected={selectedIndex === 1}
                  onClick={(event) => handleListItemClick(event, 1)} >
                  <ListItemIcon sx={{ flex:1, paddingLeft:2 }} ><Apps color='secondary' /></ListItemIcon>
                  <Typography color='white'  >Portfolio</Typography>
                </ListItemButton>
              </Link>
              <Link to='about' activeClass={true} spy={true} smooth={true} offset={-70} duration={2000} >
                <ListItemButton 
                  sx={{ padding:3, display:'flex', alignItems:'center', bgcolor:color }}
                  selected={selectedIndex === 2}
                  onClick={(event) => handleListItemClick(event, 2)} >
                  <ListItemIcon sx={{ flex:1, paddingLeft:2 }} ><Person color='secondary' /></ListItemIcon>
                  <Typography color='white'  >About Me</Typography>
                </ListItemButton>
              </Link>
            </List>
          </Box>
        </Box>
      </Drawer>
    )
}

export default SideBar
