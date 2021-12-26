import { makeStyles } from "@mui/styles"
const useStyles = makeStyles({
    container:{
        maxWidth:'1100px',
        margin:'auto',
        padding:'10px'
    }
})
const Card = (props)=>{
    const classes = useStyles();
    return (
        <div className={classes.container} style={props.style}>
            {props.children}
        </div>
    )
}
export default Card;