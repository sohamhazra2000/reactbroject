
import { useForm } from "react-hook-form";
import {
  Container,
  Grid,
  Paper,
  TextField,
  Button,

  CardHeader,
} from "@mui/material";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Cre } from "../Reduxitems/ProductSlice";
import styled from "styled-components";
import { useDispatch } from "react-redux";
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


export default function Cc() {
  const [previewImage, setPreviewImage] = useState(null);
  console.log(previewImage)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };

      reader.readAsDataURL(file);
    } else {
      setPreviewImage(null);
    }
  };

const dispatch=useDispatch();
 function onSubmit(data){
const formdata=new FormData()
formdata.append("title",data.title)
formdata.append("description",data.description)
formdata.append("image",data.image[0])


dispatch(Cre(formdata));

}
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
          <Paper elevation={24}  square={false}sx={{ padding: 2,   backgroundColor: 'rgba(255, 255, 255, 0.2)', border:'2px solid' ,borderColor:'#3fb572',marginTop:{xs:"130px",md:"75px"}}}>
      <CardHeader title="create item"    style={{ 
            color: '#3fb572',
            borderBottom: '2px solid #3fb572',
            padding: '10px'
          }}/>
      <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            {...register("title", { required: true, maxLength: 20 })}
            label="title"
            fullWidth
            margin="normal"
            variant="outlined"
            error={!!errors.title}
            helperText={errors.title && "Name is required"}
            InputLabelProps={{
              sx: {
                color: '#3fb572',
                
              },
            }}
          />
           <TextField
            {...register("description", { required: true, maxLength: 20 })}
            label="description"
            fullWidth
            margin="normal"
            variant="outlined"
            error={!!errors.description}
            helperText={errors.description && "Name is required"}
            InputLabelProps={{
              sx: {
                color: '#3fb572',
                
              },
            }}
          />
          <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}
          type="file"
          label="image"
           fullWidth
           margin="normal"
           error={!!errors.image} 
           >
      Upload file
      <VisuallyHiddenInput type="file"  {...register("image", { required: true })} onChange={handleImageChange} />
    </Button>
          
          <Button
            variant="contained"
            color="success"
            size="large"
            type="submit"
            onClick={handleSubmit(onSubmit)}
            sx={{ marginTop: 2 ,marginBottom:6}}
          >
            create
          </Button>

     
         </form>
      </Paper>
    </Grid>
  </Grid>
</Container>
</div>
);
  
  
}
