import styled from 'styled-components'
import {Link} from 'react-router-dom'
import { Link as LinkS} from 'react-scroll'


export const FooterContainer = styled.div`
background-color: #494949;

`;


export const FooterWrap = styled.div`
padding: 48px 24px;
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

@media screen and (max-width: 820px){
   flex-direction: column;
}
`;

export const FooterLinkItem = styled.div`
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
    color: #ffc400;
    transition: 0.3s ease-out;
}
`;

export const SocialMedia = styled.div`
max-width: 1000px;
width: 100%;
`;


export const SocialMediaWrap = styled.div`
align-items: center;
text-align: center;
justify-content: center;
max-width: 1100px;
margin:  0 ;

@media screen and (max-width: 820px) {
}
`;


export const SocialLogo = styled(Link)`
color: white;
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
margin-top: 40px;

`;


export const SocialIcons = styled.div`
display: flex;
justify-content: space-between;
align-items: center;

width: 240px;
margin: 0 auto;
padding-bottom: 30px;
padding-top: 30px;

`;


export const SocialIconLink = styled.a`
color: white;
font-size: 24px;
&:hover{
    color: #ffc400;
    transition: 0.3s ease-out;
}

`;

export const LogoScroll = styled(LinkS)`
margin-bottom: 0px;
`;


export const NavLogo = styled.img`
align-items: center;
width: 140px;
height: 120px;

&:hover{
    transform: scale(1.09);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
}
`;