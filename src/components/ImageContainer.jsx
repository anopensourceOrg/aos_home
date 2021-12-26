import { makeStyles } from "@mui/styles";
const useStyles = makeStyles({
    ImageContainer: {
        position: 'relative',
        backgroundImage: (props)=>`url(${props.bg})`,
        backgroundRepeat:'no-repeat',
        backgroundAttachment:'fixed',
        backgroundSize:'cover',
        margin:'0px',
    }
})
const ImageContainer = (props) => {
    const classes = useStyles(props);
    return (

        <div className={classes.ImageContainer} style={props.style}>
            {props.children}
        </div>
    )
}
export default ImageContainer;