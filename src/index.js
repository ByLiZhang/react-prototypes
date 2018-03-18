import React from 'react';
import ReactDOM from 'react-dom';
function luckyNumber() {
	return Math.ceil(Math.random()*1000);
}
const user = {
	name: 'Ukyo',
	luckyNumber: luckyNumber()
}
function greeting(user) {
	const element = (
		<div className='container'>
			<h1>Welcome {user.name}</h1>
			<h2 className='text-muted'>You lucky number is {user.luckyNumber}</h2>
		</div>
	);
	return element;
}

ReactDOM.render(
    greeting(user),
    document.getElementById('root')
);
