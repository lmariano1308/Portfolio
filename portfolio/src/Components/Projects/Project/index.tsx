import React, { FC } from 'react';
import * as S from './style';
import { ProjectProps } from '@/types/projects';
import { SanityImage } from '@/Components/SanityImage';

interface Props {
    data: ProjectProps;
}

const Project: FC<Props> = ({ data }) => {
    const { description, image, technologies, title, url } = data;
    return (
        <S.Project>
            <S.Card href={url}>
                <S.ImageContainer>
                    <S.GitHub />
                    <SanityImage alt={`Imagem do projeto ${title}`} src={image} />
                </S.ImageContainer>
                {technologies.map(technology => (
                    <S.Tecnology key={technology._key}>{technology.technology}</S.Tecnology>
                ))}
                <S.Title>{title}</S.Title>
                <S.Resume>{description}</S.Resume>
            </S.Card>
        </S.Project>
    );
};

export default Project;
