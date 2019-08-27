import React, { Component } from 'react';

import Form from '../form/form';
import Weather from '../weather/weather';

let appId = '887a9e3fcec30ecb5238bc4f492dcf5b';

export default class DataWeather extends Component {
	constructor(props){
		super(props);
		this.state={
			temp: null,
			city: null,
			humidity: null,
			description: null,
			wind: null,
			icon: null,
			error: null
		};
	};
	
	onInputChange = (e) => {
		this.setState({
			city: e.target.value
		});
		
	};

	getDataWeather = async(e) => {
		e.preventDefault();
		const city = this.state.city;
		const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appId}&units=metric`);
		const response = await api_call.json();
		if (city) {
			this.setState({
				temp: response.main.temp,
				city: response.name,
				humidity: response.main.humidity,
				description: response.weather[0].description,
				wind: response.wind.speed,
				icon: response.weather[0].icon,
				error: ""
			});
		} else {
			this.setState({
				error: "Данные не введены , введите город"
			});
		}
	};

	render() {
		return (
			<div>
				<div className="form-container">
                	<Form
						loadWeather={this.getDataWeather} 
				  		inputChange={this.onInputChange}
					/>
                  <Weather 
                    temp={this.state.temp} 
                    humidity={this.state.humidity}
                    city={this.state.city}
                    description={this.state.description}
					wind={this.state.wind}
					icon={this.state.icon}
                    error={this.state.error}
                  />
                </div>
			</div>
		)
	}
}
