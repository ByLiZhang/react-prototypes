import React from 'react';

const Table = (props) => {
	const tableRows = props.data.map(
		(item, index) => {
			// console.log(item);
			return (
				<tr key={index}>
					<td>{item.student}</td>
					<td>{item.course}</td>
					<td>{item.grade}</td>
				</tr>
			);
		}
	);
	// console.log(tableRows);
	return (
		<table className='table'>
			<thead className='thead-inverse'>
				<tr>
					<th>Name</th>
					<th>Course</th>
					<th>Grade</th>
				</tr>
			</thead>
			<tbody>
				{tableRows}
				{/*<tr>
					<td>Lv Bu</td>
					<td>Archery</td>
					<td>100</td>
				</tr>
				<tr>
					<td>Zhang Fei</td>
					<td>War cry</td>
					<td>99</td>
				</tr>
				<tr>
					<td>Zhu Geliang</td>
					<td>Tactics</td>
					<td>120</td>
				</tr>*/}
			</tbody>
		</table>
	);
}

export default Table;