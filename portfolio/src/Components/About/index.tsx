import React, { FC } from 'react';
import * as S from './style';
import { AboutProps } from '../types/about';
import { SanityImage } from '../SanityImage';
import Box from '../UI/Box';

interface Props {
    about: AboutProps;
}

const About: FC<Props> = ({ about }) => {
    const { image, title, text, button, url } = about;
    return (
        <S.About>
            <S.ImageContainer>
                <SanityImage src={image} alt="Foto na empresa Mindtech" />
                <S.BoxContainer>
                    <Box text="Sobre" />
                </S.BoxContainer>
            </S.ImageContainer>
            <S.Content>
                <S.AboutMe>{title}</S.AboutMe>
                {text.map((item, index) => (
                    <S.Biography key={index}>{item.paragraph}</S.Biography>
                ))}
                <S.Link href={url}>{button}</S.Link>
            </S.Content>
        </S.About>
    );
};

export default About;
