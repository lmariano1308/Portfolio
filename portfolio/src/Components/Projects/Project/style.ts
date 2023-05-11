import { link_reset } from '@/styles/mixins';
import { COLORS } from '@/utils/variables';
import styled from 'styled-components';

export const Project = styled.li`
    cursor: pointer;
`;

export const Card = styled.a`
    text-decoration: none;
`;

export const ImageContainer = styled.div`
    width: 100%;
    height: 20rem;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    margin-bottom: 1.5rem;
    overflow: hidden;
    position: relative;
`;

export const Tecnology = styled.span`
    color: ${COLORS.DARKPRIMARY};
    font-weight: 500;
    font-size: 1.4rem;
    display: inline-block;
    margin-bottom: 1rem;

    &:not(:last-of-type) {
        margin-right: 1rem;

        &::after {
            content: '';
            display: inline-block;
            width: 0.5rem;
            height: 0.5rem;
            border-radius: 50%;
            background-color: ${COLORS.DARKPRIMARY};
            margin-left: 1rem;
            margin-bottom: 0.25rem;
        }
    }
`;

export const Title = styled.h5`
    margin-bottom: 1rem;
`;

export const Resume = styled.p``;
