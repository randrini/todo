import React, { Component } from 'react';

const TodoLists = function(props) {
	const { list, onRemoveTodo } = props;

	return (
		<ul>
			{list.map(todoName => (
				<li key={Math.random()}>
					{todoName}
					<button onClick={() => onRemoveTodo(todoName)}> X</button>
				</li>
			))}
		</ul>
	);
};

export default TodoLists;
