import { useState } from 'react';

const useValidation = (validateForm: (value: string) => boolean) => {
    const [value, setValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    const isFieldValid = validateForm(value);

    const inputHasError = isTouched && !isFieldValid;

    return { value, isTouched, setValue, setIsTouched, inputHasError } as const;
};

export default useValidation;
