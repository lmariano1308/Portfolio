import { COLORS, FONTS } from '@/utils/variables';
import styled from 'styled-components';

export const Field = styled.div`
    &:not(:last-of-type) {
        margin-bottom: 2rem;
    }
    & > * {
        display: block;
        text-align: left;
    }
`;

export const FieldLabel = styled.label`
    margin-bottom: 0.5rem;
`;

export const FieldInput = styled.input`
    outline: none;
    resize: none;
    padding: 1rem;
    width: 100%;
    color: ${COLORS.BLACK};
    font-family: ${FONTS.PRIMARY};
`;

export const FieldTextarea = styled.textarea`
    outline: none;
    resize: none;
    padding: 1rem;
    width: 100%;
    color: ${COLORS.BLACK};
    font-family: ${FONTS.PRIMARY};
`;

export const InputError = styled.span`
    color: ${COLORS.ERROR};
    margin-top: 0.5rem;
    text-align: left;
    display: block;
    font-size: 1.4rem;
`;
