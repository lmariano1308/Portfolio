import { COLORS } from '@/utils/variables';
import styled from 'styled-components';

export const Item = styled.li`
    display: inline-block;
    &:not(:last-of-type) {
        margin-right: 2rem;
    }
    @media screen and (max-width: 768px) {
        &:not(:last-of-type) {
            margin: 0;
        }
    }
`;

export const Link = styled.a`
    text-decoration: none;
    color: ${COLORS.LIGHTPRIMARY};
    padding: 1rem;
    cursor: pointer;
    &:hover {
        font-weight: 600;
    }
`;
