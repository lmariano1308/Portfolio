import React, { FC } from 'react';
import * as S from './style';

interface Props {
    id: string;
    onChange: (e: string) => void;
    onBlur: (e: boolean) => void;
    hasError: boolean;
    label: string;
    isTextArea?: boolean;
}

const Input: FC<Props> = ({ id, onChange, onBlur, hasError, label, isTextArea = false }) => {
    const commonProps = {
        id,
        name: id,
        onChange: (e: { target: { value: string } }) => onChange(e.target.value),
        onBlur: () => onBlur(true),
    };

    return (
        <S.Field>
            <S.FieldLabel htmlFor={id}>{label}</S.FieldLabel>
            {isTextArea ? (
                <S.FieldTextarea {...commonProps} rows={10} />
            ) : (
                <S.FieldInput type="text" {...commonProps} />
            )}
            {hasError && <S.InputError>Campo incorreto!</S.InputError>}
        </S.Field>
    );
};

export default Input;
