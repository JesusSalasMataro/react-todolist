import React from 'react';
import AddTodo from './addTodoComponent';

class App extends React.Component {
	
	constructor() {
		super();
		this.addTodo = this.addTodo.bind(this);
		this.state = {
			todoItems: [],
			currentItem: ''
		};
	}
	
	render() {
		return (
			<div>
				<div>
					<h3>TODO list</h3>
				</div>
				<div>					
					<AddTodo addTodo={this.addTodo}/>
				</div>
				
				<div>
				{
					this.state.todoItems.map((item) => 
						<div key={'div-' + item} className="todoItem">
							<label key={item}>{item}</label>
						</div>
					)
				}
				</div>
				
			</div>
		)
	}
	
	addTodo(item) {
		let todoItemsArray = this.state.todoItems.slice();
		
		if (todoItemsArray.indexOf(item) === -1 && item.length > 0) {
			todoItemsArray.push(item);		
		}
		
		this.setState({
			todoItems: todoItemsArray
		});			
	}
}

export default App;
