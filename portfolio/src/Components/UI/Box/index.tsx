import React, { FC } from 'react';
import * as S from './style';

interface Props {
    text: string;
}

const Box: FC<Props> = ({ text }) => {
    return (
        <S.Box>
            <S.BoxText>{text}</S.BoxText>
        </S.Box>
    );
};

export default Box;
