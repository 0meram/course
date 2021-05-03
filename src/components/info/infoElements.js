import styled from "styled-components"


export const InfoContainer = styled.div`
color: white;
background: ${({lightBg}) => (lightBg ? '#f9f9f9' : '#ffc400')};
@media screen and (max-width: 768px){
padding: 100px 0;

}
@media screen and (max-width: 480px){
margin-top: 0px;
padding-top: 40px;

}
`;


export const InfoWrapper = styled.div`
display: grid;
z-index: 1;
height: fit-content;
min-height: 600px;
width: 100%;
max-width: 1100px;
margin-right: auto;
margin-left: auto;
padding: 0 0px;
justify-content: center;
text-align: right;
@media screen and (max-width: 768px){

}

`;

export const InfoRow = styled.div`
display: grid;
grid-auto-columns: minmax(auto, 1fr);
column-gap:80px;
align-items: center;
grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

@media screen and (max-width: 768px){
grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `' col1 col1' 'col2 col2'`)};
}

`;


export const Column1 = styled.div`
margin-bottom: 15px;
padding: 40px 50px;
grid-area: col1;

`;

export const Column2 = styled.div`
padding: 0px 0px;
grid-area: col2;

`;

export const TextWrapper = styled.div`
max-width: 650px;
padding-top: 0;
padding-bottom: 60px;
padding: 0px;


`;


export const TopLine = styled.p`
color: ${({lightTitle}) => (lightTitle ? '#ff791a' : '#010606')};
font-size: 20px;
line-height: 16px;
font-weight: 700;
letter-spacing: 8px;
text-transform: uppercase;
margin-bottom: 16px;

`;


export const Heading = styled.h1`
margin-bottom: 24px;
font-size: 48px;
line-height: 1.1;
font-weight: 600;
color: ${({lightText}) => (lightText ? '#f7f8fa' : '#010606')};

@media screen and (max-width: 480px){
font-size: 32px;
}

`;

export const SubTitle = styled.p`
margin-bottom: 20px;
font-size: 18px;
line-height: 32px;
color: ${({darkText}) => (darkText ? '#010606' : '#fff')};

`;

export const BtnWrap = styled.div`
display: flex;
justify-content: flex-end;
margin-top: 45px;

`;

export const ImgWrap = styled.div`
height: 100%;
width: 100%;
margin: 0px
`;

export const Img = styled.img`
width: 100%;
margin: 0;
padding-right: 0;
border-radius: 8px;

@media screen and (max-width: 768px){
    width: 80%;
}
@media screen and (max-width: 480px){
width: 50%;
display: flex;
margin: 0 auto;
}


`;



export const ReviewArticle = styled.article`
margin-top: 25px;
display: flex;
justify-content: center;
align-items: center;
column-gap:80px;
width: auto;
height: 400px;
text-align: center;
@media screen and (max-width: 480px){
flex-direction: column;
height: 700px;
margin: 10px;
}
`;

export const ReviewImg = styled.img`
border-radius: 50%;
margin-bottom: 1rem;
width: 180px;
height: 180px;
object-fit: cover;
box-shadow:  0 5px 15px rgba(0, 0, 0, 0.3);

@media screen and (max-width: 768px){
width: 210px; 
height: 210px;}
`;

export const ReviewCon = styled.div`
margin-bottom: 40px;
`;

export const ReviewH4 = styled.h4`
  color: black;
  margin-bottom: 0.25rem;
  font-size: 30px;
`;

export const PersonTitle = styled.p`
  text-align: center;
  color: gray;
  font-size: 20px;
`;

