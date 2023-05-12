import { link_reset, max_width } from '@/styles/mixins';
import { COLORS, SIZES } from '@/utils/variables';
import styled from 'styled-components';

export const Projects = styled.section`
    ${max_width};
    margin-bottom: ${SIZES.MARGIN_BOTTOM};
    display: flex;
    flex-direction: column;
`;

export const ProjectsTitle = styled.h2`
    position: relative;
    margin-bottom: 3rem;
    align-self: flex-start;
    &::before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        z-index: -1;
        width: 45%;
        height: 70%;
        background-color: ${COLORS.LIGHTPRIMARY};
    }
`;

export const ProjectsList = styled.ul`
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
    gap: 3rem;
`;

export const Link = styled.a`
    ${link_reset};
    background-color: ${COLORS.PRIMARY};
    color: ${COLORS.DARKPRIMARY};
    margin-top: 6rem;
    align-self: center;
    &:hover {
        cursor: pointer;
        background-color: ${COLORS.LIGHTPRIMARY};
        transform: scale(1.05);
        transition: transform 0.5s ease-in-out;
    
`;
