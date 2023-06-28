import { flex_center } from '@/styles/mixins';
import { COLORS } from '@/utils/variables';
import styled from 'styled-components';

export const Box = styled.div`
    background-color: ${COLORS.LIGHTPRIMARY};
    padding: 3rem;
    max-width: 7rem;
    ${flex_center};
`;

export const BoxText = styled.h5`
    text-transform: uppercase;
    color: ${COLORS.WHITE};
    writing-mode: vertical-rl;
    text-orientation: upright;
`;
