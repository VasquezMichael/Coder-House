import React, { useState } from 'react';
import { HStack, Flex, Spacer, Link, Text, Box, Center} from '@chakra-ui/react'
import { GiGooeyDaemon } from "react-icons/gi";
import { 
    FaBars,
    FaHome,
    FaUserAlt,
    FaTshirt,
    FaShoppingCart,
    FaTimes
 } from "react-icons/fa";
import { IconContext } from "react-icons";
import {Container, LogoContainer, Wrapper, Menu, MenuItem, MenuItemLink, MobileIcon } from './Navbar-elements.js'
const Navbar = () => {

    const [showMobileMenu, setShowMobileMenu] = useState(false);
  return (
    <Container>
        <Wrapper>
            <IconContext.Provider value = {{style: {fontSize: "2.2em"}}}>
            <LogoContainer>
                <GiGooeyDaemon/>    
                <p>DripCode</p>
            </LogoContainer>
            <MobileIcon onClick={() => setShowMobileMenu(!showMobileMenu)}>
                {
                    showMobileMenu ? <FaTimes/> : <FaBars/>
                }
            </MobileIcon>
            <Menu open = {showMobileMenu}>
                <MenuItem>
                    <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                        <div>
                            <FaHome/>
                            Home
                        </div>
                    </MenuItemLink>
                </MenuItem>
                <MenuItem>
                    <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                        <div>
                            <FaUserAlt/>
                            About
                        </div> 
                    </MenuItemLink>
                </MenuItem>
                <MenuItem>
                    <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                        <div>
                            <FaTshirt/>
                            Shop
                        </div> 
                    </MenuItemLink>
                </MenuItem>
                <MenuItem>
                    <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                        <div>
                            <FaShoppingCart/>
                            Carrito
                        </div> 
                    </MenuItemLink>
                </MenuItem>
            </Menu>
            </IconContext.Provider>
        </Wrapper>
    </Container>
  )
}

export {Navbar}