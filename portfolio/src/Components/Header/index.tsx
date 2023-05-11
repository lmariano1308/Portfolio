import React, { FC } from 'react';
import * as S from './style';
import { useSanityImage } from '@/Hooks/useSanityImage';
import Image from 'next/image';
import { SanityImage } from '../SanityImage';
import { HeaderProps } from '../types/header';

interface Props {
    header: HeaderProps;
}

const Header: FC<Props> = ({ header }) => {
    const { image, name, ocupation, summary } = header;

    return (
        <S.HeaderWrapper>
            <S.Header>
                <S.ImageContainer>
                    <SanityImage src={image} alt="Imagem de Perfil" quality={100} />
                </S.ImageContainer>
                <S.Content>
                    <S.Introduction>Olá 👋 meu nome é {name}. Sou um...</S.Introduction>
                    <S.Title>{ocupation}</S.Title>
                    <S.Resume>{summary}</S.Resume>
                </S.Content>
                <S.Social>
                    <S.SocialLink href="#">
                        <S.LinkedIn />
                    </S.SocialLink>
                    <S.SocialLink href="#">
                        <S.Instagram />
                    </S.SocialLink>
                    <S.SocialLink href="#">
                        <S.Whatsapp />
                    </S.SocialLink>
                </S.Social>
                <S.Arrow href="#">
                    <S.ArrowIcon />
                </S.Arrow>
            </S.Header>
        </S.HeaderWrapper>
    );
};

export default Header;
