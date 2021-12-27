import video from "../images/video.mp4";
import { makeStyles } from "@mui/styles";
import Slide from "react-reveal/Slide";
const useStyles = makeStyles({
    description: {
        display: "grid",
        gridTemplateColumns: '2fr 3fr',
        minHeight: '70vh',
        alignItems: 'center',
        maxWidth: '1200px',
        margin: 'auto',
        color: '#fff',
        '& video': {
            width: '100%',
            maxHeight: '400px',
            aspectRatio: '1',
            objectFit: 'cover',
            clipPath: 'circle(40% at 50% 50%)',
        },
        ['@media (max-width:650px)']: { // eslint-disable-line no-useless-computed-key
            gridTemplateColumns: '1fr'
        }
    },
    information: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'start',
        maxWidth: '620px',
        '& h1': {
            fontSize: '3rem',
            textAlign: 'left',
            padding: '3px',
            margin: '3px'
        },
        '& h3': {
            textAlign: 'left',
            padding: '3px',
            margin: '3px',
            fontWeight: '300',
            fontSize: '1.7rem'
        },
        ['@media (max-width:650px)']: { // eslint-disable-line no-useless-computed-key
            padding: '0px 10px'
        }
    },
    contactLink: {
        margin: '10px auto',
        fontSize: '1.5rem',
        background: '#fff',
        padding: '5px 20px',
        borderRadius: '40px',
        border: '2px solid white',
        outline: 'none',
        color: '#35096a',
        cursor: 'pointer',
        '&:hover': {
            background: 'transparent',
            color: '#fff',
            transitionDuration: '300ms'
        }
    }
})
const Description = () => {
    const classes = useStyles();
    return (
        <div className={classes.description}>
            <div>
                <video src={video} autoPlay muted loop preload="metadata" />
            </div>
            <div className={classes.information}>
                <Slide right>
                    <h1>Connect your business to Internet</h1>
                </Slide>
                <Slide right>
                    <h3>Boost your business with us and get all tech solutions for your business</h3>
                </Slide>
                <Slide right>

                    <button className={classes.contactLink}>Contact Us</button>
                </Slide>
            </div>
        </div>
    )
}
export default Description;