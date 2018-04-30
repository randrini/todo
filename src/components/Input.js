import React, { Component } from 'react';

const Input = function({ onAddTodo, value }) {
	return (
		<input
			type="text"
			placeholder="Add a todo"
			defaultValue=""
			onKeyDown={onAddTodo}
		/>
	);
};

export default Input;
