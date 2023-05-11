import React, { FC } from 'react';
import * as S from './style';
import { Exp } from '@/Components/types/skills';

interface Props {
    data: Exp;
}

const Experience: FC<Props> = ({ data }) => {
    const { period, company, experience } = data;
    return (
        <S.ExperienceList>
            <S.Period>{period}</S.Period>
            <S.Description>
                <S.Role>{experience}</S.Role>
                <S.Company>{company}</S.Company>
            </S.Description>
        </S.ExperienceList>
    );
};

export default Experience;
