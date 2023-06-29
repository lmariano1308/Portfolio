import React, { FC } from 'react';
import * as S from './style';

interface Props {
    text: string;
    url: string;
    toggleMenu?: () => void;
}

const NavLink: FC<Props> = ({ text, url, toggleMenu }) => {
    return (
        <S.Link href={url} onClick={toggleMenu}>
            {text}
        </S.Link>
    );
};

export default NavLink;
