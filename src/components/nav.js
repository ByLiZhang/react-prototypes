import React from 'react';
import {Link} from 'react-router-dom';

export default props => {
	return(
		<ul className='nav nav-tabs mt-3'>
			<li className='nav-item row'>
				<Link to='/' className='nav-link'>Welcome</Link>
				<Link to='/our_macarons' className='nav-link'>Our Macarons</Link>
			</li>
		</ul>
	);
}