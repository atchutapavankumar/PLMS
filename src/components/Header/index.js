import {Header2Container,WeatherBackground, NavItem, LinkItem} from './StyledComponents';
const Header= () => {

    const removeLocalstorageData = () => {
        localStorage.removeItem("user")
        localStorage.removeItem("userId")
    }

    return(
    <Header2Container>
    <WeatherBackground>
    <LinkItem to="/faculty-main"><NavItem>Home</NavItem></LinkItem>
    <LinkItem to="/apply-leave-form" ><NavItem>Apply Leave</NavItem></LinkItem>
    <LinkItem to="/class-requests"><NavItem>Requests</NavItem></LinkItem>
    <LinkItem to="/faculty-history"><NavItem>History</NavItem></LinkItem>
    <LinkItem to="/faculty-profile"><NavItem>Profile</NavItem></LinkItem>
    <LinkItem to="/"><NavItem onClick={removeLocalstorageData}>Logout</NavItem></LinkItem>

    </WeatherBackground>
    </Header2Container>
    )
    }

export default Header