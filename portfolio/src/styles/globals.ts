import { COLORS, FONTS } from '@/utils/variables';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    font-size: 62.5%;
    scroll-behavior: smooth;
    @media screen and (max-width: 1024px) {
        font-size: 60%;
    }
    
}

body {
    font-size: 1.6rem;
    font-family: ${FONTS.PRIMARY};
}

h1 {
    font-weight: 700;
    font-size: 7.5rem;
    line-height: 7.5rem;
    color: ${COLORS.PRIMARY};
    @media screen and (max-width: 1024px) {
        font-size: 6.5rem;
    }
    @media screen and (max-width: 768px) {
        font-size: 5.5rem;
    }
}

h2 {
    font-size: 4.8rem;
    color: ${COLORS.BACKGROUND};
    font-weight: 500;
}

h3 {
    font-size: 3.6rem;
    color: ${COLORS.BACKGROUND};
    font-weight: 500;
}

h4 {
    font-size: 2.4rem;
    color: ${COLORS.BACKGROUND};
    font-weight: 500;
}

h5 {
    font-size: 2.1rem;
    color: ${COLORS.BLACK};
    font-weight: 500;
}

h6 {
    font-size: 1.6rem;
    color: ${COLORS.BLACK};
    font-weight: 500;
}

p {
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 2.5rem;
    color: ${COLORS.BLACK};

    &:not(:last-of-type) {
        margin-bottom: 1.5rem;
    }
}

    `;
