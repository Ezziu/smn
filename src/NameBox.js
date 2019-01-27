import React from 'react';

const NameBox = ({nameChange}) => {
	return (
		<div>
			<input 
				type='text' 
				placeholder='The Name'
				onChange = {nameChange}
			/>
			
			</div>
		);
	}

export default NameBox;