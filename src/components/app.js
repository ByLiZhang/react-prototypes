import React from 'react';
import {Route} from 'react-router-dom';
import Welcome from './welcome';

const App = () => {
	return(
		<div className='container'>
			<h1>test</h1>
			<Route exact path = "/" component = {Welcome} />
		</div>
	);
}

export default App;

