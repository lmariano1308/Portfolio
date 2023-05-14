import { flex_center, max_width } from '@/styles/mixins';
import { COLORS } from '@/utils/variables';
import { List, X } from '@phosphor-icons/react';
import styled from 'styled-components';

export const NavbarWrapper = styled.section`
    background-color: ${COLORS.BACKGROUND};
    position: fixed;
    width: 100%;
    z-index: 10;
`;

export const Navbar = styled.div`
    ${max_width};
    ${flex_center};
    padding: 2.3rem 2rem;
    @media screen and (max-width: 768px) {
        justify-content: space-between;
    }
`;

export const Logo = styled.a`
    position: absolute;
    top: 0.5rem;
    left: 2rem;
    @media screen and (max-width: 768px) {
        position: static;
    }
`;

export const Nav = styled.nav``;

export const NavList = styled.ul`
    list-style: none;
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavbarMobile = styled.div``;

export const NavbarMobileListIcon = styled(List).attrs({
    size: 30,
    color: COLORS.PRIMARY,
})`
    display: none;
    @media screen and (min-width: 768px) {
        display: inline-block;
    }
    &:hover {
        cursor: pointer;
    }
`;

export const NavbarMobileBackground = styled.div<{ $active: boolean }>`
    ${flex_center}
    position: fixed;
    top: 0;
    right: ${({ $active }) => ($active ? '0' : '-100rem')};
    max-width: 35rem;
    width: 100%;
    height: 100vh;
    background-color: ${COLORS.BACKGROUND};
    padding: 2rem;
    transition: all 0.5s ease-in;
`;

export const NavbarMobileNav = styled.nav`
    width: 100%;
`;

export const NavbarMobileList = styled.ul`
    ${flex_center};
    flex-direction: column;
    text-align: center;
    gap: 4rem;

    li {
        margin: 0;
        a {
            font-size: 2rem;
        }
    }
`;

export const NavbarMobileCloseIcon = styled(X).attrs({
    size: 30,
    color: COLORS.PRIMARY,
})`
    display: none;
    @media screen and (min-width: 768px) {
        display: inline-block;
    }
    &:hover {
        cursor: pointer;
    }
    position: absolute;
    top: 2rem;
    left: 2rem;
`;
