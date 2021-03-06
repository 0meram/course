import styled  from 'styled-components'
import { FaPeopleCarry } from "react-icons/fa";



export const ServicesContainer = styled.div`
height: 380px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background: #ffc400;
color: #fff;
margin: 0;


@media screen and (max-width: 1000px){
height: 600px;
}

@media screen and (max-width: 768px){
height: 1100px;
}

@media screen and (max-width: 480px){
height: 1450px;
padding: 70px;
}
`

export const ServicesWrapper = styled.div`
max-width: 1000px;
margin: 0 auto;
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
align-items: flex-start;
grid-gap: 90px;
padding: 0 0px;
margin-top: 35px;
margin-bottom: 35px;


@media screen and (max-width: 1000px){
grid-template-columns: 1fr 1fr;
};

@media screen and (max-width: 768px){
grid-template-columns: 1fr ;
padding: 0 0px;
}
`;

export const ServicesCard = styled.div`
background: transparent;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
border-radius: 10px;
max-height: 340px;
padding: 0px;
transition: all 0.2s ease-in-out;

&:hover{
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
}
`;

export const ServicesIcon = styled.div`
height: 100px;
width: 100px;
margin-bottom: 14px;
text-align: center;
font-size: 75px;
`;


export const ServicesH1 = styled.h1`
font-size: 50px;
font-weight: bold;
color: #000;
margin-bottom: 64px;

@media screen and (max-width: 480px){
font-size: 2rem;
}

`;

export const ServicesH2 = styled.h2`
font-size: 20px;
font-weight: bold;
margin-bottom:10px ;
color: black;
`;

export const ServicesP = styled.p`
font-size: 16px;
text-align:center ;
`