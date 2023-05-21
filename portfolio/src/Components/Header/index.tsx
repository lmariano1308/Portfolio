import React, { FC } from 'react';
import * as S from './style';
import { useSanityImage } from '@/Hooks/useSanityImage';
import Image from 'next/image';
import { SanityImage } from '../SanityImage';
import { HeaderProps } from '../../types/header';
import { SocialProps } from '@/types/social';

interface Props {
    data: HeaderProps;
    socialData: SocialProps;
}

const Header: FC<Props> = ({ data, socialData }) => {
    const { linkedin, instagram, whatsapp } = socialData;
    const { image, name, ocupation, summary } = data;
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
                    <S.SocialLink href={linkedin}>
                        <S.LinkedIn />
                    </S.SocialLink>
                    <S.SocialLink href={instagram}>
                        <S.Instagram />
                    </S.SocialLink>
                    <S.SocialLink href={whatsapp}>
                        <S.Whatsapp />
                    </S.SocialLink>
                </S.Social>
                <S.Arrow href="#about">
                    <S.ArrowIcon />
                </S.Arrow>
            </S.Header>
        </S.HeaderWrapper>
    );
};

export default Header;
