import React, { FC } from 'react';
import * as S from './style';
import { ProjectsProps } from '@/types/projects';
import Project from './Project';

interface Props {
    data: ProjectsProps;
}

const Projects: FC<Props> = ({ data }) => {
    const { url, title, button, projects } = data;
    return (
        <S.Projects>
            <S.ProjectsTitle>{title}</S.ProjectsTitle>
            <S.ProjectsList>
                {projects.map(project => (
                    <Project key={project._key} data={project} />
                ))}
            </S.ProjectsList>
            <S.Link href={url}>{button}</S.Link>
        </S.Projects>
    );
};

export default Projects;
