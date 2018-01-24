import React from 'react';
import AddTodo from './addTodoComponent';

class App extends React.Component {
	
	constructor() {
		super();
		this.addTodo = this.addTodo.bind(this);
		this.state = {
			todoItems: [],
			doneItems: [],
			currentItem: ''
		};
	}
	
	render() {
		return (
			<div>
				<div>
					<h3>TODO List</h3>
					<hr/>
				</div>
				<div>					
					<AddTodo addTodo={this.addTodo}/>
				</div>
				
				<div>
					<div className="column">
						<h3>TODO</h3>

						{
							this.state.todoItems.map((item) => 
								<div key={'div-' + item} className="todoItem">
									<label key={item}>{item}</label>
									<input className="okButton" type="button" value="Ok" />
								</div>
							)
						}
					</div>
					<div className="column">
						<h3>DONE</h3>

						{
							this.state.doneItems.map((item) => 
							<div key={'div-' + item} className="doneItem">
								<label key={item}>{item}</label>
							</div>
						)							
						}
					</div>
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
