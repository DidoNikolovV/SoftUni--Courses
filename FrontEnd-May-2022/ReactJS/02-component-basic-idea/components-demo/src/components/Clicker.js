import { useState } from 'react';

export const Clicker = () => {
    const [clicks, setClicks] = useState(0);

    const clickHandler = (e) => {
        setClicks(oldClicks => oldClicks + 1);
    };

    return (
        <button onClick={clickHandler}>{clicks}</button>
    );
};