import React from 'react';
import { styled } from '@mui/system';
import { Container, Typography, Box, Link, Grid } from '@mui/material';

const Footer = styled('div')({
  position: 'static',
   //left: 0,
  // bottom: 0,
  width: '99%',
  backgroundColor: '#141b40',
  color: 'white',
  textAlign: 'center',
  padding: '16px',
  
});

export default function StickyFooter() {
  
  return (
    <Footer sx={{marginLeft:{xs:'-25px',md:'-17px'}}}>
      <Container maxWidth="sm">
      
        <Grid container spacing={2}>
          <Grid item xs={6} md={6}  sx={{marginLeft:{ xs:'auto',md:'-400px'},marginBottom:"40px"}}>
          <Typography variant="h6"sx={{fontWeight:"bold",textAlign:'left'}}>
          BOOSTCREPERS
        </Typography><div style={{width:'120px',height:'2px',backgroundColor:"#eab870", marginBottom:'5px'}}></div>
        <Typography variant="subtitle2"sx={{textAlign:'left'}}>
        Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia </Typography>
           
           </Grid>
          <Grid item xs sx={{marginLeft:{xs:"auto",md:"150px"}}}>
            <Box mt={1}>
            <Typography sx={{fontWeight:"bold",textAlign:"left",marginBottom:"5px"}}>
          STACK 1
        </Typography>
        <div style={{width:'40px',height:'2px',backgroundColor:"#eab870", marginBottom:'5px'}}></div>
              <Typography sx={{textAlign:"left",marginTop:"6px"}}>
                <Link href="/product" color="inherit" style={{textDecoration:"none"}}>
                 PRODUCT
               </Link>
               </Typography>
               <Typography sx={{textAlign:"left",marginTop:"6px"}}>
                <Link href="/product" color="inherit" style={{textDecoration:"none"}}>
                 LOGIN
               </Link>
               </Typography>
               <Typography sx={{textAlign:"left",marginTop:"6px"}}>
                <Link href="/product" color="inherit" style={{textDecoration:"none"}}>
                 REGISTER
               </Link>
               </Typography>
               
      
             
            </Box>
          
            
          </Grid>
          <Grid item xs sx={{marginLeft:{xs:"auto",md:"30px"}}}>
            <Box mt={1}>
            <Typography sx={{fontWeight:"bold",textAlign:"left",marginBottom:"5px"}}>
          STACK 2
        </Typography>
        <div style={{width:'40px',height:'2px',backgroundColor:"#eab870", marginBottom:'5px'}}></div>
              <Typography sx={{textAlign:"left",marginTop:"6px"}}>
                <Link href="/product" color="inherit" style={{textDecoration:"none"}}>
                 PRODUCT
               </Link>
               </Typography>
               <Typography sx={{textAlign:"left",marginTop:"6px"}}>
                <Link href="/product" color="inherit" style={{textDecoration:"none"}}>
                 LOGIN
               </Link>
               </Typography>
               <Typography sx={{textAlign:"left",marginTop:"6px"}}>
                <Link href="/product" color="inherit" style={{textDecoration:"none"}}>
                 REGISTER
               </Link>
               </Typography>
               
      
             
            </Box>
          
            
          </Grid>
          
        </Grid>
        <Typography variant="body1">
          BOOSTCREEPERS © {new Date().getFullYear()}
        </Typography>
      </Container>
    </Footer>
  );
}
