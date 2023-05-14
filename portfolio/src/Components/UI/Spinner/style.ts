import { COLORS } from '@/utils/variables';
import styled, { keyframes } from 'styled-components';

const spinner = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
`;

export const Spinner = styled.div`
    display: inline-block;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    border: 0.3rem solid ${COLORS.WHITE};
    border-color: ${COLORS.WHITE} transparent ${COLORS.WHITE} transparent;
    animation: ${spinner} 1s linear infinite;
`;
