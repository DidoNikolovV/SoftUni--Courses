import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { Search } from './components/search/Search';
import { UserSection } from './user-section/UserSection';
import './App.css';

function App() {
	return (
		<div>
			<Header />

			<main className="main">
				<section className="card users-container">
					<Search />
					<UserSection />rS
				</section>
			</main>

			<Footer />
		</div>
	);
}

export default App;
