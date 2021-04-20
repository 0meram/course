import styled  from 'styled-components'



export const ServicesContainer = styled.div`
height: auto;
margin-bottom: 100px;

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
    padding: 24px;
    margin: 45px 0px 0px 0px;
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
height: 70px;
margin: 0px 30px;
}
`;
