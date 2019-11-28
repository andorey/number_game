import React from 'react';
import './App.css';

class App extends React.Component {

    state = {
        checker: true,
		starter: false,
		num: 0,
		countdown: 120,
		countHid: true
    };

	makeNumber = () => {
		this.setState({
			checker: false,
			num:  Math.ceil(Math.random() * 100),
			countHid: false,
			starter: true
		});
	};

	//setInterval(timer, 1000);


	render() {
		return (
			<div className="App">
				<header className="App-header">
					<h2>Guess the Number</h2>
					<i className="Counter"
						 hidden={this.state.countHid}>
						You have {this.state.countdown} sec.
					</i>
					<div className="wrapper">
                    <input className="Starter"
						   type="button"
						   disabled={this.state.starter}
						   value={'To Generate a Random Number'}
						   onClick={this.makeNumber} />
					<input className="Window"
						   type="number" min="0" max="100"
						   placeholder={'Enter your number'} />
					<input className="Checker"
						   type="button"
						   disabled={this.state.checker}
						   value={'Check your number'} />
					</div>
					<div className="Display">result guess</div>
				</header>
			</div>
		);
	}
}

export default App;
