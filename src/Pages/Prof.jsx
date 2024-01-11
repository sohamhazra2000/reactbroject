
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {Profile} from '../Reduxitems/AuthSlice';


//import {profile_pic} from'../Reduxitems/Helper'
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

export default function Prof() {
  const {  pprofile } = useSelector((state) => state?.Auth);
  const dispatch=useDispatch()
  useEffect(() => {
    dispatch(Profile())
   }, [dispatch]);
   console.log(pprofile)
   
  return (
    <div>
         <Card  sx={{ maxWidth: 600 ,marginLeft:{ xs:'95px',md:'450px'},marginTop:"160px",marginBottom:"15px",backgroundColor:"#9b9fb3"}}>
            
            <CardMedia
            sx={{ height: 200 ,borderBottom:"2px solid black"}}
            image="https://www.motortrend.com/uploads/f/157002894.jpg" 
             title="jjuuu"
      />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div"
              color="text.secondary">
                {pprofile.first_name} {pprofile.last_name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
               {pprofile.email}
              </Typography>
              <Typography variant="body2" color="text.secondary">
               {pprofile._id}
              </Typography>
            </CardContent>
          </Card>
    </div>
  )
}
