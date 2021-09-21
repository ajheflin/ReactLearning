import {useReducer} from "react";


const initialInputState = {
    value: '',
    touched: false
};

const inputStateReducer = (state, action) => {
    switch(action.type) {
        case 'INPUT':
            return {value: action.value, touched: state.touched};
        case 'BLUR':
            return {touched: true, value: state.value};
        case 'RESET':
            return {touched: false, value: ''};
        default:
            break;
    }
    return inputStateReducer;
};

const useHomemadeInput = (validator) => {
    const [inputState, dispatch] = useReducer(inputStateReducer, initialInputState);

    const valid = validator(inputState.value);
    const errors = !valid && inputState.touched;

    const updateHandler = (event) => {
        dispatch({type: 'INPUT', value: event.target.value});
    }
    const blurHandler = (event) => {
        dispatch({type: 'BLUR'});
    }
    const reset = () => {
        dispatch({type: 'RESET'});
    }

    return {
        value: inputState.value,
        valid,
        errors,
        updateHandler,
        blurHandler,
        reset
    };

}
export default useHomemadeInput;