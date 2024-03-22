import { useEffect, useState } from 'react';

function useDebounce(value, delay = 5000) {
    const [debouncedvalue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);
        return () => {
            clearTimeout(timer);
        };
    }, [value, delay]);

    return debouncedvalue;
}

export default useDebounce;
