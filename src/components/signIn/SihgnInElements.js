import styled from "styled-components"
import {Link} from 'react-router-dom'


export const Container = styled.div`

background-color: #e1e2e1;
overflow: hidden;
@media screen and (max-width: 400px){
    height: 650px;
    margin:0;
}
`;

export const FormWrap = styled.div`
height: fit-content;
display: flex;
flex-direction: column;
justify-content: center;
background-color: #e1e2e1;
text-align: center;
@media screen and (max-width: 480px){
    height: 400px;
    padding: 24px;
}
`;  

// export const Icon = styled(Link)`
// margin-left: 32px;
// margin-top: 32px;
// text-decoration: none;
// color: white;
// font-weight: 700;
// font-size: 38px;


// @media screen and (max-width: 480px){
//    margin-left: 16px;
//    margin-top: 8px;
// }
// `;

export const FormContent = styled.div`
/* height: 100%;
display: flex;
flex-direction: column; */
/* justify-content: center;
background-color: red;
margin:0 auto;
@media screen and (max-width: 480px){
padding: 0px;
margin:0 ;

} */
`;


export const Form = styled.form`
background: #e1e2e1;
max-width: 600px;
height: 350px;
width: fit-content;
z-index: 1;
display: grid;
margin: 0 auto;
padding: 30px 28px;
border-radius: 8px;
/* box-shadow: 0 4px 30px #00000030; */
margin-bottom: 100px;
@media screen and (max-width: 480px){
    align-items: center;
    margin: 0;
}
`;


export const FormH1 = styled.h1`
margin-bottom: 10px;
margin-top: 50px;
color: #ffc400;
font-size: 32px;
font-weight: 500;
text-align: center;
@media screen and (max-width: 480px){
    align-items: center;
    margin-top: 100px;
}
`;

export const FormLabel = styled.label`
margin-bottom: 5px;
font-size: 15px;
color: #ffc400;
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