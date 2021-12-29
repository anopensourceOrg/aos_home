import ImageContainer from "./ImageContainer";
import eventbg from "../images/event.jpg";
import Title from "./Title";
import { makeStyles } from "@mui/styles";
import Container from "./Container";
import inherenidea from "../images/inherenidea.png";
const useStyles = makeStyles({
    description: {
        maxWidth: "1200px",
        margin: "auto",
        padding: "20px 2vw",
        display: "grid",
        gridTemplateColumns: "1fr 3fr",
        justifyContent: "center",
        alignItems: "center",
        gridGap: "50px",
        fontFamily: 'playfair',
        fontSize: "1.3rem",
        fontWeight: "300",
        color: "#222",
        ['@media (max-width:600px)']: {
            gridTemplateColumns: "1fr",
        },
        '& img': {
            aspectRatio: "1",
            objectFit: "contain",
            maxHeight: "300px",
        }
    },
    btn: {
        fontSize: '1.5rem',
        fontWeight: 400,
        padding: "5px 30px",
        border: "none",
        outline: "none",
        cursor: "pointer",
        margin:"5px 0px",
        borderRadius: "20px",
        boxShadow: "0px 0px 5px 1px #000",
        color: "#fff",
        background: "#35096a",
        border: "2px solid transparent",
        transitionDuration: "400ms",
        '&:hover': {
            color: "#35096a",
            background: "#fff",
            border: "2px solid #35096a"
        }
    }
});
const Event = () => {
    const classes = useStyles();
    return (
        <div id="event">
            <ImageContainer bg={eventbg} style={{ color: "#fff" }}>
                <div style={{ background: "#000A", padding: "30px 0px" }}>
                    <Title text="“The value of an idea lies in the using of it.“" style={{ color: "#fff", textAlign: "center", marginBottom: "10px" }} />
                    <p style={{ textAlign: "center", color: "#fff", fontSize: "1.2rem" }}>~Thomas Edison (1847 – 1931), Inventor</p>
                </div>
            </ImageContainer>
            <Title text="InherenIdea" style={{ textAlign: "center", marginBottom: "0px" }} />
            <div className={classes.description}>
                <img src={inherenidea} />
                <p style={{ textIndent: '3cm', textAlign: "left" }} >
                    <strong>InherenIdea</strong> is an event organized for the beginner developers looking for a kick start in their development journey. The event will provide an amazing platform for the developers to work on the real world projects and sharpen their skills.
                    Having a real-world project with trending technology is something which every developers want and can make their resume stand-out from others, but creating it from scratch alone is a difficult and tedious task.
                    <strong> InherenIdea </strong> is being organized to solve this problem and give developers a dream hands-on on the real world projects under the guidance with a community which will boost out their creativity and skills.
                    <Container style={{ display: "flex", justifyContent: "space-around",marginTop:"10px" , flexWrap:"wrap"}}>
                        <button className={classes.btn}>Know More &gt;</button>
                        <button className={classes.btn}>Register now &gt;</button>
                    </Container>
                </p>
            </div>
        </div>
    )
}
export default Event;