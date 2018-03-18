import React from 'react';
import Table from './table';

const App = (props) =>{ 
	const students = [
		{
			student: 'Zhao Yun',
			course: 'Rescue',
			grade: '100'
		},
		{
			student: 'Liao Hua',
			course: 'Scouting',
			grade: '60'
		},
		{
			student: 'Zhou Yu',
			course: 'Jealousy',
			grade: '90'	
		}
	];
	return (
		<div className='container'>
			<h1>Student Grade Table</h1>
			<Table data={students}/>
		</div>
	);
};

export default App;