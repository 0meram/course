import styled  from 'styled-components'
import {IoIosArrowDown, IoIosArrowUp} from 'react-icons/io';



export const ServicesContainer = styled.div`
height: fit-content;
padding-bottom: 50px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background: #e1e2e1;
margin: 0 auto;

@media screen and (max-width: 768px){
    height: 1600px;
}

@media screen and (max-width: 480px){
    height: 1600px;
}
`


export const ServicesWrapper = styled.div`
max-width: 1000px;
margin: 0 auto;
display: grid;
grid-template-columns: 1fr 1fr ;
align-items: flex-start;
grid-gap: 70px;
padding: 24px;
height: fit-content;

@media screen and (max-width: 1000px){
    grid-template-columns: 1fr 1fr;
}
@media screen and (max-width: 768px){
    grid-template-columns: 1fr ;
 
    align-items: center;
}

`;

export const ServicesIcon = styled.img`
height: 330px;
width: 100%;
border-radius: 4px;
transition: all 1.5s ease;
&:hover{
transform: scale(1.4);
border-radius: 4px;
}
`;


export const ServicesH1 = styled.h1`
font-size: 60px;
font-weight: bold;
color: #000;
margin-top: 50px;
margin-bottom: 20px;
@media screen and (max-width: 480px){
font-size: 2rem;
}
`;

export const ServicesH2 = styled.h2`
font-size: 30px;
color: #ffc400;
font-weight: bold;
margin-bottom:10px ;
margin-top:55px ;
`;

export const ServicesP = styled.p`
font-size: 18px;
text-align:center ;
padding: 20px;
line-height: 40px;
word-spacing: 3px;
`;

export const MoreDetails = styled.div`
font-size: 12px;
height: 20px;
text-align:center ;
padding: 0;
margin: 0;
margin-top: 20px;
`;


export const Icon = styled(IoIosArrowDown)`
font-size: 42px;
text-align:center ;
margin: 0;
color:black
`;


export const IconUp = styled(IoIosArrowUp)`
font-size: 42px;
text-align:center ;
margin: 0;
color:black
`;

