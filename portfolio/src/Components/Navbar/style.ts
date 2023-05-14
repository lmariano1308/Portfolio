import { flex_center, max_width } from '@/styles/mixins';
import { COLORS } from '@/utils/variables';
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
`;

export const Logo = styled.a`
    position: absolute;
    top: 0.5rem;
    left: 2rem;
`;

export const Nav = styled.nav``;

export const NavList = styled.ul`
    list-style: none;
`;
