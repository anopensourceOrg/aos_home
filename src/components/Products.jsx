import Container from "./Container";
import Title from "./Title";
import { makeStyles } from "@mui/styles";
import portfolio from "../images/products/portfolio.jpg";
import landing from "../images/products/landing.jpg";
import ecom from "../images/products/ecom.jpg";
import management from "../images/products/management.jpg";
import Slide from 'react-reveal/Slide';
const useStyles = makeStyles({
    productCard: {
        display: 'flex',
        flexDirection: ({ reverse }) => `${reverse ? 'row-reverse' : 'row'}`,
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '20px 0px',
        overflow:'none',
        ['@media (max-width:650px)']:{ // eslint-disable-line no-useless-computed-key
            display:"grid",
            gridTemplateColumns:"1fr",
            gridGap:"10px"
        }
    },
    borderRadius: '20px',
    image: {
        '& img': {
            boxShadow: "0px 0px 20px 2px #000",
            borderRadius: '20px',
            maxHeight: '200px',
            objectFit: 'cover',
            margin: '0px 10px',
        },
    },
    text: {
        textAlign: 'left',
        margin: '0px 10px',
        '& p': {
            fontSize: '1.2rem'
        },
        ['@media (max-width:650px)']:{ // eslint-disable-line no-useless-computed-key
            marginBottom:'10px'
        }
    },
    title: {
        fontWeight: '800',
        color: '#35096a',
        fontSize: '1.8rem'
    }
})
const ProductCard = (props) => {
    const classes = useStyles(props);
    return (
        <div className={classes.productCard}>
            <div className={classes.text}>
                <h2 className={classes.title}>{props.title}</h2>
                <p>
                    {props.description}
                </p>
            </div>
            <div className={classes.image}>
                <img src={props.image} alt={props.title} />
            </div>
        </div>
    )
}

const Products = () => {
    const products = [
        {
            key: 1,
            title: 'Landing Page',
            description: 'Launching something new or organising an event, a landing page is the heart of innovation. We help your idea to reach to people all over the globe by creating amazing landing pages for you.',
            image: landing,
        },
        {
            key: 2,
            title: 'E-commerce application',
            description: 'Starting a new business online or shifting your business online. We are ready to help you setup your ecommerce store easily',
            image: ecom,
        },
        {
            key: 3,
            title: 'Portfolio website',
            description: 'Interested in showing up your presence on internet. We can help you by creating a portfolio of your choice matching with your personality to make you look awesome on web',
            image: portfolio
        },
        {
            key: 4,
            title: 'Management',
            description: 'Managing things is a hectic for everyone. A quick management tool can help you excel in your business, we can help you by creating a personalized tool for you',
            image: management
        }
    ]
    return (
        <>
            <Container>
                <Title text="Products we offer" />
                {
                    products.map((elem, ind) => {
                        return (
                            (
                                ind % 2 ?
                                    <Slide left  key={elem.key}>
                                        <ProductCard reverse={ind % 2} title={elem.title} description={elem.description} image={elem.image} />
                                    </Slide> :
                                    <Slide right  key={elem.key}>
                                        <ProductCard reverse={ind % 2} title={elem.title} description={elem.description} image={elem.image}/>
                                    </Slide>

                            )
                        )
                    })
                }
            </Container>
        </>
    )
}
export default Products;