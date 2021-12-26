import Container from "./Container";
import Card  from "./Card";
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import AutoGraphOutlinedIcon from '@mui/icons-material/AutoGraphOutlined';
import ComputerOutlinedIcon from '@mui/icons-material/ComputerOutlined';

const servicesStyle = {
    display:'flex',
    flexWrap:'wrap'
}
const Services = () => {
    const services = [
        {
            key:1,
            heading:'Latest Technology',
            description:'We provide the trending technology to keep you updated',
            icon:ComputerOutlinedIcon,
            link:null,
        },
        {
            key:2,
            heading:'Scalablity',
            description:'Scale up as fast as your bussiness grows',
            icon:AutoGraphOutlinedIcon,
            link:null,
        },
        {
            key:3,
            heading:'Modularity',
            description:'Pick the services that you require and pay for them only',
            icon:GridViewOutlinedIcon,
            link:null,
        },
    ]
    return (
        <Container style={servicesStyle}>
            {services.map((elem)=>{
                return (<Card heading={elem.heading} description={elem.description} icon={elem.icon} key={elem.key}/>)
            })}
        </Container>
    )
}
export default Services;