import React, { useEffect, useState } from 'react'
import { toast } from "react-toastify";
import { SiTurbo } from "react-icons/si";
import { BiSolidCarMechanic } from "react-icons/bi";
import { FaCarCrash } from "react-icons/fa";
import Productscroll from"./Productscroll"
import Testmonials from"./Testmonials"
import Whyco from"./Whyco"

import {
  Container,
  Grid,
  Button,
  Typography,
  Paper,
  Box
} from "@mui/material";
import Carousel from 'react-material-ui-carousel';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';


let timer;
export default function Home() {
  var items = [
    {
        name: "Image 1",
        description: "Description for Image 1",
        img: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        name: "Image 2",
        description: "Description for Image 2",
        img: "https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        name: "Image 3",
        description: "Description for Image 3",
        img: "https://images.unsplash.com/photo-1486006920555-c77dcf18193c?q=80&w=1896&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
]
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
    <div>
    <Typography variant="h2" component="h2" gutterBottom sx={{color: 'wheat', position: 'absolute', top: {md:'45%',xs:"36%"}, left: '8%', zIndex: 4}}>
            Welcome to Company{'  '}</Typography>
           <Typography variant="body1" component="h2" gutterBottom sx={{color: 'wheat', maxWidth:{md:"43%",xs:'50%'}, position: 'absolute', left:{md:"9%",xs:"10%"} ,marginTop:{md:'400px',xs:'323px'}, zIndex: 4}}>
            Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.

           </Typography>
          {aw ?       <> <Button color="secondary"variant='contained' size="large" onClick={a}sx={{ position: 'absolute',top:{md:"70%",xs:"69%"}, left:{md:"9%",xs:"10%"}, zIndex: 4,height:"45px"}}>
              LOGOUT
             </Button> <Button color="secondary"variant='outlined' size="large"sx={{ border:"3px solid green", position: 'absolute',top:{md:"70%",xs:"69%"}, left:{  md:"17%",xs:'26%'}, zIndex: 4}}>
              <Link to="/Product"style={{textDecoration:"none",color:"wheat"}}>EXPLORE</Link>
             </Button></>:<><Button color="secondary"variant='contained' size="large"onClick={a2}sx={{ height:"45px",  color:"wheat",position: 'absolute',top:{md:"70%",xs:"69%"}, left:{md:"9%",xs:"10%"},zIndex: 4}}>
              LOGIN
             </Button> <Button color="secondary"variant='outlined' size="large"sx={{  border:"3px solid green",position: 'absolute',top:{md:"70%",xs:"69%"}, left: {md:"16%",xs:'24%'}, zIndex: 4}}>
              <Link to="/reg"style={{textDecoration:"none",color:"wheat"}}>Regsiter</Link>
             </Button> </>}
             

             <div style={{ position: 'relative', zIndex:"1" }}>
          <Carousel autoPlay={true} animation='slide'>
              {
                  items.map((item, i) => <Item key={i} item={item} />)
              }
          </Carousel>
      </div>

      
      
  </div >
  {/* part two */}
 <div  style={{
            position: 'absolute',
            top: '136%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '95%',
            height: 'auto',
            backgroundColor:'#f4fcfc', 
            zIndex: 5,
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
          <div style={{width:"200px",height:"3px", backgroundColor:"#eab870", marginTop:"15px"}}></div>
          <Typography variant='subtitle1' sx={{color:"#9b9fb3",textAlign:"center",marginTop:'15px',marginBottom:"100px"}}>
          Boost Creepers is a car modification company that offers customized solutions for your vehicle. Whether you need a performance upgrade, a cosmetic makeover, or a unique design, Boost Creepers can make it happen. Contact us today and let us transform your car into your dream ride.
            
          </Typography>
          </Box>
        
          </Grid>
    </Grid>
  </Container>

  </div>
  {/* part3 */}
  <div style={{
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      marginTop:"500px",
      height:'70vh',
      overflow:'auto',
      

  }}>
     <Container>
     <Typography variant='h3'  sx={{marginTop:"100px",textAlign:'center',color:"#364968"}}>OUR <span style={{color:"red"}}>SERVICES</span></Typography><div style={{width:'180px',height:'3px',backgroundColor:"#eab870", marginBottom:'5px', marginTop:"15px",marginLeft:"499px"}}></div>
    <Grid container spacing={6}  sx={{marginTop:"15px"}}>
    
    <Grid item xs>
          <Box sx=
          {{display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'}}
          >
          <FaCarCrash size={70}/>
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
          <BiSolidCarMechanic  size={70}/>
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
          <SiTurbo  size={70}/>
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

  </div>
  <div style={{
      // backgroundImage: `url(https://img.freepik.com/free-vector/beautiful-decorative-soft-colorful-watercolor-texture-background_1055-14290.jpg?size=626&ext=jpg&ga=GA1.1.1880011253.1699488000&semt=ais)`,
      backgroundColor:'#f4fcfc',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      marginTop:"100px",
      height:'83vh',
      // borderTop:'5px solid #364968 ',
      // borderBottom:'5px solid #364968 ',
      overflow:'auto',
      

  }}>
   {aw? <> <Typography variant='h3' sx={{color:"#364968" ,textAlign:'center',marginTop:"25px"}}>
             VIEW OUR <span style={{color:"red"}}>PRODUCTS</span>
          </Typography>
          <div style={{width:'200px',height:'3px',backgroundColor:"#eab870", marginBottom:'5px',marginTop:"15px",marginLeft:"659px"}}></div>
          <div style={{marginTop:"100px"}}>
   <Productscroll/> </div></>:
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
          <div style={{width:"200px",height:"3px", backgroundColor:"#eab870", marginTop:"15px"}}></div>
          <Typography variant='subtitle1' sx={{color:"#9b9fb3",textAlign:"center", marginTop:'30px'}}>
          Boost Creepers is a car modification company that offers customized solutions for your vehicle. Whether you need a performance upgrade, a cosmetic makeover, or a unique design, Boost Creepers can make it happen. Contact us today and let us transform your car into your dream ride.to view our product
          <span style={{color:"red"}}> please sign in</span>
          
          </Typography>
          <Button variant="outlined" color='secondary' sx={{marginTop:'100px'}}><Link to='/log' style={{textDecoration: 'none' }}>LOGIN</Link></Button>
          </Box>
        </Grid>

      </Grid>
    </Container>  }
  </div>
  <Whyco/>
  <Testmonials/>
  
  {/* 4 */}
  
    
  </>
  
  )

}
function Item(props) {
  return (
    <Paper style={{ height: '100vh', width: '100%', backgroundImage: `url(${props.item.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}/>
  )
  }
