import React, { FC } from 'react';
import * as S from './style';
import { Exp } from '@/types/skills';

interface Props {
    data: Exp;
}

const Experience: FC<Props> = ({ data }) => {
    const { period, company, experience, description } = data;
    return (
        <S.ExperienceList>
            <S.Period>{period}</S.Period>
            <S.Description>
                <S.Role>{experience}</S.Role>
                <S.Company>{company}</S.Company>
                <S.ExperienceDescription>{description}</S.ExperienceDescription>
            </S.Description>
        </S.ExperienceList>
    );
};

export default Experience;
