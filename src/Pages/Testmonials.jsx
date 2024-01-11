import Slider from "react-slick";
import Avatar from '@mui/material/Avatar';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonial.css";
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { Typography } from "@mui/material";

const PreviousBtn = (props) => {
  console.log(props);
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <IoIosArrowBack style={{ color: "gray", fontSize: "45px" }} />
    </div>
  );
};
const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <IoIosArrowForward  style={{ color: "gray", fontSize: "45px" }} />
    </div>
  );
};
const Testimonial = () => {

 const data= [
    {
        name: "John Doe",
        designation: "Software Engineer",
        review:  "Company A has a fantastic work culture that promotes creativity and innovation. The company provides ample opportunities for growth and encourages employees to step out of their comfort zones.",
        img:"https://www.tutorialrepublic.com/examples/images/clients/1.jpg" 
    },
    {
        name: "Jane Smith",
        designation: "Product Manager",
        review:  "Company B truly values its employees. The leadership team is approachable and receptive to new ideas. The company fosters an environment that encourages innovation and out-of-the-box thinking.",
        img:"https://www.tutorialrepublic.com/examples/images/clients/3.jpg"
    },
    {
        name: "Robert Johnson",
        designation: "Data Analyst",
        review: "Company C offers a good work-life balance, which is hard to come by these days. The company also offers a competitive salary and benefits package, making it a great place to work.",
        img:"https://www.tutorialrepublic.com/examples/images/clients/2.jpg"
    },
    {
        name: "Emily Davis",
        designation: "UX Designer",
        review: "Company D has a supportive team that is always willing to help. The leadership is excellent and provides clear direction. The company also values employee feedback and makes changes based on it.",
        img:"https://www.tutorialrepublic.com/examples/images/clients/3.jpg"
    },
    {
        name: "Michael Miller",
        designation: "DevOps Engineer",
        review: "Company E invests in employee development and career progression. The company provides numerous learning opportunities and encourages employees to pursue their career goals.",
        img:"https://www.tutorialrepublic.com/examples/images/clients/1.jpg" 
    },
    {
        name: "Sarah Brown",
        designation: "Marketing Specialist",
        review: "Company F has a diverse and inclusive environment. The company values different perspectives and encourages employees to share their unique ideas.",
        img:"https://www.tutorialrepublic.com/examples/images/clients/2.jpg"
    },
    {
        name: "James Wilson",
        designation: "Sales Representative",
        review: "Company G provides a challenging yet rewarding job experience. The company values hard work and recognizes employees for their efforts.",
        img:"https://www.tutorialrepublic.com/examples/images/clients/3.jpg"
    },
    {
        name: "Patricia Moore",
        designation: "HR Manager",
        review: "Company H values transparency and open communication. The company encourages employees to voice their opinions and concerns, creating a trusting and respectful environment.",
        img:"https://www.tutorialrepublic.com/examples/images/clients/3.jpg"
    },
    {
        name: "Richard Taylor",
        designation: "Business Analyst",
        review:  "Company I offers a comprehensive benefits package and flexible work hours. The company understands the importance of work-life balance and does its best to accommodate employee needs.",
        img:"https://www.tutorialrepublic.com/examples/images/clients/1.jpg" 
    },
    {
        name: "Linda Anderson",
        designation: "Project Manager",
        review: "Company J fosters a culture of continuous learning and development. The company provides numerous opportunities for professional growth and encourages employees to take on new challenges.",
        img:"https://www.tutorialrepublic.com/examples/images/clients/2.jpg"
    }
]


  return (
    <div
      className="testimonial"
      style={{ display: "flex", justifyContent: "center", marginTop: 50,backgroundColor:'#f4fcfc',height:'550px' }}
    >
      <div style={{ width: "50%", textAlign: "center",marginTop:"30px" }}>
        <Typography  variant="h3"style={{ color:"#364968"}}>WHAT OTHERS <span style={{color:"red"}}> ARE SAYING</span></Typography><div style={{width:'300px',height:'4px',backgroundColor:"#eab870",marginBottom: "69px",marginTop:"20px",marginLeft:"240px"}}></div>
        <Slider prevArrow={<PreviousBtn />} nextArrow={<NextBtn />} dots>
          {data.map((d)=>(
             <Card img={d.img} name={d.name} designation={d.designation} review={d.review}/>
          ))}

          
        
        </Slider>
      </div>
    </div>
  );
};

const Card = ({ img ,name,designation,review}) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
        color: "gray",
      }}
    >
      <Avatar
        imgProps={{ style: { borderRadius: "50%" } }}
        src={img}
        style={{
          width: 120,
          height: 120,
          border: "1px solid lightgray",
          padding: 7,
          marginBottom: 20,
        }}
      />
      <p>
        {review}
      </p>
      <p style={{ fontStyle: "italic", marginTop: 25 }}>
        <span style={{ fontWeight: 500, color: "green" }}>{name}</span> ,
        {designation}
      </p>
    </div>
  );
};

export default Testimonial;