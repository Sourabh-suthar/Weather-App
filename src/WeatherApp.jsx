import SearchBox from "./SearchBox"
import InfoBox from "./infoBox"
import { useState } from 'react'

export default function WeatherApp(){
    const [WeatherInfo,setWeatherInfo] =useState({
        city:"Delhi",
        feellike:33.86,
        humidity:40,
        temp:33.05,
        tempMax:33.05,
        tempMin:33.05,
        weather:"Haze"
    })
    const UpdateInfo=(newInfo)=>{
        setWeatherInfo(newInfo);
    }
    return(
        <>
        <h1>Weather App</h1>
        <SearchBox updateInfo={UpdateInfo} />
        <InfoBox info={WeatherInfo}/>
        </>
    )
}