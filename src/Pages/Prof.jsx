
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {Profile} from '../Reduxitems/AuthSlice';


import {profile_pic} from'../Reduxitems/Helper'
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

export default function Prof() {
  const {  pprofile } = useSelector((state) => state?.Auth);
  const dispatch=useDispatch()
  useEffect(() => {
    dispatch(Profile())
   }, []);
   console.log(pprofile)
   
  return (
    <div>
         <Card  sx={{ maxWidth: 345 ,marginLeft:{ xs:'15px',md:'60px'},marginTop:"20px",marginBottom:"15px",backgroundColor:"#9b9fb3",border:"2px solid black"}}>
            
            <CardMedia
            sx={{ height: 200 ,borderBottom:"2px solid black"}}
            image={profile_pic(pprofile.profile_pic)}
             title="jjuuu"
      />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {pprofile.first_name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
               {pprofile.last_name}
              </Typography>
            </CardContent>
          </Card>
    </div>
  )
}
