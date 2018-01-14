import React from 'react';
import AddTodo from './addTodoComponent';

class App extends React.Component {
	
	constructor() {
		super();
		this.addTodo = this.addTodo.bind(this);
		this.state = {
			items: [],
			currentItem: '',
			newTodo: ''
		};
	}
	
	render() {
		return (
			<div>
				<div>
					<h3>TODO list</h3>
				</div>
				<div>					
					<AddTodo addTodo={this.addTodo} texto={this.state.newTodo}/>
				</div>
				
				<div>
				{
					this.state.items.map((item) => 
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
		let itemList = this.state.items.slice();
		
		if (itemList.indexOf(item) === -1 && item.length > 0) {
			itemList.push(item);		
		}
		
		this.setState({
			items: itemList,
			newTodo: ''	
		});			
	}
}

export default App;
