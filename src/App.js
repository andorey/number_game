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
					<h2>Guess the Number</h2>
					<div className="wrapper">
                    <input type="button" 
						   disabled={this.state.disabled} 
						   value={'To Generate a Random Number'} />
					<input type="text"
						   placeholder={'Enter your number'}/>
					<input type="button"
						   disabled={this.state.disabled}
						   value={'Check your number'} />
					</div>
					<div className="Display">result guess</div>
				</header>
			</div>
		);
	}
}

export default App;
