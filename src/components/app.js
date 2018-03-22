import React from 'react';
import ContactList from './contact_list';

const App = () => {
	return (
		<div className='container'>
			<h1 className='text-center my-2'>Address Book</h1>
			<ContactList/>
		</div>
	)
}

export default App;

