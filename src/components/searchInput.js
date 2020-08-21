import React from 'react';

class searchInput extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			input: ''
		};
	}

	search = () => {
		const {input} = this.state;
		this.props.search(input);
	};
	inputChange = event => {
		this.setState({input: event.target.value});
		this.search();
	};

	render() {
		const {input} = this.state;
		return (
			<div className="search-input">
				<input
					onChange={this.inputChange}
					type="input"
					value={input}/>
				<button onClick={this.search}>Search</button>
			</div>
		)
	}
}


export default searchInput;
