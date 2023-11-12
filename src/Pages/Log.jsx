import { useForm } from "react-hook-form";
import {
  Container,
  Grid,
  Paper,
  TextField,
  Button,
  Typography,
  CardHeader,
  Box,
} from "@mui/material";
import { loginn } from "../Reduxitems/AuthSlice";
import { Link, useNavigate } from 'react-router-dom'
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export default function Log(a) {
  const navigate=useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const hm=()=>{
    navigate("/")
  }
  const pr=()=>{
    navigate("/Product") 
  }

  const dispatch = useDispatch();


  const onSubmit = (data) => {
  const formData=new FormData();
      formData.append("email",data.email)
      formData.append("password",data.password)
  ;

    dispatch(loginn(formData));
    
  };
  const se=useSelector((state)=>state.Auth)
  let token = localStorage.getItem("token");
   if(token !== null && token !== undefined && token !== "") 
{
  return(
    <div style={{
      backgroundImage: `url(https://images.unsplash.com/photo-1696185570507-2d1283399560?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      height:'80vh',
      position:'relative',
      top:15,
  }}>
  <Container>
  <Grid container spacing={2}>
    <Grid item xs={12} md={6} sx={{ margin: "0 auto" }}>
      <Paper elevation={3} sx={{ padding: 2 , backgroundColor: 'rgba(255, 255, 255, 0.2)', border:'2px solid' ,borderColor:'#3fb572',marginTop:"150px"}}>
      <CardHeader title="login sucessfull"    style={{ 
            color: '#3fb572',
            borderBottom: '2px solid #3fb572',
            padding: '10px'
          }}/>
      
          <Typography variant="body1" align="center">
    your login is complete.... please choose an page to be redirected to
  </Typography>
  <Box textAlign='center'>
  <Button variant="outlined" color="secondary" onClick={hm} sx={{marginTop:'60px',marginRight:"60px"}}>
            HOMEPAGE
           </Button>
           

           <Button variant="outlined" color="secondary" onClick={pr} sx={{marginTop:'60px'}}>
            PRODUCT
           </Button>
           </Box>

    
      </Paper>
    </Grid>
  </Grid>
</Container>
</div>
);}
  else{
    return (
      <div style={{
        backgroundImage: `url(https://images.unsplash.com/photo-1696185570507-2d1283399560?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        height:'80vh',
        position:'relative',
        top:15,
    }}>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} sx={{ margin: "0 auto" }}>
            <Paper elevation={24}  square={false} sx={{ padding: 2,  backgroundColor: 'rgba(255, 255, 255, 0.5)', border:'2px solid' ,borderColor:'#3fb572'}}>
            <CardHeader title="create item"    style={{ 
              color: '#3fb572',
              borderBottom: '2px solid #3fb572',
              padding: '10px'
            }}/>
              <form onSubmit={handleSubmit(onSubmit)}>
                
                
                <TextField
                  {...register("email", {
                    required: true,
                    pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                    
                  })}
                  label="Your Email"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  error={!!errors.email}
                  helperText={errors.email && errors.email.type === "required"  && "Email is required"||  errors.email && errors.email.type === "pattern" &&"valid email is required" }
                
                  InputLabelProps={{
                    sx: {
                      color: '#3fb572',
                      
                    },
                  }}
                  />
                <TextField
                  {...register("password", { required: true })}
                  label="password"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  error={!!errors.password}
                  helperText={errors.password && "password is required"}
                  InputLabelProps={{
                    sx: {
                      color: '#3fb572',
                      
                    },
                  }}
                />
                <Button
                  variant="contained"
                  color="success"
                  size="large"
                  type="submit"
                  onClick={handleSubmit(onSubmit)}
                  sx={{ marginTop: 2 ,marginBottom:6}}
                >
                  login
                </Button>
                <Typography variant="body1">
          Dont Have an account? 
          <Link to="/reg" style={{ textDecoration: 'none', color: '#3fb572' }}>
              Register
          </Link>
        </Typography>
  
               
              </form>
            </Paper>
          </Grid>
        </Grid>
      </Container>
      </div>
    )
  }
  }

