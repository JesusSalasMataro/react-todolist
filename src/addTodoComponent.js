import React from 'react';

class AddTodo extends React.Component {
	constructor(props) {
		super(props);
		this.addTodoItem = this.addTodoItem.bind(this);
		this.updateNewTodoItem = this.updateNewTodoItem.bind(this);
		this.state = {
			newTodo: ''
		};
	}
	
	render() {
		return (
			<div className="divAddTodo">
				<input id="inputTodo" type="text" onChange={this.updateNewTodoItem} value={this.state.newTodo}/>
				<input type="button" value="Add TODO" onClick={this.addTodoItem}/>
			</div>
		);
	}
	
	addTodoItem() {
		this.props.addTodo(this.state.newTodo);	
	}
	
	updateNewTodoItem(event) {
		this.setState({
			newTodo: event.target.value
		});	
	}
	
	componentWillReceiveProps() {
		this.setState({
			newTodo: ''
		});
	}
}

export default AddTodo;