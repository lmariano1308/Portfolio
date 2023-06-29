import { COLORS } from '@/utils/variables';
import styled from 'styled-components';

export const Link = styled.a`
    height: 120px;
    flex-shrink: 0;
    writing-mode: vertical-lr;
    font-weight: 200;
    text-decoration: none;
    color: ${COLORS.WHITE};
    display: flex;
    align-items: center;
    justify-content: center;
    border-right: 1px solid ${COLORS.WHITE};
    padding: 1.5rem;
`;
