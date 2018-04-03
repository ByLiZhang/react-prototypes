import React from 'react';

const updateTime = () =>{
// export default function updateTime(){
	return ({
		type: 'UPDATE_TIME',
		payload: new Date().toLocaleTimeString()
	});
}

export default updateTime;