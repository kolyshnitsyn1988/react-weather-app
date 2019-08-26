import React,{Component} from "react";


import Form from '../form/form';
import Weather from "../weather/weather";
import WeatherService from '../../services/weather-service';
import './app.css';



let city = 'London';
let appId = '887a9e3fcec30ecb5238bc4f492dcf5b';

class App extends React.Component {

	weatherService = new WeatherService(); 

  state = {
    temperature: undefined,
    city: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }
  getDataWeather = async(e) => {
	e.preventDefault();
	let appId = '887a9e3fcec30ecb5238bc4f492dcf5b';
	const city = this.state.city;
	const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appId}&units=metric`);
	const data = await api_call.json();
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
        
        humidity: undefined,
        description: undefined,
        error: "Please enter the values."
      });
    }
	

	}
}

	// getDataWeather = async(e) => {
	// e.preventDefault();
	// let appId = '887a9e3fcec30ecb5238bc4f492dcf5b';
	// const city = this.state.city;
	// const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appId}&units=metric`);
	// const data = await api_call.json();
	// console.log(data);
	// }

  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                
                <div className="col-xs-7 form-container">
					{/* <Form /> */}
                  <Form getWeather={this.getWeather} />
                  <Weather 
				  	temperature={this.state.temperature} 
                    humidity={this.state.humidity}
                    city={this.state.city}
                    description={this.state.description}
                    error={this.state.error} />
                  
				  {/* <Weather viewWeather = {this.getDataWeather}/> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default App;


// import React,{Component} from 'react';
// import Header from '../header/header';
// import Form from '../form/form';
// import Weather from '../weather/weather';
// // import BorderInfo from '../border-info/border-info';

// import './app.css';

// const API_KEY = '887a9e3fcec30ecb5238bc4f492dcf5b';




// export default class App extends Component{

// 	getWeather = async(e) =>{
// 		e.preventDefault();
// 		const city = e.target.elements.city.value;
// 		const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
// 		const data = await api_call.json();
// 		console.log(data);
// 	}
	
// 	render(){
// 		return(
// 			<div className="app">
// 				<Header />
// 				<Form weatherMetod={this.getWeather}/>
// 				<Weather />
				
// 			</div>
			
// 		);
// 	}
// }