import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import { Logo } from '../logo'
import { NavItems } from './navItems';

const NavBarContainer = styled.div`
    min-height: 69px;
    ${tw`
        w-full
        max-w-screen-2xl
        flex
        flex-row
        items-center
        lg:px-12
        justify-between
    `};
`;

const LogoContainer = styled.div``;

export function Navbar() 
{
    return (
        <NavBarContainer>
            <LogoContainer>
                <Logo />
            </LogoContainer>
            <NavItems />
        </NavBarContainer>
    )
}