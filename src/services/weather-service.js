
let appId = '887a9e3fcec30ecb5238bc4f492dcf5b';
const city = 'London';

export default class WeatherService{

	_apiBase = `https://api.openweathermap.org/data/2.5/weather?q=${city},uk&APPID=${appId}`;
	
	
	async getResource(){
		const res = await fetch(`${this._apiBase}`);

		if (!res.ok)	{
			throw new Error(`запрос не прошел  ` +
			`, received ${res.status}`)
		}
		return await res.json();

		console.log(res);
	};

	// async getTempCity(temp){
	// 	const res = await this.getResource();
	// 	return res.main.temp;
	// }

	async getNameCity(name){
		const res = await this.getResource();
		return res.name;
	}

	async inputCityName(e){
		let appId = '887a9e3fcec30ecb5238bc4f492dcf5b';
		let city = 'London';

		// e.preventDefault();
		// let newCity = e.target.city.value;
		const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appId}&units=metric`);
		const data = await api_call.json();
		console.log(data);
	}

	
	
}

// const c = new WeatherService();

// c.inputCityName().then((body) =>{
// 	console.log(body)
// })

