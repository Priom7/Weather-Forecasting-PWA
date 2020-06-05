import React, { useState } from 'react'
import { fetchWeatherData } from "./api/fetchWeatherData"
import ParticlesBg from 'particles-bg'
import './App.css'

const App =() => {
    const [query, setQuery] = useState('')
    const [weather, setWeather] = useState ({})
    const searchHandler = async(e) => {
        if(e.key === "Enter"){
            const data = await fetchWeatherData(query)
            setWeather(data)
            setQuery('')
        }
    }
    return(
        <div className="main-container">
        <ParticlesBg type="polygon" bg={true} />
        <h1>Search your City Weather</h1>

        <input
        type = 'text'
        className="search"
        placeholder = 'search...'
        value = {query}
        onChange= {(e)=>setQuery(e.target.value)}
        onKeyPress ={searchHandler}>
        </input>

        {weather.main && (
            <div className='city'>
            <h2 className="city-name">
                <span>{weather.name}</span>
                <sup>{weather.sys.country}</sup>
            </h2>
            <div className="city-temp">
                {Math.round(weather.main.temp)}
                <sup>&deg; C</sup>
            </div>
            <div className="info">
                <img className="city-icon" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description}></img>
                <p>{weather.weather[0].description}</p>
            </div>

            </div>

        )}

        <footer className="footer">This App was developed by Md. Sharif Alam 
        <a href="https://github.com/Priom7"> GitHub </a>/ 
        <a href="https://www.linkedin.com/in/md-sharif-alam/"> LinkedIn </a> </footer>
        
        </div>
        
    )
}

export default App