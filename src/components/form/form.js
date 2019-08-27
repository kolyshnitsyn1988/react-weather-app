import React,{Component} from "react";

import './form.css';

export default class Form extends Component{

	render(){
		return(
			<form onSubmit={this.props.loadWeather}>
				<input type="text" placeholder="Введите город"
						onChange={this.props.inputChange}
						value={this.props.value}
				/>
				<div><button>Получить погоду</button></div>
			</form>
		);
	}
}