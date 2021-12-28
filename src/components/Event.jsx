import ImageContainer from "./ImageContainer";
import eventbg from "../images/event.jpg";
import Title from "./Title";
const Event = () => {
    return (
        <div id="event">
            <ImageContainer bg={eventbg} style={{color:"#fff"}}>
                <div style={{background:"#000A",fontWeight: 400, textAlign: 'left', padding: "20px 3vw", lineHeight: '2rem', margin: "auto", color: '#fff' }}>
                <Title text="Inherenidea" style={{color:"#fff",textAlign:"center"}}/>
                <p style={{ textIndent: '3cm',fontSize:'1.2rem'}} >
                    <strong>InherenIdea</strong> is an event organized for the beginner developers looking for a kick start in their development journey. The event will provide an amazing platform for the developers to work on the real world projects and sharpen their skills.
                </p>
                </div>
            </ImageContainer>
        </div>
    )
}
export default Event;