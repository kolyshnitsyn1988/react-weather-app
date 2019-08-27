import React from "react";

import DataWeather from '../data-weather/data-weather';

import './app.css';

class App extends React.Component {

	render() {
    	return (
			<div className="app">
				<DataWeather />
			</div>
   		);
  	}
};

export default App;

