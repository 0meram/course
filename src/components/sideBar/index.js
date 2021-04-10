import React from 'react'
import Logo from "../../images/logo.jpg"
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
                <SideBarLink to="discover" onClick={toggle}> מה אנחנו עושים</SideBarLink>
                <SideBarLink to="services" onClick={toggle}> הקורסים שלנו</SideBarLink>
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
