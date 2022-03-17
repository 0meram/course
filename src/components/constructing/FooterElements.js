import styled from 'styled-components'

export const FooterContainer = styled.div`
background-color: #ffc400;
height: 100vh
`;


export const FooterWrap = styled.div`
padding: 88px 24px;
justify-content: center;
align-items: center;
max-width: 1100px;
margin: 0 auto;

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

export const NavLogo = styled.img`
align-items: center;
width: 400px;
height: 220px;

&:hover{
    transform: scale(1.09);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
}
`;