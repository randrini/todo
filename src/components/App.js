import React, { Component } from 'react';
import Input from './Input';
import TodoFilters from './TodoFilters';
import TodoLists from './TodoLists';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			todos: ['Hello', 'World', 'Hey', 'Welcome'],
			status: 'active'
		};

		this.removeTodoHandler = this.removeTodoHandler.bind(this);
		this.addTodoHandler = this.addTodoHandler.bind(this);
	}

	/* I'm here */
	removeTodoHandler(todoName) {
		this.setState(currentState => {
			return { todos: currentState.todos.filter(todo => todo !== todoName) };
		});
	}

	addTodoHandler(event) {
		// event.preventDefault();
		// console.log(event.target.value);
		event.key === 'Enter' &&
			this.setState({
				todos: this.state.todos.concat(event.target.value)
			});
	}

	render() {
		return (
			<div>
				<Input value={this.state.todos} onAddTodo={this.addTodoHandler} />
				<TodoLists
					list={this.state.todos}
					onRemoveTodo={this.removeTodoHandler}
				/>
				<TodoFilters />
			</div>
		);
	}
}

export default App;
