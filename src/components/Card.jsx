import { makeStyles } from "@mui/styles"
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
const useStyles = makeStyles({
    card: {
        borderRadius: '20px',
        width: '300px',
        height: '250px',
        border: '1px solid #35096a',
        margin: '20px',
        boxShadow: '0px 0px 10px 1px #1118',
        display:'flex',
        justifyContent:'space-around',
        alignItems:'space-around',
        flexDirection:'column',
        padding:'20px',
        textAlign:'left',
        '&:hover': {
            boxShadow: '0px 0px 8px 1px #35096a',
            cursor: 'pointer'
        }
    },
    icon:{
        textAlign:'left',
        color:'#35096a',
        fontSize:'30rem',
        width:'50px',
        height:'50px'
    },
    link:{
        color:'#35096a',
        margin:'10px 0px',
        display:'flex',
        alignItems:'center',
        fontSize:'1rem',
        lineHeight:'1rem'
    }
})
const Card = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.card} styles={props.style}>
            {(props.icon ? <props.icon sx={{fontSize:'3rem'}} className={classes.icon}/> : null)}
            {(props.heading ? <h2 className={classes.heading}>{props.heading}</h2> : null)}
            {(props.description ? <div className={classes.description}>{props.description}</div> : null)}
            {(props.link ? <div className={classes.link}>{props.link} {" "} <NavigateNextIcon/> </div> : null)}
        </div>
    )
}
export default Card;