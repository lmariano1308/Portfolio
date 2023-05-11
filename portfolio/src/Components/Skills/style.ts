import { max_width } from '@/styles/mixins';
import { COLORS, SIZES } from '@/utils/variables';
import styled from 'styled-components';

export const Section = styled.section`
    ${max_width};
    margin-bottom: ${SIZES.MARGIN_BOTTOM};
    display: flex;
    justify-content: space-between;
    gap: 6rem;

    ul {
        list-style: none;
    }
`;

export const Skills = styled.div`
    width: 100%;
    max-width: 47rem;
`;

export const Heading = styled.div`
    margin-bottom: 3rem;
`;

export const Title = styled.h2`
    margin-bottom: 1.5rem;
    position: relative;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        width: 45%;
        height: 70%;
        background-color: ${COLORS.LIGHTPRIMARY};
    }
`;

export const SubTitle = styled.p``;

export const Content = styled.div``;

export const SkillTitle = styled.h3`
    margin-bottom: 1.5rem;
`;

export const SkillList = styled.ul``;

export const Skill = styled.li`
    background-color: ${COLORS.PRIMARY};
    color: ${COLORS.DARKPRIMARY};
    text-transform: uppercase;
    text-align: right;
    padding: 2.5rem;
    &:not(:last-of-type) {
        margin-bottom: 1.5rem;
    }
    font-size: 2.1rem;
    font-weight: 500;
`;

export const Experiencies = styled.div`
    width: 100%;
    max-width: 60rem;
`;

export const ExperiencieTitle = styled(SkillTitle)``;

export const ExperiencieList = styled(SkillList)``;
