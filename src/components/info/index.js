import React from 'react'
import { Button } from '../ButtonElements'
import {
InfoContainer,
InfoWrapper,
InfoRow,
Column1,
TextWrapper,
TopLine,
Heading,
SubTitle,
BtnWrap,
Column2,
ImgWrap,
Img,
ReviewImg,
ReviewH4,
PersonTitle,
ReviewArticle,
ReviewCon,
} from "./infoElements"

const Info = ({
    lightBg,
    id,
    imgStart,
    topLine,
    lightText,
    headline,
    darkText,
    description,
    buttonLabel,
    alt,
    img,
    dark,
    dark2,
    primary,
    to,
    p,
    p2,
    me,
    img2,
    title,
    me2,
    img1,
    title2,
    

}) => {
    return (
        <>
        <InfoContainer lightBg={lightBg} id={id}>
            <InfoWrapper>
                <InfoRow imgStart={imgStart}>
                    <Column1>
                    <TextWrapper>
                        <TopLine>{topLine}</TopLine>
                        <Heading lightText={lightText}>{headline}</Heading>
                        <SubTitle darkText={darkText}>{description}</SubTitle>
                        <SubTitle darkText={darkText}>{p}</SubTitle>
                        <SubTitle darkText={darkText}>{p2}</SubTitle>
                        <BtnWrap>
                            <Button to={to}
                            smooth={true}
                            duration={700}
                            spy={true}
                            exact="true"
                            offset={-80}
                            primary={primary ? 1 : 0}
                            dark={dark ? 1 : 0}
                            dark2={dark2 ? 1 : 0}
                            >{buttonLabel}</Button>
                        </BtnWrap>
                    </TextWrapper>
                    </Column1>
                    <Column2>
                    <ImgWrap>
                    {img2 ? <ReviewArticle >
                        <ReviewCon>
                            <ReviewImg src={img1} alt={'img'}  />
                            <ReviewH4>{me2}</ReviewH4>
                            <PersonTitle >{title2}</PersonTitle>
                            </ReviewCon>
                            <ReviewCon>
                            <ReviewImg src={img2} alt={'img'}  />
                            <ReviewH4>{me}</ReviewH4>
                            <PersonTitle >{title}</PersonTitle>
                        </ReviewCon>
                    </ReviewArticle>:  <Img src={img} alt={alt}/>}
                    </ImgWrap>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
            
        </>
    )
}

export default Info
