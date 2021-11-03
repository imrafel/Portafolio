import React from 'react'
import { Box, Typography, Button, Grid, Card, CardMedia, CardContent, CardActions } from '@mui/material'
import { Link } from 'react-scroll'


const MainPage = () => {
    return (
        <Box className='MainPage'
            sx={{
                display:'flex',
                flexDirection:'column'
            }}
        > 
            <Box className='main-page' id='intro' sx={{
                position:'absolute',
                marginLeft:'20%',
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                flexDirection:'column',
                paddingTop:25
            }}  >
                
                <Typography sx={{ paddingLeft:40, paddingRight:35}} variant='h4'  >
                    Hi! I'm Prologue, a free responsive
                    site template designed by HTML5 UP.
                </Typography>
                <Typography variant='h6' sx={{ marginTop:5, paddingLeft:45, paddingRight:45 }} >
                    Ligula scelerisque justo sem accumsan diam quis
                    vitae natoque dictum sollicitudin elementum.
                </Typography>
                <Box sx={{ marginTop:8, paddingLeft:45, paddingRight:45}} >
                    <Button variant='contained' >
                        <Link to='portafolio' activeClass={true} spy={true} smooth={true} offset={-50} duration={2000} >Ver Portafolio</Link>
                    </Button>
                </Box>
                <Box className='portafolio-container'  sx={{ paddingTop:35, marginLeft:20 }} >
                    <Grid container spacing={2} sx={{ paddingBottom:20 }} id='portafolio' >
                        <Grid item container columns={16}>
                            <Typography sx={{ paddingLeft:45, paddingBottom:5  }} variant='h3' >Portfolio</Typography>
                        </Grid>
                        <Grid item >
                            <Card sx={{ maxWidth:300 }}>
                                <CardMedia component='img' image='https://via.placeholder.com/100' />
                                <CardContent >
                                    <Typography component='div' variant='h5'   >Proyect 1</Typography>
                                    <Typography variant='body2' >Culpa commodo proident est non.Quis dolor quis elit eiusmod esse culpa amet. </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button>Check out</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item >
                            <Card sx={{ maxWidth:300 }}>
                                <CardMedia component='img'  image='https://via.placeholder.com/100' />
                                <CardContent >
                                    <Typography component='div' variant='h5' >Proyect 1</Typography>
                                    <Typography variant='body2' >Culpa commodo proident est non.Quis dolor quis elit eiusmod esse culpa amet. </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button>Check out</Button>
                                </CardActions>
                            </Card>
                        </Grid>  
                        <Grid item >
                            <Card sx={{ maxWidth:300 }}>
                                <CardMedia component='img'  image='https://via.placeholder.com/100' />
                                <CardContent >
                                    <Typography component='div' variant='h5' >Proyect 1</Typography>
                                    <Typography variant='body2' >Culpa commodo proident est non.Quis dolor quis elit eiusmod esse culpa amet. </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button>Check out</Button>
                                </CardActions>
                            </Card>
                        </Grid> 
                    </Grid>
                </Box>
                <Box className='about-container' sx={{ marginLeft:20, paddingBottom:30 }} id='about' >
                    <Typography variant='h3' sx={{ paddingLeft:45, paddingBottom:8 }}  >About Me</Typography>
                    <Box component='img' width='250' height='250'  src='https://via.placeholder.com/900x250' 
                        sx={{ paddingLeft:2, paddingBottom:6 }} />
                    <Typography sx={{ paddingLeft:2, paddingRight:12, justifyContent:'inherit' }} >
                        Culpa irure occaecat culpa ad irure id ipsum nulla ea magna velit ex dolor.Enim dolore ea nostrud voluptate tempor excepteur officia ipsum cillum. in non commodo non tempor aliquip esse ipsum occaecat in duis.hoalas  Aliqua incididunt enim pariatur exercitation sit magna laborum incididunt voluptate voluptate. Nisi sunt incididunt eu veniam fugiat ex.Enim nulla anim excepteur minim.
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default MainPage