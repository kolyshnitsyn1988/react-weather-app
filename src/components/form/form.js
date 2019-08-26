import React,{Component} from "react";


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
	}

	

	render(){

		return(
			<form onSubmit={this.getDataWeather}>
				
				<input type="text" placeholder="Введите город"
						onChange={this.onInputChange}
						value={this.state.city}
				/>
				<div><button>Получить погоду</button></div>
			</form>
			
			
 		);
	}
}