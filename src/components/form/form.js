import React,{Component} from "react";
import WeatherService from '../../services/weather-service';

let appId = '887a9e3fcec30ecb5238bc4f492dcf5b';

export default class Form extends Component{

	weatherService = new WeatherService(); 

	constructor(props) {
		super(props);
		this.state = {
			city: '' 
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
		console.log(data);
	}


	render(){
		return(
			<form onSubmit={this.getDataWeather}>
				
				<input type="text" placeholder="Введите город"
						onChange={this.onInputChange}
				/>
				<button>Получить погоду</button>
			</form>
			
		)
	}
}