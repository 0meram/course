import styled  from 'styled-components'


export const ServicesContainer = styled.div`
height: 500px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background: #ffffff;
margin-bottom: 100px;

@media screen and (max-width: 768px){
    height: 1300px;
}

@media screen and (max-width: 480px){
    height: 1200px;

}
`

export const ServicesWrapper = styled.div`
max-width: 800px;
display: grid;
grid-auto-columns: auto;
grid-template-columns: 1fr 1fr;
align-items: center;
grid-gap: 100px;
overflow:hidden;
padding: 24px;
height: 400px;
margin-bottom:0px;

@media screen and (max-width: 100px){
    grid-template-columns: 1fr 1fr ;
    overflow:hidden;
}
@media screen and (max-width: 768px){
    grid-template-columns: 1fr ;
height: 1300px;
}
@media screen and (max-width: 480px){
    height: 1400px;

}

`;

export const ServicesCard = styled.div`
background: #fff;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
border-radius: 10px;
height: fit-content;
width: 300px;
max-height: 340px;
padding: 0px;
/* box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); */
transition: all 0.2s ease-in-out;

&:hover{
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
}
@media screen and (max-width: 480px){
    height: 350px;
    padding: 0;

}

`

export const ServicesIcon = styled.img`
  border-radius: 50%;
  margin-bottom: 1rem;
  width: 180px;
  height: 180px;
  object-fit: cover;
  border: 4px solid  #c3d7dae3;
  box-shadow:  0 5px 15px rgba(0, 0, 0, 0.3);

@media screen and (max-width: 768px){
    width: 220px;
  height: 220px;}

`;


export const ServicesH1 = styled.h1`
font-size: 50px;
font-weight: bold;
color: #000;
margin-bottom: 64px;
margin-top: 70px;

@media screen and (max-width: 480px){
    font-size: 2rem;
}

`;

export const ServicesH2 = styled.h2`
font-size: 1rem;
margin-bottom:10px ;
`;

export const ServicesP = styled.p`
font-size: 16px;
text-align:center ;
`;

export const PersonTitle = styled.p`
  text-align: center;
  color: gray;
`;



