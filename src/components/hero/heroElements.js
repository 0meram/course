import styled from "styled-components"
import { MdArrowForward } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

export const HeroContainer = styled.div`
background: #0c0c0c;
display: flex;
justify-content: center;
align-items: center;
padding: 0 30px;
height: 700px;
position: relative;
z-index: 1;

`;


export const HeroBg = styled.div`
position:absolute;
top: 0;
right: 0;
bottom: 0;
left: 0;
width: 100%;
height: 100%;
overflow: hidden;

`;



export const VideoBg = styled.video`

width: 100%;
height: 100%;
--o-object-fit: cover;
object-fit: cover;
`;

export const BgImage = styled.img`
width: 100%;
height: 100%;
--o-object-fit: cover;
object-fit: cover;

`


export const HeroContent = styled.div`
z-index: 3;;
max-width: 1200px;
position: absolute;
padding: 8px 24px;
display: flex;
flex-direction:  column;
align-items: center;

`;

export const HeroImg = styled.img`
height: 140px;
width: 180px;

&:hover{
    transform: scale(1.05);
    transition: all 0.2s ease-in-out;
}

@media screen and (max-width: 768px){
    height: 100px;
width: 120px;
    }

@media screen and (max-width: 480px){
    height: 100px;
width: 120px;
}

`

export const HeroH1 = styled.h1`
color: white;
font-size: 94px;
text-align: center;
font-weight: bold;

@media screen and (max-width: 768px){
font-size: 70px;
    }

@media screen and (max-width: 480px){
font-size: 52px;
}
`;
export const HeroP = styled.p`

color: white;
font-size: 48px;
text-align: center;
max-width: 520px;
margin:0;
text-shadow:  0 8px 10px black;
;

@media screen and (max-width: 768px){
font-size: 34px;
    }

@media screen and (max-width: 480px){
font-size: 30px;
max-width: 280px;

}

`;
export const HeroTag = styled.p`

color: white;
font-size: 28px;
text-align: center;
max-width: 800px;
word-spacing: 15px;
letter-spacing: 12px;
margin:0;
text-shadow:  0 8px 10px black;


@media screen and (max-width: 768px){
font-size: 34px;
    }

@media screen and (max-width: 480px){
font-size: 19px;
word-spacing: 0px;
letter-spacing: 5px;
}

`;

export const HeroBtnWrapper = styled.div`
margin-top: 32px;
display: flex;
flex-direction: column;
align-items: center;
`;


export const ArrowForward = styled(MdArrowForward)`
margin-left: 8px;
font-size: 20px;

`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
margin-left: 8px;
font-size: 20px;

`;