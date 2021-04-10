import styled from "styled-components"
import {Link} from 'react-router-dom'


export const Container = styled.div`
min-height: 692px;
position: fixed;
bottom: 0;
top: 0;
left: 0;
right: 0;
z-index: 0;
overflow: hidden;
background: linear-gradient(
    108deg,
    #0b8e18 0%,
    #38ff9ce6 90%
);
`;

export const FormWrap = styled.div`
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;

@media screen and (max-width: 400px){
    height: 80%;
}
`;  

export const Icon = styled(Link)`
margin-left: 32px;
margin-top: 32px;
text-decoration: none;
color: white;
font-weight: 700;
font-size: 38px;


@media screen and (max-width: 480px){
   margin-left: 16px;
   margin-top: 8px;
}
`;

export const FormContent = styled.div`
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;

@media screen and (max-width: 480px){
padding: 10px
}
`;


export const Form = styled.form`
background: #bababa52;
max-width: 400px;
height: auto;
width: 100%;
z-index: 1;
display: grid;
margin: 0 auto;
padding: 30px 28px;
border-radius: 8px;
box-shadow: 0 4px 30px #00000030;
margin-bottom: 100px;

@media screen and (max-width: 400px){
padding: 32px 32px;
}
`;


export const FormH1 = styled.h1`
margin-bottom: 40px;
color: #ff791a;
font-size: 32px;
font-weight: 500;
text-align: center;

`;

export const FormLabel = styled.label`
margin-bottom: 5px;
font-size: 15px;
color: #ff791a;
`;


export const FormInput = styled.input`
padding: 15px 15px;
margin-bottom: 25px;
border: none;
border-radius: 4px;

&:hover{
    box-shadow: 0 2px 6px #00000030;
}
`;

export const FormButton = styled.button`
background: #ff791a;
padding: 12px 0;
border: none;
border-radius: 30px;
color: white;
font-size: 20px;
cursor: pointer;

&:hover{
    transform: scale(1.04);
}
`;

export const Text = styled.span`
text-align: center;
margin-top: 24px;
color: white;
font-size: 14px;
`;

export const BackButton = styled(Link)`
text-align: center;
text-decoration: none;
margin-top: 24px;
color: white;
font-size: 14px;
`;