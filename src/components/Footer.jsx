import {makeStyles} from "@mui/styles";
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
const useStyles = makeStyles({
    footer:{
        background:"#333",
        color:"#fff",
        fontSize:"1.1rem",
        padding:"20px",
        display:"grid",
        gridTemplateColumns: `repeat(auto-fill,minmax(400px,1fr))`,
        '& ul':{
            listStyle:"none",
            textAlign:"left",
            '& li':{
                textAlign:'left',
                margin:"5px 0px"
            }
        }
    }
})
const Footer = () => {
    const classes = useStyles();
    return (
        <div className={classes.footer}>
{/*
            <ul>
                <h4>Useful Links</h4>
                <li>Item</li>
                <li>Item</li>
                <li>Item</li>
            </ul>
            <ul>
                <h3>Connect us at</h3>
                <li>Item</li>
                <li>Item</li>
                <li>Item</li>
            </ul>
*/}            
            <ul id="contact">
                {/* contact details  */}
                <h3>Contact us</h3>
                <a href="tel:7048936838"><li><CallIcon/> 7048936838</li></a>
                <a href="mailto:anopensource1@gmail.com"><li><EmailIcon/> anopensource1@gmail.com</li></a>
            </ul>
        </div>
    )
}
export default Footer;