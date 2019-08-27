import React from "react";


import './weather.css';



const Weather = (props) => (
	<div className="weather__info">
	 	{	
	 	props.city && props.country && <p className="weather__key"> Location: 
	 		<span className="weather__value"> { this.props.city }</span>
	 	</p> 
	 	}
		{ 	
			props.temperature && <p className="weather__key"> Температура: 
				<span className="weather__value"> { props.temperature }	</span>
			</p> 
		}
		{ 	
			props.humidity && <p className="weather__key"> Влажность: 
				<span className="weather__value"> { props.humidity } </span>
			</p> 
		}
		{ 	
			props.description && <p className="weather__key"> Условия: 
				<span className="weather__value"> { props.description } </span>
		</p> 
		}
		{ 	
			props.wind && <p className="weather__key"> Ветер: 
				<span className="weather__value"> { props.wind} </span>
		</p> 
		}
	 { 
	 	props.error && <p className="weather__error">{ props.error }</p>  
	 }
	</div>
);

export default Weather;