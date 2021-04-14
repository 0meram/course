import styled from "styled-components"
import { Link as LinkR} from 'react-router-dom'
import { Link as LinkS} from 'react-scroll'

export const Nav = styled.nav`
background:  ${({scrollNav}) => (scrollNav ? '#242424e0' : ' transparent')};
height: 80px;
margin-top: -80px;
display: flex;
justify-content: center;
align-items: center;
font-size: 16px;
position: sticky;
top: 0;
z-index: 10;
transition: 1.8s all ease;

@media screen and (max-width: 960px){
    transition: 2.0s all ease;
}
`;

export const NavContainer = styled.div`
height: 100px;
display: flex;
justify-content: space-between;
z-index: 1;
width: 100%;
padding: 0 30px;
max-width: 1100px;

`;

export const LogoScroll = styled(LinkS)`
margin-bottom: 0px;
`;


export const NavLogo = styled.img`

justify-self: flex-start;
cursor: pointer;
display: flex;
align-items: center;
margin-left: 24px;
/* border-radius: 50%; */
width: 100px;
height: 100px;

&:hover{
    transform: scale(1.09);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
}

`;

export const MobileIcon = styled.div`
display: none;

@media screen and (max-width: 768px){
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 20%);
    font-size: 30px;
    cursor: pointer;
    color: #ff791a;
}
`;

export const NavMenu = styled.ul`
display: flex;
align-items: center;
list-style: none;
text-align: center;
margin-right: -22px;
margin-bottom: 0;

@media screen and (max-width: 768px){
display: none;
}
`;


export const NavItem = styled.li`
height: 80px;

`;


export const NavLinks = styled(LinkS)`
color:  ${({scrollNav}) => (scrollNav ? '#000' : ' #ff791a')};
display:flex;
align-items:center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;


&.active {
border-bottom: 3px solid #000;

}

&:hover{
/* transform: scale(1.2); */
font-weight: bold;
color: black;
}
`;

export const NavBtn = styled.nav`
display: flex;
align-items:center;

@media screen and (max-width: 768px){
    display:none;}
`;

export const NavBtnLink = styled(LinkS)`

border-radius: 50px;
background: #ff791a;
white-space: nowrap;
padding: 10px 22px;
color: #010606;
font-size: 16px;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;


&:hover {
    transform: scale(1.06);
transition: all 0.2s ease-in-out;
background: #fff;
color: #ff791a;
}

@media screen and (max-width: 768px){
    display:none;}
`;