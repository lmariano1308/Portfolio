import React, { FC } from 'react';
import * as S from './style';

interface Props {
    text: string;
}

const NavLink: FC<Props> = ({ text }) => {
    return (
        <S.Item>
            <S.Link href="#">{text}</S.Link>
        </S.Item>
    );
};

export default NavLink;
