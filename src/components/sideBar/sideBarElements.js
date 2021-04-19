import styled from "styled-components";
import {FaTimes} from "react-icons/fa"
import { Link as LinkR} from 'react-router-dom'
import { Link as LinkS} from 'react-scroll'


export const SideBarContainer = styled.aside`
position:  fixed;
z-index: 999;
width: 100%;
height: 100%;
background: #545454f0;
display: grid;
align-items: center;
top:0;
left:0 ;
transition: 0.3s ease-ease-in-out;
opacity: ${({isOpen}) => (isOpen ? '100%' : '0')};
top: ${({isOpen})  => (isOpen ? '0' : '-100%')};
`;


export const CloseIcon = styled(FaTimes)`
color: white;
`


export const Icon = styled.div`
position: absolute;
top: 1.2rem;
right: 1.5rem;
background: transparent;
font-size: 2rem;
cursor: pointer;
outline: none;

`;

export const SideBarWrapper = styled.div`
color: white;

`;

export const SideBarMenu = styled.ul`
display: grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(5, 70px);
text-align: center;

@media screen and(max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
}
`;

export const SideBarLink = styled(LinkS)`
display: flex;
align-items: center;
justify-content: center;
font-size: 1.5rem;
text-decoration: none;
list-style: none;
transition: 0.2s ease-in-out; 
text-decoration: none;
color: white;
cursor: pointer;

&:hover{
    color: #ffc400;
    transition: 0.2s ease-in-out; 
}

`;


export const SideBarBtnWrap = styled.div`
display: flex;
justify-content: center;

`;



export const SideBarRoute = styled(LinkS)`
border-radius: 50px;
background: #ffc400;
white-space: nowrap;
padding: 14px 64px;
color: #010606;
font-size: 16px;
outline: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;

&:hover{
transition: all 0.2s ease-in-out;
background: #fff;
color: #010606;
}
`;

export const LogoScroll = styled(LinkS)`
/* color: #fff;
justify-self: flex-start;
cursor: pointer;
font-size: 1.5rem;
display: flex;
align-items: center;
margin-left: 24px;
font-weight: bold;
text-decoration: none;
 */
margin-bottom: 0px;
`;


export const NavLogo = styled.img`

justify-self: flex-start;
cursor: pointer;
display: flex;
align-items: center;
width: 140px;
height: 120px;

&:hover{
    transform: scale(1.09);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
}

`;