import React, {useState, useEffect} from 'react'
import { FaBars } from "react-icons/fa";
import {animateScroll as scroll} from 'react-scroll'
import Logo from '../../images/logo.jpg'
import {
Nav,
NavContainer,
NavLogo,
MobileIcon,
NavMenu,
NavItem,
NavLinks,
NavBtn,
LogoScroll,
NavBtnLink } from "./navElements"


const NavBar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if(window.scrollY  >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    };

useEffect(() => {
    window.addEventListener('scroll', changeNav)
}, []);


const toggleHome = () => {
    scroll.scrollToTop();
}

    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavContainer>
                <NavBtn>
                        <NavBtnLink to="signup">
                         צור קשר
                        </NavBtnLink>
                    </NavBtn>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks 
                            to="about"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}
                            >
                            קצת עלינו</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="discover"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact='true'
                                    offset={-80}
                            >מה עושים</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="services"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact='true'
                                    offset={-80}
                            >הקורס הקרוב</NavLinks>
                        </NavItem>
                        {/* <NavItem>
                            <NavLinks to="sign"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact='true'
                                    offset={-80}
                            >Sign up</NavLinks>
                        </NavItem> */}
                    </NavMenu>
                    <LogoScroll>
                    <NavLogo to="/" onClick={toggleHome} src={Logo} alt="logo" /></LogoScroll>

                </NavContainer>
            </Nav>
        </>
    )
}

export default NavBar
