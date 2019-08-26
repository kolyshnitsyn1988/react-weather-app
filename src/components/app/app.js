import React,{Component} from "react";


import Form from '../form/form';
import Weather from "../weather/weather";

import './app.css';



let city = 'London';
let appId = '887a9e3fcec30ecb5238bc4f492dcf5b';

class App extends React.Component {



  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                
                <div className="col-xs-7 form-container">
				<Form />
				<Weather />
				  
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