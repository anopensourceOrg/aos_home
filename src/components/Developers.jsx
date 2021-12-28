import Container from "./Container";
import Title from "./Title";
import Card from "./Card";
import PublicIcon from '@mui/icons-material/Public';
import DevicesIcon from '@mui/icons-material/Devices';
import GroupsIcon from '@mui/icons-material/Groups';
const devStyles = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
}
const Developers = () => {
    const devServices = [
        {
            key:1,
            icon:PublicIcon,
            heading:"Real world projects",
            description:"Developers will get a chance to work on a real world bussiness problem. They can see their coding solution being used."
        },{
            key:2,
            icon:DevicesIcon,
            heading:"Trending tech stacks",
            description:"We keep on adoptiong new tech stacks for keeping our products updated, thus providing a great opportunity to code the trend"
        },{
            key:3,
            icon:GroupsIcon,
            heading:"Community",
            description:"Developers will get a beautiful developers community alongwith mentors to guide them through challenges and enhance their skillset"
        }
    ]
    return (
        <>
            <Title text="What's for devs" />
            <Container style={devStyles}>
                {
                    devServices.map((elem) => {
                        return (
                            <Card heading={elem.heading} icon={elem.icon} description={elem.description} key={elem.key}/>
                            )
                        })
                    }
            </Container>
        </>
    )
}
export default Developers;