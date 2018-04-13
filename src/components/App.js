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
	}

  /* I'm here */
	removeTodoHandler(todoName) {
    this.setState(currentState =>  {
			return todos: currentState.filter(todo => todo !== todoName)
    };
	}

	render() {
		return (
			<div>
				<Input />
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
