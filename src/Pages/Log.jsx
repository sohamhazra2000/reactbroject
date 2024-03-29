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
import { useDispatch, useSelector } from "react-redux";

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
  console.log(se)
  let token = localStorage.getItem("token");
   if(token !== null && token !== undefined && token !== "") 
{
   
   return(
    <div style={{
      backgroundImage: `url(https://images.unsplash.com/photo-1696185570507-2d1283399560?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      height:'100vh',
      position:'relative',
      top:15,
  }}>
  <Container>
  <Grid container spacing={2}>
    <Grid item xs={12} md={6} sx={{ margin: "0 auto" ,marginTop:"50px"}}>
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
  <Button variant="outlined" color="secondary" onClick={hm} sx={{marginTop:'60px',marginRight:"60px",border:"3px solid #3fb572", color:"green"}}>
            HOMEPAGE
           </Button>
           

           <Button variant="outlined" color="secondary" onClick={pr} sx={{marginTop:'60px',border:"3px solid #3fb572", color:"green"}}>
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
        height:'100vh',
        position:'relative',
        top:15,
    }}>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} sx={{ margin: "0 auto" }}>
            <Paper elevation={24}  square={false} sx={{ padding: 2,  backgroundColor: 'rgba(255, 255, 255, 0.5)', border:'2px solid' ,borderColor:'#3fb572',marginTop:{xs:"150px",md:"75px"}}}>
            <CardHeader title="LOGIN"    style={{ 
              color: '#3fb572',
              borderBottom: '2px solid #3fb572',
              padding: '10px'
            }}/>
              <form onSubmit={handleSubmit(onSubmit)}>
                
                
                <TextField
                  {...register("email", {
                    required: true,
                    pattern:/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
                    
                  })}
                  label="Your Email"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  error={!!errors.email}
                  helperText={errors.email?.type === "required" ? "Email is required." : errors.email?.type === "pattern" ? "Valid email is required" : ""}
                
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

