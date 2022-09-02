
export const BookList = (props) => {

    const bookElements = props.books.map(book => (
        <li>
            <article>
                <h2>{book.title}</h2>
                <div>Price: {book.price}</div>
                <div>Year: {book.year}</div>
                <footer>
                    <span>Author: {book.author}</span>
                </footer>
            </article>
        </li>
    ));



    return (
        <ul>
            {bookElements}
        </ul>
    );
};