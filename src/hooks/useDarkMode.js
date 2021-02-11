// import { useState } from 'react';
import useLocalStorage from './useLocalStorage';

const useDarkMode = (initialValues) => {
    const [someValues, setSomeValues] = useLocalStorage(initialValues);

    const toggleMode = e => {
        e.preventDefault();
        // props.setDarkMode(!props.darkMode);
        // e.setDarkMode(!e.darkMode);
        setSomeValues(initialValues)
    };

    return (someValues, toggleMode)
};

export default useDarkMode;