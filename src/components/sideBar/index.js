import React from 'react'
import Logo from "../../images/logoMain.png"
import {
SideBarContainer,
Icon,
CloseIcon,
SideBarWrapper,
SideBarMenu,
SideBarLink,
SideBarRoute,
SideBarBtnWrap,
LogoScroll,
NavLogo
} from "./sideBarElements"

const SideBar = ({isOpen, toggle}) => {

    return (
        <SideBarContainer isOpen={isOpen}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SideBarWrapper >
            <SideBarMenu>
                <SideBarLink to="about" onClick={toggle}>קצת עלינו</SideBarLink>
                <SideBarLink to="discover" onClick={toggle}> על העמותה </SideBarLink>
                <SideBarLink to="services" onClick={toggle}> הסדנאות שלנו</SideBarLink>
                <SideBarLink to="reviews" onClick={toggle}> תגובות חברים</SideBarLink>
            </SideBarMenu>
            
<SideBarBtnWrap>
    <SideBarRoute  to="signup"  onClick={toggle}>להרשמה</SideBarRoute>
</SideBarBtnWrap>
<br />
<SideBarBtnWrap>
<LogoScroll to="home"  onClick={toggle}> <NavLogo  src={Logo} alt="logo" /></LogoScroll>
</SideBarBtnWrap>


            </SideBarWrapper>
            
        </SideBarContainer>
    )
}

export default SideBar
