import styled from "styled-components";




export const GalleryCon = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-around;
overflow: hidden;
background: transparent;
height: fit-content;
border-radius: 4px;
margin: 0 130px ;

@media screen and (max-width: 768px){
    margin: 0 40px ;
    }

@media screen and (max-width: 480px){
    margin: 0 0px ;
}

`;

