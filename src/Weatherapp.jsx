import React from 'react'
import './Weatherapp.css'
import search_icon from "../../Assets/search.png"
import cloud_icon from "../../Assets/cloud.png"
import clear_icon from "../../Assets/clear.png"
import drizzle_icon from"../../Assets/drizzle.png"
import rain_icon from "../../Assets/rain.png"
import snow_icon from "../../Assets/snow.png"
import wind_icon from "../../Assets/wind.png"
import humidity_icon from "../../Assets/humidity.png"
const Weatherapp = () => {
    let api_key="6413f5d1aab244e5117cf70afd087894";



    const search = async()=>{
        const element=document.getElementsByClassName('cityInput');
        if(element[0].value===""){
            return 0;
        }
        let url=`https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&appid=${api_key}`;

        let response=await fetch(url);
        let data= await response.json();

        const humidity=document.getElementsByClassName('humidity');
        const wind=document.getElementsByClassName('wind_rate');
        const temprature=document.getElementsByClassName('weather-temp');
        const location=document.getElementsByClassName('weather-location');

        

        humidity[0].innerHTML=data.main.humidity;
        wind[0].innerHTML=data.wind.speed;
        temprature[0].innerHTML=data.main.temp;
        location[0].innerHTML=data.name;





    }
  return (
    <div className='container'>
        <div className="top-bar">
            <input type='text' className='cityInput' placeholder='Enter City'></input>
            <div className='search_icon' onClick={()=>search()}>
                <img src={search_icon} alt="" />
            </div>

        </div>
        <div className='weather-image'>
            <img src={cloud_icon}></img>
        </div>
        <div className='weather-temp'>24°C</div>
        <div className='weather-location'>London</div>
        <div className='data-container'>
            <div className='element'>
                <img src={humidity_icon} alt="" className='icon'></img>
                <div className='data'>
                    <div className='humidity'>64%</div>
                    <div className='text'>Humidity</div>

                </div>
            </div>
            <div className='element'>
                <img src={wind_icon} alt="" className='icon'></img>
                <div className='data'>
                    <div className='wind_rate'>64%</div>
                    <div className='text'>Wind Speed</div>

                </div>
            </div>
        </div>


    </div>
  )
}

export default Weatherapp