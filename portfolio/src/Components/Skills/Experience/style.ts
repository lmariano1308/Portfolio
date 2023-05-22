import { COLORS } from '@/utils/variables';
import styled from 'styled-components';

export const ExperienceList = styled.li`
    display: flex;
    border-top: 1px solid ${COLORS.DARKPRIMARY};
    padding: 4rem 0;
`;

export const Period = styled.div`
    min-width: 12rem;
    margin-top: 0.4rem;
`;

export const Description = styled.div`
    margin-left: 4rem;
`;

export const Role = styled.h4`
    margin-bottom: 1rem;
`;

export const Company = styled.h5`
    font-size: 1.8rem;
    font-weight: 500;
    margin-bottom: 0.4rem;
`;

export const ExperienceDescription = styled.h6`
    font-size: 1.6rem;
    font-weight: 400;
`;
