import React from 'react'
import {SideBarContainer, Icon, CloseIcon, SideBarWrapper, SideBarMenu, SideBarLink, SideBarRoute, SideBarBtnWrap} from "./sideBarElements"

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
            </SideBarMenu>
            
<SideBarBtnWrap>
    <SideBarRoute  to="signup"  onClick={toggle}>להרשמה</SideBarRoute>
</SideBarBtnWrap>
<br />
<SideBarBtnWrap>
    <SideBarRoute  to="home"  onClick={toggle}>Icon</SideBarRoute>
</SideBarBtnWrap>


            </SideBarWrapper>
            
        </SideBarContainer>
    )
}

export default SideBar
