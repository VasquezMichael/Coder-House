import React from 'react'
import { HStack, Flex, Spacer, Link, Text, Box, Center} from '@chakra-ui/react'
import { GiGooeyDaemon } from "react-icons/gi";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons";
import {Container, LogoContainer, Wrapper, Menu, MenuItem, MenuItemLink, MobileIcon } from './Navbar-elements.js'
const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <IconContext.Provider value = {{style: {fontSize: "2.2em"}}}>
            <LogoContainer>
                <GiGooeyDaemon/>    
                <p>DripCode</p>
            </LogoContainer>
            <MobileIcon>
                <FaBars/>
            </MobileIcon>
            <Menu>
                <MenuItem>
                    <MenuItemLink>
                        Home
                    </MenuItemLink>
                </MenuItem>
                <MenuItem>
                    <MenuItemLink>
                        About 
                    </MenuItemLink>
                </MenuItem>
                <MenuItem>
                    <MenuItemLink>
                        Shop
                    </MenuItemLink>
                </MenuItem>
                <MenuItem>
                    <MenuItemLink>
                        Carrito
                    </MenuItemLink>
                </MenuItem>
            </Menu>
            </IconContext.Provider>
        </Wrapper>
    </Container>
  )
}

export {Navbar}