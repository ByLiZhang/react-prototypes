import React from 'react';
import './scrapbook.css';
import puppy1 from './images/puppy1.jpg';

export default props => {
	return(
		<div className='scrapbook-container'>
			<img src={puppy1}/>
		</div>
	);
}