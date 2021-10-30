import React from 'react'
import { 
  Drawer, 
  Toolbar, 
  List,
  Typography,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  Avatar
  } from '@mui/material'
import { Apps, Home, Mail, Person, PersonAddAlt1Rounded } from '@mui/icons-material';
import { Link } from 'react-scroll'

const drawerWidth = '20%';

const SideBar = () => {
    return (
        <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar >
          <Box 
              sx={{
                display:'flex',
                flexDirection:'row',
                alignItems: 'center',
                paddingTop: 5,
                paddingBottom: 5
              }}>
              <Avatar sx={{ flex:1, marginRight:3, width:70, height:70 }} variant='square' ></Avatar>
              <Box>
                <Typography >Rafael Carranza</Typography>
                <Typography variant='overline'>SoftWare Developer</Typography>
              </Box>
          </Box>
        </Toolbar>
        <Box className='sidebarlist'
          sx={{ display:'flex', flexDirection:'column', }}
        >
          <List >
            <Link to='intro' activeClass={true} spy={true} smooth={true} duration={2000} >
              <ListItem button sx={{ padding:3, display:'flex', alignItems:'center' }} >
                <ListItemIcon sx={{ flex:1, paddingLeft:2 }} ><Home /></ListItemIcon>
                <Typography  >Intro</Typography>
              </ListItem>
            </Link>
            <Link to='portafolio' activeClass={true} spy={true} smooth={true} offset={-50} duration={2000} >
              <ListItem button sx={{ padding:3, display:'flex', alignItems:'center' }} >
                <ListItemIcon sx={{ flex:1, paddingLeft:2 }} ><Apps /></ListItemIcon>
                <Typography  >Portfolio</Typography>
              </ListItem>
            </Link>
            <Link to='about' activeClass={true} spy={true} smooth={true} offset={-70} duration={2000} >
              <ListItem button sx={{ padding:3, display:'flex', alignItems:'center' }} >
                <ListItemIcon sx={{ flex:1, paddingLeft:2 }} ><Person /></ListItemIcon>
                <Typography  >About Me</Typography>
              </ListItem>
            </Link>
            <Link to='contact' activeClass={true} spy={true} smooth={true} duration={2000} >
              <ListItem button sx={{ padding:3, display:'flex', alignItems:'center' }} >
                <ListItemIcon sx={{ flex:1, paddingLeft:2 }} ><Mail /></ListItemIcon>
                <Typography  >Contact</Typography>
              </ListItem>
            </Link>
          </List>
        </Box>
      </Drawer>
    )
}

export default SideBar
