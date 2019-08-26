import React,{Component} from "react";

import WeatherService from '../../services/weather-service';
import './weather.css';

export default class Weather extends Component{


// 	weatherService = new WeatherService(); 
	
// 	constructor(props){
// 		super(props);
// 			this.state = {
// 				temp: null,
// 				humidity: null,
// 				city: null,
// 				description: null,
// 				wind: null,
// 				error: null
				
// 			}
		
// 	}

	
// 	async getNameCity(name){
// 		const res = await this.getResource();
// 		return res.name;
// 	}

// 	updateWeather(props){
// 		this.getWeather()
// 			.then((data) => { 
// 				this.setState({
// 					temp: data.main.temp,
// 					city: data.name,
// 					humidity: data.main.humidity,
// 					description: data.weather[0].description,
// 					error: ""
					
// 				})
// 			});
// 	}


// 	render(){

// 		const {temp,humidity,city,description,wind,error} = this.state;

// 		return(
// 			<ul className="country_list">
// 				<li>
// 					<span className="item">Country Name</span>
// 					<span className="item_data">{temp} </span>
// 				</li>
// 				<li>
// 					<span className="item">Capital</span>
// 					<span className="item_data">{humidity}</span>
// 				</li>
// 				<li>
// 					<span className="item">Population</span>
// 					<span className="item_data">{city}</span>
// 				</li>
// 				<li>
// 					<span className="item">Area</span>
// 					<span className="item_data">{description}</span>
// 				</li>
// 				<li>
// 					<span className="item">Area</span>
// 					<span className="item_data">{wind}</span>
// 				</li>
// 				<li>
// 					<span className="item">Area</span>
// 					<span className="item_data">{error}</span>
// 				</li>
// 			</ul>
// 		);
// 	}
// }

const Weather = props => (
	<div className="weather__info">
	 {	
	 	props.city && props.country && <p className="weather__key"> Location: 
	 		<span className="weather__value"> { props.city }, { props.country }</span>
	 	</p> 
	 }
	 { 	
	 	props.temperature && <p className="weather__key"> Temperature: 
	 		<span className="weather__value"> { props.temperature }	</span>
	 	</p> 
	 }
	 { 	
	 	props.humidity && <p className="weather__key"> Humidity: 
	 		<span className="weather__value"> { props.humidity } </span>
	 	</p> 
	 }
	 { 	
	 	props.description && <p className="weather__key"> Conditions: 
	 		<span className="weather__value"> { props.description } </span>
	 </p> 
	 }
	 { 
	 	props.error && <p className="weather__error">{ props.error }</p>  
	 }
	</div>
);

export default Weather;