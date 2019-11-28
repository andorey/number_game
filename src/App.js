import React from 'react';
import './App.css';

class App extends React.Component {

    state = {
        disabled: false,

    }

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<h1>Guess the Number</h1>
                    <input type="button" 
						   disabled={this.state.disabled} 
						   value={'To Generate a Random Number'} />
					<input type="text"
						   placeholder={'Enter your number'}/>
					<input type="button"
						   disabled={this.state.disabled}
						   value={'Check your number'} />

				</header>
			</div>
		);
	}
}

export default App;
