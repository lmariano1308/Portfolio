import { flex_center, max_width } from '@/styles/mixins';
import { COLORS } from '@/utils/variables';
import { List, X } from '@phosphor-icons/react';
import styled from 'styled-components';

export const Nav = styled.nav`
    background-color: ${COLORS.DARKPRIMARY};
    height: 100vh;
    position: sticky;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: 20;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
`;

export const Logo = styled.a``;
