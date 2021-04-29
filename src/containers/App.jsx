import React from 'react';
import Header from '../components/Header'
import NavigationBar from '../components/NavigationBar';
import MediaDetails from '../components/MediaDetails';
import SearchResults from '../components/SearchResults';
import Playing from '../components/Playing';
import '../assets/styles/containers/App.scss'

const App = () => {
	return (
		<div className="App">
			<Header />

			<aside>
				<NavigationBar />
			</aside>

			<main>
				<MediaDetails />

				<SearchResults />
			</main>

			<Playing />
		</div>
	)
}

export default App;