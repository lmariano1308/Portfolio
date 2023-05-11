import { COLORS } from './../utils/variables';
import { css } from 'styled-components';

export const max_width = css`
    width: 100%;
    max-width: 120rem;
    margin: 0 auto;
    padding: 0 2rem;
`;

export const flex_center = css`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const link_reset = css`
    text-decoration: none;
    border: none;
    outline: none;
    padding: 1.5rem 3rem;
    display: inline-block;
    font-weight: 500;
`;
