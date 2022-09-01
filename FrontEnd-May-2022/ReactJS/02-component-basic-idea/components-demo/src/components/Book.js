
export const Book = (props) => {
    return (
        <article>
            <h2>{props.title}</h2>
            <div>Price: {props.price}</div>
            <div>Year: {props.year}</div>
            <footer>
                <span>Author: {props.author}</span>
            </footer>
        </article>
    );
};
