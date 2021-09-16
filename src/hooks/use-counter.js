import {useEffect, useState} from "react";

const useCounter = (operation = '+') => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter((prevCounter) => operation === '+' ? prevCounter + 1 : prevCounter - 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [operation]);

    return counter;
}

export default useCounter;