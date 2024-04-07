import {Header2Container,WeatherBackground, NavItem, LinkItem} from './styledComponents';
const Hodheader= () => (
    <Header2Container>
    <WeatherBackground>
    <LinkItem to="/hod-main"><NavItem>Home </NavItem></LinkItem>
    <LinkItem to="/hod-apply-leave-form"><NavItem>Apply Leave</NavItem></LinkItem>
    <LinkItem to="/hod"><NavItem>Requests</NavItem></LinkItem>
    <LinkItem to="/hod-history-search"><NavItem>History Search</NavItem></LinkItem>
    <LinkItem to="/hod-history"><NavItem>Personal History</NavItem></LinkItem>
    <LinkItem to="/workload-history"><NavItem>Workload History</NavItem></LinkItem>

    <LinkItem to="/hod-profile"><NavItem>Profile</NavItem></LinkItem>
    <LinkItem to="/"><NavItem>Logout</NavItem></LinkItem>


    </WeatherBackground>
    </Header2Container>
)

export default Hodheader