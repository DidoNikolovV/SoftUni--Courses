import { useState, useEffect } from "react";
import styles from './Book.module.css';

export const Book = (props) => {
    const [highlighted, setHighlighted] = useState(false);
    const [deleted, setDeleted] = useState(false);

    useEffect(() => {
        console.log('Mounting: ' + props.title);

    }, []);

    useEffect(() => {
        console.log('Updating: ' + props.title);
    }, [highlighted, deleted]);

    const clickHandler = () => {
        setHighlighted(state => !state);
    };

    const deleteHandler = () => {
        setDeleted(true);
    };

    let style = {};
    if (highlighted) {
        style.backgroundColor = 'green';
    }

    if (deleted) {
        return <h2>Deleted</h2>;
    }



    return (
        <li style={style} className={styles['book-item']}>
            <article>
                <h2>{props.title}</h2>
                <div>Price: {props.price}</div>
                <div>Year: {props.year}</div>
                <footer>
                    <button onClick={clickHandler}>Highlight</button>
                    <button onClick={deleteHandler}>Delete</button>
                    <span className={styles.author}>Author: {props.author}</span>
                </footer>
            </article>
        </li>
    );
};