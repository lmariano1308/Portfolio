import React, { FC } from 'react';
import * as S from './style';
import Exp from './Experience';
import { SkillsProps } from '../../types/skills';
import Experience from './Experience';

interface Props {
    data: SkillsProps;
}

const Skills: FC<Props> = ({ data }) => {
    const { experience, experience_title, skills_list, skills_title, subtitle, title } = data;

    const renderSkills = skills_list.map(skill => <S.Skill key={skill._key}>{skill.skill}</S.Skill>);

    const renderExperience = experience.map(exp => <Experience key={exp._key} data={exp} />);

    return (
        <S.Section>
            <S.Skills>
                <S.Heading>
                    <S.Title>{title}</S.Title>
                    <S.SubTitle>{subtitle}</S.SubTitle>
                </S.Heading>
                <S.ExperiencieTitle>{experience_title}</S.ExperiencieTitle>
                <S.ExperiencieList>{renderExperience}</S.ExperiencieList>
            </S.Skills>
            <S.Experiencies>
                <S.Content>
                    <S.SkillTitle>{skills_title}</S.SkillTitle>
                    <S.SkillList>{renderSkills}</S.SkillList>
                </S.Content>
            </S.Experiencies>
        </S.Section>
    );
};

export default Skills;
