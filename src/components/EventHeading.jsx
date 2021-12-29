import ImageContainer from "./ImageContainer";
import eventbg from "../images/event.jpg";
import Title from "./Title";
import { makeStyles } from "@mui/styles";
import Container from "./Container";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
const useStyles = makeStyles({
    btn:{
        fontSize:'1.5rem',
        fontWeight:400,
        padding:"5px 30px",
        border:"none",
        outline:"none",
        cursor:"pointer",
        borderRadius:"20px",
        boxShadow:"0px 0px 5px 1px #000",
        color:"#fff",
        background:"#9B0000",
        border:"2px solid transparent",
        transitionDuration:"400ms",
        '&:hover':{
            color:"#fff",
            background:"#FF1700",
            border:"2px solid #FF1700"
        }
    }
});
const EventHeading = () => {
    const classes = useStyles();
    return (
        <div id="event">
            <ImageContainer bg={eventbg} style={{color:"#fff"}}>
                <div style={{background:"#000A",fontWeight: 400, textAlign: 'left', padding: "20px 3vw", lineHeight: '2rem', margin: "auto", color: '#fff' }}>
                <Title text="InherenIdea" style={{color:"#fff",textAlign:"center",marginBottom:"10px"}}/>
                <p style={{ textIndent: '3cm',fontSize:'1.2rem'}} >
                    <strong>InherenIdea</strong> is an event organized for the beginner developers looking for a kick start in their development journey. The event will provide an amazing platform for the developers to work on the real world projects and sharpen their skills.
                    Having a real-world project with trending technology is something which every developers want and can make their resume stand-out from others, but creating it from scratch alone is a difficult and tedious task.
                </p>
                <p style={{ textIndent: '3cm',fontSize:'1.2rem'}} >
                    <strong>InherenIdea</strong> is being organized to solve this problem and give developers a dream hands-on on the real world projects under the guidance with a community which will boost out their creativity and skills.
                </p>
                <Container style={{display:"flex",justifyContent:"space-around"}}>
                    <button className={classes.btn}>Know More &gt;</button>
                    <button className={classes.btn}>Register now &gt;</button>
                </Container>
                </div>
            </ImageContainer>
        </div>
    )
}
export default EventHeading;