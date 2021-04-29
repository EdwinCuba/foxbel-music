import React from 'react';
import Header from '../components/Header'
import NavigationBar from '../components/NavigationBar';
import '../assets/styles/containers/App.scss'

const App = () => {
	return (
		<div className="App">
			<Header />

			<aside>
				<NavigationBar />
			</aside>
		</div>
	)
}

export default App;