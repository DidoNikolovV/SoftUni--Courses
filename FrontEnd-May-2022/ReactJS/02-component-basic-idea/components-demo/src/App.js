import './App.css';
import { Header } from './components/Header';
import { BookList } from './components/BookList';
import { Counter } from './components/Counter';

function App() {

	const books = [
		{ "title": "Northanger Abbey", "author": "Austen, Jane", "year": 1814, "edition": "Penguin", "price": 18.2 },
		{ "title": "War and Peace", "author": "Tolstoy, Leo", "year": 1865, "edition": "Penguin", "price": 12.7 },
		{ "title": "Anna Karenina", "author": "Tolstoy, Leo", "year": 1875, "edition": "Penguin", "price": 13.5 },
		{ "title": "Mrs. Dalloway", "author": "Woolf, Virginia", "year": 1925, "edition": "Harcourt Brace", "price": 25 },
		{ "title": "The Hours", "author": "Cunnningham, Michael", "year": 1999, "edition": "Harcourt Brace", "price": 12.35 },
	];

	return (
		<div className="App">
			<Header>
				<span class="fancy-font">Book</span> Library
			</Header>
			<Counter />
			<BookList books={books}></BookList>

		</div>
	);
}

export default App;
