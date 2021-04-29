import React from 'react';
import Header from '../components/Header'
import NavigationBar from '../components/NavigationBar';
import MediaDetails from '../components/MediaDetails';
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

			</main>
		</div>
	)
}

export default App;