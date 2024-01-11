import React from 'react';
import { Typography, Box, Grid } from "@mui/material";
import { width } from '@mui/system';

export default function Whyco(){
  return (
    <Grid container spacing={3}>
        <Box sx={{marginLeft:"180px", width:"100%",marginTop:"90px"}}>
      <Grid item xs={12}>
        <Typography variant="h3"sx={{fontSize:60,color:"#364968"}} >WHY CHOOSE US</Typography><div style={{width:'300px',height:'4px',backgroundColor:"#eab870",marginBottom: "69px",marginTop:"20px",marginLeft:"10px"}}></div>
      </Grid>
      <Grid item xs={6}>
        <Typography variant="h5" sx={{width:"1000px",marginTop:"30px",color:"#9b9fb3"}}>
          Boostcreepers allows you exclusive access the following services.
        </Typography>
        <Grid item xs={6} md={12} sx={{marginLeft:"260px", width:"100%"}}>
        <img src="https://vehicledatabases.com/wp-content/uploads/2022/05/vm03-2-768x337-1.png" alt="Car with warranty details" style={{ width: '100%' }} />
      </Grid>
  
      <Typography variant="h5"sx={{fontSize:30,marginBottom:"15px",marginTop:"20px",color:"#364968"}}>The basic, bumper to bumper warranty</Typography>
        <Typography  variant="h6" sx={{width:"1000px",color:"#9b9fb3"}}>
          ✓ Extensively covers all the parts of a vehicle except some parts that are subjected to wear and tear during use
        </Typography>
        <Typography  variant="h6" sx={{width:"1000px",color:"#9b9fb3"}}>
          ✓ Usually manufacturers provide coverage in terms of mileage/years. Some common limits are 3, or 5 years with 36,000 and 50,000 mileage limits respectively
        </Typography>
        <Typography  variant="h6" sx={{width:"1000px",color:"#9b9fb3"}}>
          ✓ Whether you reach the time or mileage limit, your warranty expires
        </Typography>
  
        <Typography variant="h5"sx={{fontSize:30,marginBottom:"15px",marginTop:"20px",color:"#364968"}}>The powertrain or drivetrain warranty</Typography>
        <Typography  variant="h6" sx={{width:"1000px",color:"#9b9fb3"}}>
          ✓ Extensively covers all the parts of a vehicle except some parts that are subjected to wear and tear during use
        </Typography>
        <Typography  variant="h6" sx={{width:"1000px",color:"#9b9fb3"}}>
          ✓ Usually manufacturers provide coverage in terms of mileage/years. Some common limits are 3, or 5 years with 36,000 and 50,000 mileage limits respectively
        </Typography>
        <Typography  variant="h6" sx={{width:"1000px",color:"#9b9fb3"}}>
          ✓ Whether you reach the time or mileage limit, your warranty expires
        </Typography>
        <Typography variant="h5"sx={{fontSize:30,marginBottom:"15px",marginTop:"20px",color:"#364968"}}>The rust through or corrosion warranty</Typography>
        <Typography  variant="h6" sx={{width:"1000px",color:"#9b9fb3"}}>
          ✓ Extensively covers all the parts of a vehicle except some parts that are subjected to wear and tear during use
        </Typography>
        <Typography  variant="h6" sx={{width:"1000px",color:"#9b9fb3"}}>
          ✓ Usually manufacturers provide coverage in terms of mileage/years. Some common limits are 3, or 5 years with 36,000 and 50,000 mileage limits respectively
        </Typography>
        <Typography  variant="h6" sx={{width:"1000px",color:"#9b9fb3"}}>
          ✓ Whether you reach the time or mileage limit, your warranty expires
        </Typography>
        <Typography variant="h5"sx={{fontSize:30,marginBottom:"15px",marginTop:"20px",color:"#364968"}}>Road assistance warranty</Typography>
        <Typography  variant="h6" sx={{width:"1000px",color:"#9b9fb3"}}>
          ✓ Extensively covers all the parts of a vehicle except some parts that are subjected to wear and tear during use
        </Typography>
        <Typography  variant="h6" sx={{width:"1000px",color:"#9b9fb3"}}>
          ✓ Usually manufacturers provide coverage in terms of mileage/years. Some common limits are 3, or 5 years with 36,000 and 50,000 mileage limits respectively
        </Typography>
        <Typography  variant="h6" sx={{width:"1000px",color:"#9b9fb3"}}>
          ✓ Whether you reach the time or mileage limit, your warranty expires
        </Typography>
      </Grid>
      </Box>
      
    </Grid>
  );
};
