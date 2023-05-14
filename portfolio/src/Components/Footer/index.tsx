import React, { FC, useState } from 'react';
import * as S from './style';
import Box from '../UI/Box';
import useValidation from '@/Hooks/useValidation';
import Input from '../UI/Input';
import Spinner from '../UI/Spinner';
import { FooterProps } from '@/types/footer';
import client from '@/sanity';

interface Props {
    data: FooterProps;
}

const Footer: FC<Props> = ({ data }) => {
    const { title, copyright } = data;
    const [isLoading, setIsLoading] = useState(false);
    const [isDataSent, setIsDataSent] = useState(false);
    const [hasError, setHasError] = useState(false);

    const {
        value: name,
        isTouched: isNameTouched,
        setValue: setName,
        setIsTouched: setIsNameTouched,
        inputHasError: nameHasError,
    } = useValidation(value => value !== '');
    const {
        value: email,
        isTouched: isEmailTouched,
        setValue: setEmail,
        setIsTouched: setIsEmailTouched,
        inputHasError: emailHasError,
    } = useValidation(value => value.includes('@') && value.includes('.') && value !== '');
    const {
        value: message,
        isTouched: isMessageTouched,
        setValue: setMessage,
        setIsTouched: setIsMessageTouched,
        inputHasError: messageHasError,
    } = useValidation(value => value.length > 0 && value !== '');

    const isFormTouched = isNameTouched && isEmailTouched && isMessageTouched;

    const isFormValid = !nameHasError && !emailHasError && !messageHasError && isFormTouched && !isLoading;

    const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setIsLoading(true);

        const contactData = {
            _type: 'contact',
            name,
            email,
            message,
        };
        try {
            await client.create(contactData);
            setIsLoading(false);
            setIsDataSent(true);
        } catch (error) {
            setIsLoading(false);
            setHasError(true);
        }
    };

    return (
        <S.FooterWrapper id="footer">
            <S.Footer>
                <S.Box>
                    <Box text="Contato" />
                </S.Box>
                <S.Title>{title}</S.Title>
                {!isDataSent ? (
                    <S.Form onSubmit={submitForm}>
                        <Input
                            id="name"
                            onChange={setName}
                            onBlur={setIsNameTouched}
                            hasError={nameHasError}
                            label="Qual seu nome?"
                        />
                        <Input
                            id="email"
                            onChange={setEmail}
                            onBlur={setIsEmailTouched}
                            hasError={emailHasError}
                            label="E seu email?"
                        />
                        <Input
                            id="message"
                            onChange={setMessage}
                            onBlur={setIsMessageTouched}
                            hasError={messageHasError}
                            label="Mensagem"
                            isTextArea
                        />
                        <S.Button disabled={!isFormValid}>{isLoading ? <Spinner /> : 'Enviar'}</S.Button>
                        {hasError && <S.ErrorMessage>Erro ao enviar mensagem.</S.ErrorMessage>}
                    </S.Form>
                ) : (
                    <S.SuccessMessage>Obrigado por entrar em contato!</S.SuccessMessage>
                )}
                <S.CopyRight>{copyright}</S.CopyRight>
            </S.Footer>
        </S.FooterWrapper>
    );
};

export default Footer;
