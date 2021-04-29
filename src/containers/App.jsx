import React from 'react';
import Header from '../components/Header'
import MediaDetails from '../components/MediaDetails';
import SearchResults from '../components/SearchResults';
import Playing from '../components/Playing';
import '../assets/styles/containers/App.scss'

const App = () => {


	return (
		<div className="App">
			<Header />

			<main>
				<MediaDetails />

				<SearchResults />
			</main>

			<Playing />
		</div>
	)
}

export default App;