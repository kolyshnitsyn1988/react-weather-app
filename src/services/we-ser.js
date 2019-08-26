


function WeatherService(){

	let appId = '887a9e3fcec30ecb5238bc4f492dcf5b';
	const city = 'London';

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

	// async getNameCity(name){
	// 	const res = await this.getResource();
	// 	return res.name;
	// }

	
}

// const citys = new WeatherService();

// citys.getDataWeather(city).then((body) =>{
// 	console.log(body)
// })

