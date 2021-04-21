import styled from "styled-components"
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'


export const ReviewContainer = styled.div`
margin: 0;
background-color: #fcfcfc;

@media screen and (max-width: 768px){
padding: 100px 0;
height:1000px}
`;

export const ReviewSection = styled.section`
 margin: 0;
 padding: 24px;
@media screen and (min-width: 992px) {
    width: 95vw;
  }
`;

export const ReviewTitle = styled.div`
  text-align: center;
  margin-bottom: 2rem;

&:hover{
    transform: scale(1.03);
    transition: all 0.2s ease-in-out;
}

`;

export const ReviewH2 = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 60px;
  margin-top: 20px;
  margin-bottom: 64px;
  @media screen and (max-width: 480px) {
    font-size: 35px;
    padding: 10px;
  }

`;

export const ReviewSectionCenter = styled.div`
  margin: 0 auto;
  width: 80vw;
  height: 450px;
  max-width: 800px;
  text-align: center;
  position: relative;
  display: flex;
  overflow: hidden;

@media screen and (max-width: 768px){
padding: 100px 0;
height:1000px}
`;


export const ReviewArticle = styled.article`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: all 0.3s linear;
    @media screen and (max-width: 768px){
        padding: 0px 0}
`;

export const ReviewImg = styled.img`
  border-radius: 50%;
  margin-bottom: 1rem;
  width: 180px;
  height: 180px;
  object-fit: cover;
  /* border: 3px solid  #fce26ef0; */
  box-shadow:  0 5px 15px rgba(0, 0, 0, 0.3);

@media screen and (max-width: 768px){
    width: 220px;
  height: 220px;}
`;

export const ReviewH4 = styled.h4`
  color: black;
  margin-bottom: 0.25rem;
  font-size: 30px;
 
`;

export const PersonTitle = styled.p`
  text-align: center;
  color: gray;
`;

export const PersonText = styled.p`
  max-width: 35em;
  margin: 0 auto;
  margin-top: 2rem;
  line-height: 2;
  font-size: 18px;
  color: gray;
  @media screen and (max-width: 768px){
  height:900px}


`;
export const IconRight = styled(FiChevronRight)`

`;
export const IconLeft = styled(FiChevronLeft)`

`;


export const ReviewButtonPrev = styled.button`
 
 
    font-size: 50px;
    left: 0;
    position: absolute;
  top: 200px;
  transform: translateY(-50%);
  background: transparent;
  color: #ffc400;
  display: grid;
  place-items: center;
  border-color: transparent;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s linear;

    &:hover{  
    font-size: 55px;
    }
`;
export const ReviewButtonNext = styled.button`

    font-size: 50px;
    right: 0;
    position: absolute;
  top: 200px;
  transform: translateY(-50%);
  background: transparent;
  color: #ffc400;
  display: grid;
  place-items: center;
  border-color: transparent;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s linear;

    
  &:hover{  
    font-size: 55px;
    
    }
`;