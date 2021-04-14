import styled  from 'styled-components'



export const ServicesContainer = styled.div`
height: 150px;

`

export const CompaniesContainer = styled.div`
margin:  0 auto;
height: 150px;
display: flex;
justify-content: space-evenly;
align-items: center;
background-color: #e3e3e3;
width: 100%;
overflow:hidden;

@media screen and (max-width: 480px){
    padding: 24px;
    margin: 45px 0px 0px 0px;
}
`;


export const CompaniesLogo = styled.img`
align-items: center;
height: 60px;
width: 60px;
margin: 40px 60px;
@media screen and (max-width: 480px){
height: 70px;
margin: 0px 30px;
}
`;
