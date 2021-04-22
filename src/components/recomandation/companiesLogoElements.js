import styled  from 'styled-components'



export const ServicesContainer = styled.div`
height: auto;
/* margin-bottom: 100px; */

`

export const CompaniesContainer = styled.div`
margin:  0 auto;
height: auto;
display: flex;
justify-content: space-evenly;
align-items: center;
background-color: #e3e3e3;
background-color: white;
width: 100%;
overflow:hidden;


@media screen and (max-width: 480px){
display: block;
justify-content: center;
align-items: center;
text-align: center;

}
`;


export const CompaniesLogo = styled.img`
align-items: center;
height: auto;
width: 15%;
margin: 40px 30px;

&:hover{
    transform: scale(1.03);
  
}
@media screen and (max-width: 480px){
height: auto;
width: 70%;
margin: 20px;
}
`;
