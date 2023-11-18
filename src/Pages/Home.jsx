import React, { useEffect, useState } from 'react'
import { toast } from "react-toastify";

import {
  Container,
  Grid,
  Button,
  Typography,
  Box
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'
let timer;
export default function Home() {
  const[dial,setDial]=useState(0)
  const[aw]=useState(localStorage.token ? true : false)
  console.log(aw)


 useEffect(()=>{
  const a1=()=>{ 
    timer=setInterval(()=>{
   if(dial===89){
     clearInterval(timer)
   
   }
   else{
   setDial(dial+1)
   }
  },10)}
  a1()
     return()=>clearInterval(timer)

    }
,[dial])
 
  
const a=()=>{
localStorage.clear();
window.location.reload();
toast("logged out sucess")

}
const navigate=useNavigate()
const a2=()=>{
  navigate("/Log")
  }


  return (
    <>
    <div style={{
      backgroundImage: `url(https://images.unsplash.com/photo-1557264337-e8a93017fe92?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      height:'80vh',
      //position:'relative',
      overflow:'auto',
      //marginBottom:'800px'

  }}>

<Container>
    <Grid container spacing={2}>
      <Grid item xs={12} md={6} sx={{ margin: "0 auto",marginTop:'200px' ,marginLeft:{xs:"6px",md:'-15px'}}}>
        
        
            <Typography variant="h4" sx={{color:'white'}}>
            Welcome to Company{'  '}</Typography>
            <Typography variant="body1" sx={{color:'white'}}>
            Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.

           </Typography>
          {aw ?   <Button variant="contained" color="secondary" onClick={a} sx={{marginTop:'6px'}}>
              LOGOUT
             </Button>:  <Button variant="contained" color="success" onClick={a2} sx={{marginTop:'6px'}}>
              LOGIN
             </Button>}

      
      </Grid>
     
      
    </Grid>
  </Container>
  </div >
 <div style={{
  display:'block',
  marginLeft:'auto',
  marginRight:'auto',
  marginTop:'-50px',
      backgroundColor:'#f4fcfc',
      height:"80vh",
      width:'95%',
      borderRadius:'15px'

  }}>
 <Container>
    <Grid container spacing={6}  sx={{marginTop:"15px"}}>
    <Grid item xs>
          <Box sx=
          {{display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'}}
          >
          <Typography   align="centre"sx={{color:"#3993ee", fontSize:"60px"}}>
             {dial}+
          </Typography>
          <Typography variant='h5' sx={{color:"#364968"}}>
             BODYWORK
          </Typography>
          <Typography variant='subtitle2' sx={{color:"#9b9fb3",textAlign:"center"}}>
           velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollit
          </Typography>
          </Box>
        
          </Grid>
          <Grid item xs>
          <Box sx=
          {{display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'}}
          >
          <Typography   align="centre"sx={{color:"#3993ee", fontSize:"60px"}}>
             {dial*7}+
          </Typography>
          <Typography variant='h5' sx={{color:"#364968"}}>
             MAINTAINANCE
          </Typography>
          <Typography variant='subtitle2' sx={{color:"#9b9fb3",textAlign:"center"}}>
           velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollit
          </Typography>
          </Box>
        
          </Grid>
          
          <Grid item xs>
          <Box sx=
          {{display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'}}
          >
          <Typography   align="centre"sx={{color:"#3993ee", fontSize:"60px"}}>
             {dial-23}+
          </Typography>
          <Typography variant='h5' sx={{color:"#364968"}}>
             TUNING
          </Typography>
          <Typography variant='subtitle2' sx={{color:"#9b9fb3",textAlign:"center"}}>
           velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollit
          </Typography>
          </Box>
        
          </Grid>
        
      
    </Grid>

  </Container>
  <Container>
    <Grid container spacing={2} sx={{paddingTop:"65px"}}>
    <Grid item md>
          <Box sx=
          {{display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'}}
          >
          <Typography variant='h3' sx={{color:"#364968", marginTop:"35px"}}>
             ABOUT BOOST<span style={{color:"red"}}>CREEPERS</span>
          </Typography>
          <div style={{width:"200px",height:"3px", backgroundColor:"#ff3464", marginTop:"15px"}}></div>
          <Typography variant='subtitle1' sx={{color:"#9b9fb3",textAlign:"center",marginTop:'15px'}}>
          Boost Creepers is a car modification company that offers customized solutions for your vehicle. Whether you need a performance upgrade, a cosmetic makeover, or a unique design, Boost Creepers can make it happen. Contact us today and let us transform your car into your dream ride.
            
          </Typography>
          </Box>
        
          </Grid>
    </Grid>
  </Container>
  </div>
  <div style={{
      backgroundImage: `url(https://img.freepik.com/free-vector/beautiful-decorative-soft-colorful-watercolor-texture-background_1055-14290.jpg?size=626&ext=jpg&ga=GA1.1.1880011253.1699488000&semt=ais)`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      height:'70vh',
      borderTop:'5px solid #364968 ',
      borderBottom:'5px solid #364968 ',
      overflow:'auto',
      

  }}>
    <Container>
      <Grid container >
        <Grid item xs={12} md={12}>
        <Box
        sx= {{display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        marginTop:"130px"}}
         >
        <Typography variant='h3' sx={{color:"#364968" ,textAlign:'center'}}>
             VIEW OUR <span style={{color:"red"}}>PRODUCTS</span>
          </Typography>
          <div style={{width:"200px",height:"3px", backgroundColor:"#ff3464", marginTop:"15px"}}></div>
          <Typography variant='subtitle1' sx={{color:"#9b9fb3",textAlign:"center", marginTop:'10px'}}>
          Boost Creepers is a car modification company that offers customized solutions for your vehicle. Whether you need a performance upgrade, a cosmetic makeover, or a unique design, Boost Creepers can make it happen. Contact us today and let us transform your car into your dream ride.
          
          </Typography>
          <Button variant="outlined" color='secondary' sx={{marginTop:'100px'}}><Link to='/Product' style={{textDecoration: 'none' }}>VIEW PRODUCT</Link></Button>
          </Box>
        </Grid>

      </Grid>
    </Container>
  </div>
    
  </>
  
  )

}
