import { useState, useEffect } from "react";

export const Book = (props) => {
    const [highlighted, setHighlighted] = useState(false);
    const [marked, setMarked] = useState(false);

    useEffect(() => {
        console.log('Mounting: ' + props.title);

    }, []);

    useEffect(() => {
        console.log('Updating: ' + props.title);
    }, [highlighted, marked]);

    const clickHandler = () => {
        setHighlighted(state => !state);
    };

    const deleteHandler = () => {
        setMarked(true);
    };

    let style = {};
    if (highlighted) {
        style.backgroundColor = 'green';
    }

    if (marked) {
        style.backgroundColor = 'red';
    }

    return (
        <li style={style}>
            <article>
                <h2>{props.title}</h2>
                <div>Price: {props.price}</div>
                <div>Year: {props.year}</div>
                <footer>
                    <button onClick={clickHandler}>Highlight</button>
                    <button onClick={deleteHandler}>Delete</button>
                    <span>Author: {props.author}</span>
                </footer>
            </article>
        </li>
    );
};