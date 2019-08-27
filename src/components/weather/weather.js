import React from "react";


import './weather.css';



const Weather = (props) => (
	
	
		
		<div className="weather__info">
		
	 	<React.Fragment>
		{
			props.city  && <p className="weather__key"> Location: 
	 		<span className="weather__value"> { props.city }</span>
	 	</p>
		}  
	 	
		{ 	
			props.temp && <p className="weather__key"> Температура: 
				<span className="weather__value"> { props.temp }	</span>
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
			props.icon && <p>
			<img src={`http://openweathermap.org/img/w/${props.icon}.png`}
				alt="weaher icon" /> 
				
			</p> 
		}
		{ 
			props.error && <p className="weather__error">{ props.error }</p>  
		}
		</React.Fragment>
	 	
	</div>
	
	
	
)

export default Weather;