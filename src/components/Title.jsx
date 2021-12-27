import {makeStyles} from "@mui/styles";
const useStyles = makeStyles({
    title:{
        color:'#35096a',
        textTransform:'capitalize',
        fontSize:'2.2rem',
        fontWeight:600,
        fontFamily:`'Playfair Display', serif`,
        textShadow:'0px 0px 3px #191919'

    }
})
const Title = (props) => {
    const classes = useStyles();
    return (
        <h1 className={classes.title} style={props.style}>{props.text}</h1>
    )
}
export default Title;