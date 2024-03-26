import {Header2Container,WeatherBackground, NavItem, LinkItem} from './styledComponents';
const Adminheader= () => (
    <Header2Container>
    <WeatherBackground>
    <LinkItem to="/admin"><NavItem>Report</NavItem></LinkItem>
    <LinkItem to="/admin-leave-rules"><NavItem>Leave Rules</NavItem></LinkItem>
    <LinkItem to="/"><NavItem>Logout</NavItem></LinkItem>

    </WeatherBackground>
    </Header2Container>
)

export default Adminheader