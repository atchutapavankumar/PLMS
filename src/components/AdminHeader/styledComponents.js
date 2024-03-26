import styled from 'styled-components';
import {Link} from 'react-router-dom'

export const Header2Container = styled.div`
margin-top:0px;
display:flex;
max-height:50px;
align-items:center;`

export const PCLOGO = styled.img`
max-height:260px;
margin:0px;
`
export const WeatherBackground = styled.div`
height:50px;
width:100%;
margin:0px;
display:flex;
justify-content:space-evenly;
align-items:center;

background-image:url("https://res.cloudinary.com/dlovqnrza/image/upload/v1688611424/Weather_Backgound_image_ttob0i.png");`

export const Header2Location = styled.button`
border-radius:15px;
background-color:#dde5ec;
padding:5px;
outline:none;
display:flex;
justify-content:space-between;
border-width:0px;
padding-left:10px;
width:200px;

padding-right:10px;
`

export const NavItem = styled.p`
    font-family:"Montserrat", Sans-serif ;

    color:white;
    font-weight:bold;
    cursor:pointer;
`

export const LinkItem = styled(Link)`
text-decoration:none;
cursor:pointer`