import { link_reset, max_width } from '@/styles/mixins';
import { SIZES } from '@/utils/variables';
import { COLORS } from '@/utils/variables';
import styled from 'styled-components';

export const About = styled.section`
    ${max_width};
    margin-bottom: ${SIZES.MARGIN_BOTTOM};
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const ImageContainer = styled.div`
    width: 47rem;
    height: 43rem;
    position: relative;
`;

export const Content = styled.div`
    width: 100%;
    max-width: 60rem;
`;

export const AboutMe = styled.h2``;

export const Biography = styled.p``;

export const Link = styled.a`
    ${link_reset};
    background-color: ${COLORS.PRIMARY};
    color: ${COLORS.DARKPRIMARY};
    margin-top: 1.5rem;
    &:hover {
        cursor: pointer;
        background-color: ${COLORS.LIGHTPRIMARY};
    }
`;

export const BoxContainer = styled.div`
    position: absolute;
    top: -7rem;
    left: -3rem;
`;
