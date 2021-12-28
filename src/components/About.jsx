import ImageContainer from "./ImageContainer";
import bg2 from "../images/bg6.jpg";
import Title from "./Title";
const About = () => {
    return (
        <div id="about">
            <ImageContainer bg={bg2}>
                <div style={{ background: "#000C",paddingBottom:"20px" }}>

                    <Title text="Know more about us" style={{ color: "#fff",marginBottom:'10px' }} />
                    <div style={{ fontWeight: 400, textAlign: 'left', padding: "0px 3vw", lineHeight: '2rem', margin: "auto", color: '#fff' }}>
                        <p style={{ textIndent: '3cm',fontSize:'1.2rem' }}>
                            AnOpenSource is an organization working in the field of connecting business with the latest technology. We help the businesses in acquiring the latest tech set and enhancing their development. We are a team of few energetic and talented people who are continuously devoting their skills, efforts and time to provide maximum tech support to the businesses.
                        </p>
                        <p style={{ textIndent: '2cm',fontSize:'1.2rem' }}>
                            From the domain experts to fullstack developers, we have the people who can help to build perfect solution for you. With our model of project specific development, we provide a great platform for you to take control of your product and communicate directly to the development team. Also, this provides beginning developers/interns a great opportunity to directly involve in the business problem and use their skills to meet up the requirements.
                        </p>
                    </div>
                </div>
            </ImageContainer>
        </div>
    )
}
export default About;