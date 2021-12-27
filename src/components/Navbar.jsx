import React,{useState, useEffect} from "react";
import { makeStyles } from "@mui/styles";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
const useStyles = makeStyles({
    navbar: {
        background: ({bg})=> bg,
        display: "grid",
        justifyContent: "space-around",
        gridTemplateColumns: "1fr 1fr",
        color: "#fff",
        padding:'5px 0px',
        '& h1': {
            fontWeight: 300,
            letterSpacing: '2px',
            fontSize:'2.3rem',
            fontFamily: `'Dancing Script', cursive`,
            ['@media (max-width:650px)']: { // eslint-disable-line no-useless-computed-key
                fontSize:'2rem',
                marginLeft:'10px'
            }
        }
    },
    navigation: {
        display: ({isMenuOpen}) => isMenuOpen?"flex":"none",
        justifyContent: 'space-around',
        alignItems: 'center',
        maxWidth: '650px',
        '& li': {
            listStyle: 'none',
            padding:'2px 10px',
            fontWeight:'600',
            transitionDuration:'200ms',
            '&:hover':{
                color:'#FFBD35',
                cursor:'pointer',
            }
        },
        ['@media (max-width:650px)']: { // eslint-disable-line no-useless-computed-key
            width: '100%',
            background: "#333",
            gridColumn: "1 / span 2",
            flexDirection:'column',
            '& li':{
                margin: '8px 0px',
                width:'100%',
                padding:'3px 0px',
            }
        }
    },
    menuBtn: {
        display:'none',
        '& button':{
            border:'2px solid #fff',
            borderRadius:'50px',
            padding:'3px 20px',
            background:'transparent',
            color:'#fff',
            cursor:'pointer',
        },
        ['@media (max-width:650px)']: { // eslint-disable-line no-useless-computed-key
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
        }
    }
})
const Navbar = React.forwardRef((props,ref) => {
    const [isMenuOpen,setIsMenuOpen] = useState(true);
    const classes = useStyles({isMenuOpen:isMenuOpen,bg:props.bg});
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }
    useEffect(()=>{
        if(window.innerWidth<650){
            setIsMenuOpen(false);
        }
    },[])
    return (
        <div className={classes.navbar} ref={ref} style={props.style}>
            <div>
                <h1>AnOpenSource</h1>
            </div>
            <div className={classes.menuBtn}>
                <button onClick={toggleMenu}>
                    {   isMenuOpen?
                        <CloseIcon/>:
                        <MenuIcon />
                    }
                </button>
            </div>
            <ul className={classes.navigation}>
                <li>Home</li>
                <li>About Us</li>
                <li>Events</li>
                <li>Contact Us</li>
            </ul>
        </div>
    )
})

export default Navbar;