import React, { useState } from 'react'


import { Navbar } from './components/Navbar';
import { RoutesComp } from './components/RoutesComp';
import { Footer } from './components/Footer';

const App = () => {
	const [darkTheme, setDarkTheme] = useState(true);
	return (
		<div className={darkTheme ? 'dark' : ''}>
			<div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen">
				<Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
				<RoutesComp />
				<Footer />
			</div>
		</div>
	)
}

export default App;
