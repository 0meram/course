import styled  from 'styled-components'


export const ServicesContainer = styled.div`
/* height: 600px; */
height: fit-content;
padding-bottom: 50px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background: #dbdbdbba;
margin: 0 auto;

@media screen and (max-width: 768px){
    height: 1000px;
}

@media screen and (max-width: 480px){
    height: 1000px;
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

// export const ServicesCard = styled.div`
// background: #fff;
// display: flex;
// flex-direction: column;
// justify-content: flex-start;
// align-items: center;
// border-radius: 10px;
// padding: 30px;
// box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
// transition: all 0.2s ease-in-out;
// overflow: hidden;
// height: 500px;

// &:hover{
//     transform: scale(1.1);
//     transition: transform 1.1s ease-in-out;
//     cursor: pointer;
//     /* height: 500px; */
// }

// `

export const ServicesIcon = styled.img`
height: 160px;
width: 160px;
margin-bottom: 10px;

`;


export const ServicesH1 = styled.h1`
font-size: 50px;
font-weight: bold;
color: #000;
margin-top: 50px;
margin-bottom: 20px;

@media screen and (max-width: 480px){
    font-size: 2rem;
}

`;

export const ServicesH2 = styled.h2`
font-size: 22px;
font-weight: bold;
margin-bottom:10px ;
`;

export const ServicesP = styled.p`
font-size: 1rem;
text-align:center ;

`