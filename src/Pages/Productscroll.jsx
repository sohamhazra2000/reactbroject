import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {Card,CardContent,Typography,Button} from "@mui/material";
import {list} from '../Reduxitems/ProductSlice';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import CardMedia from '@mui/material/CardMedia';
import {produc} from'../Reduxitems/Helper'


function Productscoll() {
  const { items } = useSelector((state) => state?.Pro);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(list({
       page: 1,
      perpage:9
    }));
   }, [dispatch]);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true
  };
  


  return (
    <div style={{ width: '75%', margin: 'auto', marginTop: '5rem' }}>
      <Slider {...settings}>
        {items.map((d) => (
          <Card key={d.name} style={{ backgroundColor: '#fff', height: 450, textAlign: 'center', borderRadius: 16,marginLeft:'100px' }}>
            <div style={{ height: 140, backgroundColor: '#6366F1', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '16px 16px 0 0' }}>
            <CardMedia image={produc(d.image)}
             title="jjuuu" style={{ height: 140, width: 400,borderRadius: '16px 16px 0 0' }}/>
            </div>
            <CardContent style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1rem', padding: '1rem' }}>
              <Typography variant="h6" component="h2">
                {d.title}
              </Typography>
              <Typography variant="body2" component="p">
                {d.description}
              </Typography>
              <Button style={{ backgroundColor: '#6366F1', color: '#fff', textTransform: 'none', padding: '0.5rem 1.5rem', borderRadius: 16 }}>Read More</Button>
            </CardContent>
          </Card>
        ))}
      </Slider>
    </div>
  );
}

export default  Productscoll;
