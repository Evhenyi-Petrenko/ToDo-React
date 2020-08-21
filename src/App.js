import React from 'react';
import Task from "./components/task";
import TaskInput from "./components/taskInput"
import SearchInput from "./components/searchInput"

class App extends React.Component {
	constructor() {
		super();

		this.state = {
			tasks: [
				{id: 0, title: 'Create todo-react app', done: true},
				{id: 1, title: 'Update css', done: false},
				{id: 2, title: 'Add input search', done: false}
			],
			search: ''
		}
	}


	addTask = task => {
		this.setState(state =>{
			let{ tasks } = state;
			tasks.push({
				id: tasks.length !== 0 ? task.length : 0,
				title: task,
				done: false
			});
			return tasks
		});
	};

	doneTask = id => {
		const index = this.state.tasks.map(task => task.id).indexOf(id);
		this.setState(state => {
			let { tasks } = state;
			tasks[index].done = true;
			return tasks;
		})
	};

	deleteTask = id => {
		const index = this.state.tasks.map(task => task.id).indexOf(id);
		this.setState(state => {
			let { tasks } = state;
			delete tasks[index];
			return tasks;
		})
	};

	search = search => {
		this.setState({ search : search })

	};

	render() {
		const {tasks} = this.state;
		const {search} = this.state;
		const activeTask = tasks.filter(task => { return !task.done && task.title.search(search) !== -1});
		const doneTask  = tasks.filter(task => { return task.done && task.title.search(search)!== -1});

		return(
			<div className="App">
				<SearchInput search={this.search}/>
				<h1 className="top"> Active tasks: {activeTask.length}</h1>
				{[...activeTask, ...doneTask].map(task => (
					<Task doneTask={() => this.doneTask(task.id)}
						  deleteTask={() => this.deleteTask(task.id)}
						  task={task}
						  key={task.id}/>
				))}
				<TaskInput addTask={this.addTask}/>
			</div>
		);
	}
}

export default App;
