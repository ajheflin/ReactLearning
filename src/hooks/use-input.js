import {useState} from "react";

const useInput  = (validationFunction) => {
    const [value, setValue] = useState('');
    const [touched, setTouched] = useState(false);

    const valueValid = validationFunction(value);
    const hasError = !valueValid && touched;

    const valueChangeHandler = (event) => {
        setValue(event.target.value);
    }
    const inputBlurHandler = (event) => {
        setTouched(true);
    }

    const reset = () => {
        setValue('');
        setTouched(false);
    }

    return {
        value,
        valid: valueValid,
        hasError,
        valueChangeHandler,
        inputBlurHandler,
        reset
    }
}

export default useInput;