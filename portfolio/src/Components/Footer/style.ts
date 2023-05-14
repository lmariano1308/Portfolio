import { flex_center, link_reset, max_width } from '@/styles/mixins';
import { FONTS } from '@/utils/variables';
import { COLORS } from '@/utils/variables';
import styled from 'styled-components';

export const FooterWrapper = styled.footer`
    background-color: ${COLORS.BACKGROUND};
    scroll-margin-top: 8rem;
`;

export const Footer = styled.div`
    ${max_width};
    ${flex_center};
    flex-direction: column;
    padding-top: 9rem;
    padding-bottom: 2.5rem;
    gap: 6rem;
    text-align: center;
    position: relative;
`;

export const Box = styled.div`
    position: absolute;
    top: -5rem;
    left: 2rem;
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const Title = styled.h2`
    font-size: 5.6rem;
    color: ${COLORS.PRIMARY};
    max-width: 50rem;
`;

export const Form = styled.form`
    width: 100%;
    max-width: 55rem;
    color: ${COLORS.WHITE};
`;

export const Button = styled.button`
    ${link_reset};
    background-color: ${COLORS.PRIMARY};
    color: ${COLORS.DARKPRIMARY};
    margin-top: 3rem;
    width: 100%;
    &:hover {
        cursor: pointer;
        background-color: ${COLORS.LIGHTPRIMARY};
    }
    &:disabled {
        background-color: ${COLORS.GRAY};
        color: ${COLORS.WHITE};
        cursor: default;
    }
`;

export const CopyRight = styled.span`
    font-size: 1.4rem;
    color: rgba(255, 255, 255, 0.5);
`;

export const SuccessMessage = styled.h3`
    font-size: 2.6rem;
    font-weight: 400;
    color: ${COLORS.WHITE};
    text-align: left;
    margin-top: 0.5rem;
`;

export const ErrorMessage = styled.span`
    color: ${COLORS.ERROR};
    margin-top: 0.5rem;
    text-align: left;
    display: block;
    font-size: 1.4rem;
`;
