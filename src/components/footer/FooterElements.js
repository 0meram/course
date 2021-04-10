import styled from 'styled-components'
import {Link} from 'react-router-dom'
import { Link as LinkS} from 'react-scroll'


export const FooterContainer = styled.div`
background-color: #a3a3a3;

`;


export const FooterWrap = styled.div`
padding: 48px 24px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
max-width: 1100px;
margin: 0 auto;

`;

export const FooterLinksContainer = styled.div`
display: flex;

@media screen and (max-width: 820px){
    padding-top: 32px;
}
`;

export const FooterLinksWrapper = styled.div`
display: flex;

@media screen and (max-width: 820px){
   flex-direction: column;
}
`;

export const FooterLinkItem = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
margin: 16px;
text-align: left;
width: 160px;
box-sizing: border-box;
color: white;


@media screen and (max-width: 420px){
    margin: 0 ;
    padding: 10px;
    width: 100%;
}
`;


export const FooterLinkTitle = styled.h1`
font-size: 20px;
margin-bottom: 16px;

`;


export const FooterLink = styled(Link)`
color: white;
text-decoration: none;
margin-bottom: 0.9rem;
font-size: 15px;

&:hover{
    color: #ff791a;
    transition: 0.3s ease-out;
}
`;

export const SocialMedia = styled.div`
max-width: 1000px;
width: 100%;
`;


export const SocialMediaWrap = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
max-width: 1100px;
margin: 40px auto 0 auto;

@media screen and (max-width: 820px) {
    flex-direction: column;
}
`;


export const SocialLogo = styled(Link)`
color: white;
justify-self: start;
cursor: pointer;
text-decoration: none;
font-size: 1.5rem;
display: flex;
align-items: center;
margin-bottom: 16px;
font-weight: bold;

`;


export const WebSiteRights = styled.small`
color: white;
margin-bottom: 16px;
margin-top:30px;

`;


export const SocialIcons = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 240px;

`;


export const SocialIconLink = styled.a`
color: white;
font-size: 24px;


`;

export const LogoScroll = styled(LinkS)`
margin-bottom: 0px;
`;


export const NavLogo = styled.img`

justify-self: flex-start;
cursor: pointer;
display: flex;
align-items: center;
border-radius: 50%;
width: 150px;
height: 150px;

&:hover{
    transform: scale(1.09);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
}
`;