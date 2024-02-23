import React from 'react'
import axios from 'axios'
import { useState } from 'react'
const Weather = () => {
    const [city, setCity] = useState("")
    const [weatherData, setWeatherData] = useState(null);
    console.log(city)
    const handleSubmit = async (e) => {
        e.preventDefault();
     const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=86dcb980a68aa69ff780670f4b1f3687&units=metric`)
     setWeatherData(res.data);
    }
  return (
    <>
    <form onSubmit={handleSubmit}>
    <div className="flex flex-col gap-6 md:w-1/3 w-2/3 mx-auto mt-[10%] md:mt-[5%]">
        <h1 className='text-3xl font-bold text-blue-600'>Get Your city Weather in real Time</h1>
        <input onChange={(e) => setCity(e.target.value)} className='border-2 rounded-sm' type="text" name="" id="" />
        <button type="submit" className='bg-blue-600 text-white p-2 rounded-lg'>Get Weather</button>
    </div>
    </form>
     {weatherData && (
        <div className="flex flex-col gap-2 md:w-1/3 w-2/3 mx-auto mt-[10%] md:mt-[5%] items-center">
            <h2 className="text-xl text-blue-600 font-semibold">Weather Details for {weatherData.name}, {weatherData.sys.country}</h2>
            <p className='font-bold'>Temperature: {weatherData.main.temp}°C</p>
            <p className='font-bold'>Min Temperature: {weatherData.main.temp_min}°C</p>
            <p className='font-bold'>Max Temperature: {weatherData.main.temp_max}°C</p>
            <p className='font-bold'>Humidity: {weatherData.main.humidity}%</p>
            <p className='font-bold'>Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString()}</p>
            <p className='font-bold'>Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString()}</p>
        </div>
    )}
    </>
  )
}

export default Weather