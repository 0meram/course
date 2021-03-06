import styled from "styled-components"
import {Link} from 'react-router-dom'


export const Container = styled.div`

background-color: #ffc400;
height: fit-content;
max-height: 1900px;
@media screen and (max-width: 480px){
height: fit-content;
margin:0 auto;
}
`;

export const FormWrap = styled.div`
height: fit-content;
display: flex;
flex-direction: column;
justify-content: center;
text-align: center;
@media screen and (max-width: 480px){
height: fit-content;
padding: 24px;
}
`;  


export const FormContent = styled.div`
`;


export const Form = styled.form`
background: #e1e2e1;
max-width: 600px;
height: fit-content;
width: fit-content;
z-index: 3;
display: grid;
margin: 0 auto;
padding: 30px 28px;
border-radius: 8px;
box-shadow: 0 4px 30px #00000030;
margin-bottom: 100px;
@media screen and (max-width: 480px){
align-items: center;
margin: 0 auto;
}
`;


export const FormH1 = styled.h1`
margin-bottom: 10px;
margin-top: 50px;
color: #494949;
font-size: 32px;
font-weight: 500;
text-align: center;
@media screen and (max-width: 480px){
align-items: center;
}
`;

export const FormLabel = styled.label`
margin-bottom: 25px;
font-size: 18px;
color: #ffc400;
letter-spacing: 3px;
`;


export const FormInput = styled.input`
padding: 15px 20px;
margin-bottom: 28px;
border: none;
border-radius: 4px;
text-align: right;
width: 500px;

&:hover{
box-shadow: 0 2px 6px #00000030;
}
@media screen and (max-width: 480px){
max-width: 250px;
}

`;

export const FormButton = styled.button`
background: #ffc400;
padding: 12px 0;
border: none;
border-radius: 30px;
color: white;
font-size: 20px;
cursor: pointer;
margin-top: 20px;

&:hover{
transform: scale(1.04);
}
@media screen and (max-width: 480px){
width: 250px;
align-items: center;
margin: 0;
}
`;

export const Text = styled.span`
text-align: center;
margin-top: 24px;
color: white;
font-size: 16px;
`;

export const BackButton = styled(Link)`
text-align: center;
text-decoration: none;
margin-top: 24px;
color: white;
font-size: 14px;

`;


export const NamePhoneCon = styled.div`
align-items: center;
display: flex;
justify-items: center;
margin: auto ;
margin-bottom: 28px;
font-size: 16px;
@media screen and (max-width: 480px){
max-width: 250px;
display: block;
}
`;

export const FormNameInput = styled.input`

padding: 15px 20px;
border: none;
border-radius: 4px;
text-align: right;
width: 210px;
margin-left: 28px;
&:hover{
box-shadow: 0 2px 6px #00000030;
}
@media screen and (max-width: 480px){
width: 250px;
margin: 0;
margin-top: 28px;
}


`;
export const FormPhoneInput = styled.input`
padding: 15px 20px;
border: none;
border-radius: 4px;
text-align: right;
width: 260px;
&:hover{
box-shadow: 0 2px 6px #00000030;
}
@media screen and (max-width: 480px){
width: 250px;
margin: 0;
}
`;


export const FormMassegeInput = styled.textarea`
padding: 15px 20px;
margin-bottom: 25px;
border: none;
border-radius: 4px;
text-align: right;
width: 500px;
height: 100px;

&:hover{
box-shadow: 0 2px 6px #00000030;
}
@media screen and (max-width: 480px){
max-width: 250px;

}
`;

export const FormSelect = styled.select`
padding: 15px 20px;
margin-bottom: 25px;
border: none;
border-radius: 4px;

text-align-last:right;
direction: rtl;

width: 500px;
height: 50px;

&:hover{
box-shadow: 0 2px 6px #00000030;
}
@media screen and (max-width: 480px){
max-width: 250px;

}
`;
export const FormSelectOption = styled.option`
text-align: center;
@media screen and (max-width: 480px){
max-width: 250px;
}
`;