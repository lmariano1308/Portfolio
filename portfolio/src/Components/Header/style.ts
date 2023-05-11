import { max_width, flex_center } from './../../styles/mixins';
import { COLORS, SIZES } from '@/utils/variables';
import styled, { keyframes } from 'styled-components';
import { LinkedinLogo, InstagramLogo, WhatsappLogo, ArrowDown } from '@phosphor-icons/react';

export const HeaderWrapper = styled.header`
    background-color: ${COLORS.BACKGROUND};
    margin-bottom: calc(${SIZES.MARGIN_BOTTOM} + 7rem);
`;

export const Header = styled.div`
    ${max_width};
    min-height: 100vh;
    position: relative;
`;

export const ImageContainer = styled.div`
    width: 45rem;
    height: 45rem;
    position: absolute;
    top: 50%;
    left: 2rem;
    transform: translateY(-50%);

    &::before {
        content: '';
        display: block;
        width: 60%;
        height: 60%;
        position: absolute;
        top: -0.5rem;
        left: -0.5rem;
        border-top: 0.5rem solid ${COLORS.LIGHTPRIMARY};
        border-left: 0.5rem solid ${COLORS.LIGHTPRIMARY};
    }
`;

export const Content = styled.div`
    max-width: 76rem;
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 50%;
    right: 2rem;
    transform: translateY(-50%);
`;

export const Introduction = styled.span`
    color: ${COLORS.WHITE};
    margin-bottom: 1rem;
`;

export const Title = styled.h1``;

export const Resume = styled.p`
    color: ${COLORS.WHITE};
    align-self: flex-end;
    max-width: 45rem;
`;

export const Social = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 2.5rem;
    padding: 2.5rem;
    background-color: ${COLORS.LIGHTPRIMARY};
    position: fixed;
    top: 4rem;
    right: 2rem;
    z-index: 12;
`;

export const SocialLink = styled.a``;

export const LinkedIn = styled(LinkedinLogo).attrs({
    size: 22,
    color: COLORS.DARKPRIMARY,
})`
    &:hover {
        cursor: pointer;
        scale: 1.2;
    }
`;

export const Instagram = styled(InstagramLogo).attrs({
    size: 22,
    color: COLORS.DARKPRIMARY,
})`
    &:hover {
        cursor: pointer;
        scale: 1.2;
    }
`;

export const Whatsapp = styled(WhatsappLogo).attrs({
    size: 22,
    color: COLORS.DARKPRIMARY,
})`
    &:hover {
        cursor: pointer;
        scale: 1.2;
    }
`;

const upDown = keyframes`
    from {
        transform: translateY(0);
    }
    to {
        transform: translateY(-1rem);
    }
`;

export const Arrow = styled.a`
    ${flex_center};
    width: 9rem;
    height: 9rem;
    border-radius: 50%;
    background-color: ${COLORS.PRIMARY};
    position: absolute;
    bottom: 4rem;
    left: 50%;
    animation: ${upDown} 0.5s infinite alternate;
`;

export const ArrowIcon = styled(ArrowDown).attrs({
    size: 40,
    color: COLORS.DARKPRIMARY,
})`
    &:hover {
        cursor: pointer;
        scale: 1.1;
    }
`;
