import React from 'react';
import {Route} from 'react-router-dom';
import Welcome from './welcome';
import Nav from './nav';

const App = () => {
	return(
		<div className='container'>
			<Nav/>
			<Route exact path = "/" component = {Welcome} />
		</div>
	);
}

export default App;

