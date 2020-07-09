import React, { useState } from 'react';
import { fetchWeatherData } from './api/fetchWeatherData';
import ParticlesBg from 'particles-bg';
import './App.css';

const App = () => {
	const [ query, setQuery ] = useState('');
	const [ weather, setWeather ] = useState({});
	const searchHandler = async (e) => {
		if (e.key === 'Enter') {
			const data = await fetchWeatherData(query);
			setWeather(data);
			setQuery('');
		}
	};
	
	return (
		<div className='main-container'>
			<ParticlesBg type='cobweb' bg={true} />
			<h1>Search your City Weather</h1>

			<input
				type='text'
				className='search'
				placeholder='search...'
				value={query}
				onChange={(e) => setQuery(e.target.value)}
				onKeyPress={searchHandler}
			/>

			{weather.main && (
				<React.Fragment>
					<div className='city'>
						<h2 className='city-name'>
							<span>{weather.name}</span>
							<sup>{weather.sys.country}</sup>
						</h2>
						<div className='city-temp'>
							{Math.round(weather.main.temp)}
							<sup>&deg; C</sup>
						</div>
						<div className='info'>
							<img
								className='city-icon'
								src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
								alt={weather.weather[0].description}
							/>
							<p>{weather.weather[0].description}</p>
						</div>
					</div>
					<div className='details-list'>
						<ul className='temp'>
							<h1>Temperature</h1>
							<li>Feels Like: {weather.main.feels_like}</li>
							<li>Humidity: {weather.main.humidity}</li>
							<li>Pressure: {weather.main.pressure}</li>
							<li>Temperature: {weather.main.temp}</li>
							<li>Temperature Max: {weather.main.temp_max}</li>
							<li>Temperature Min: {weather.main.temp_min}</li>
						</ul>
						<ul>
							<h1>Wind</h1>
							<li>Degree: {weather.wind.deg}</li>
							<li>Speed: {weather.wind.speed}</li>
						</ul>
						<ul>
							<h1>Coordinates</h1>
							<li>Latitude: {weather.coord.lat}</li>
							<li>Longitude: {weather.coord.lon}</li>
						</ul>
					</div>
				</React.Fragment>
			)}

			{/* <footer className='footer'>
				This App was developed by Md. Sharif Alam
				<a href='https://github.com/Priom7'> GitHub </a>/
				<a href='https://www.linkedin.com/in/md-sharif-alam/'> LinkedIn </a>{' '}
			</footer> */}
		</div>
	);
};

export default App;
