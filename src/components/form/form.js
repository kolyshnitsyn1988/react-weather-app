import React,{Component} from "react";
import Weather from "../weather/weather";


let appId = '887a9e3fcec30ecb5238bc4f492dcf5b';

export default class Form extends Component{

	constructor(props) {
		super(props);
		this.state = {
			city: '',
			temp: null
		};
	}

	onInputChange = (e) => {
		this.setState({
			city: e.target.value
		});
		
	}

	getDataWeather = async(e) => {
		e.preventDefault();
		const city = this.state.city;
		const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appId}&units=metric`);
		const data = await api_call.json();
		this.setState({
			city: ''
		})
		console.log(data);
		if (city) {
			this.setState({
			temperature: data.main.temp,
			city: data.name,
			humidity: data.main.humidity,
			description: data.weather[0].description,
			error: ""
			});
		} else {
		this.setState({
			temperature: undefined,
			city: undefined,
			country: undefined,
			humidity: undefined,
			description: undefined,
			error: "Please enter the values."
			});
		}
	}

	

	render(){

		return(
			<form onSubmit={this.getDataWeather}>
				
				<input type="text" placeholder="Введите город"
						onChange={this.onInputChange}
						value={this.state.city}
				/>
				<div><button>Получить погоду</button></div>
				<Weather 
                    temperature={this.state.temperature} 
                    humidity={this.state.humidity}
                    city={this.state.city}
                    country={this.state.country}
                    description={this.state.description}
                    error={this.state.error}/>
			</form>
			
			
 		);
	}
}