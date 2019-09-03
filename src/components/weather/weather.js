import React from "react";

import './weather.css';

const Weather = (props) => {
	return(

		<div className="weather_info">
			<React.Fragment>
				{
					props.city  && 
					<span className="weather_key"> Location: 
						<span className="weather_value"> { props.city }</span>
					</span>
				}  
			
				<div className="weather_param_wrapp">
					{ 	
						props.temp && 
						<span className="weather_key"> Температура: 
							<span className="weather_value"> { props.temp } &#8451;	</span>
						</span> 
					}

					{ 	
						props.humidity && 
						<span className="weather_key"> Влажность: 
							<span className="weather_value"> { props.humidity } &#37;</span>
						</span> 
					}
				</div>
				
				<div className="weather_param_wrapp_other">
					{ 	
						props.icon && 
						<span className="weather_key"> Погода : 
							<span className="weather__value">
								<img src= {`http://openweathermap.org/img/w/${props.icon}.png`}
									alt="icon"
								/>
							</span>
						</span> 
					}

					{ 	
						props.wind && 
						<span className="weather_key"> Ветер: 
							<span className="weather_value"> { props.wind} м/с</span>
						</span> 
					}
				
				
					{ 
						props.error && 
						<span className="weather_error">{ props.error }</span>  
					}

				</div>	
				

			</React.Fragment>
	 	</div>
	)
	
}

export default Weather;