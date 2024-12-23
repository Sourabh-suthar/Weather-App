import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import './SearchBox.css';
export default function SearchBox({ updateInfo }) {
    let [city, setcity] = useState("");
    let [error, seterror] = useState(false);
    let API_URL = "https://api.openweathermap.org/data/2.5/weather";
    let API_KEY = "90aa6fba0a4b82c8b407b998b5113937";
    let handlechange = (evt) => {
        setcity(evt.target.value);
    }
    let getWeatherInfo = async () => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonrespone = await response.json();
            let result = {
                city: city,
                temp: jsonrespone.main.temp,
                tempMax: jsonrespone.main.temp_max,
                tempMin: jsonrespone.main.temp_min,
                humidity: jsonrespone.main.humidity,
                feellike: jsonrespone.main.feels_like,
                weather: jsonrespone.weather[0].description
            };
            console.log(result);
            return result;
        } catch (err) {
            throw (err);
        }
    }
    let handlesubmit = async (evt) => {
        try {
            evt.preventDefault();
            console.log(city);
            setcity("");
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);
        } catch (err) {
            seterror(true);
        }
    }
    return (
        <>
            <div className="searchbox">
                <form onSubmit={handlesubmit}>
                    <TextField
                        id="outlined-basic"
                        label="City Name"
                        variant="outlined"
                        value={city}
                        onChange={handlechange}
                        required
                        sx={{
                            backgroundColor: 'transparent',
                            borderRadius: '5px',
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderColor: 'white', 
                                },
                                '&:hover fieldset': {
                                    borderColor: 'white', 
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: 'white', 
                                },
                            },
                            '& .MuiInputLabel-root': {
                                color: 'white', 
                            },
                            '& .MuiInputLabel-root.Mui-focused': {
                                color: 'white', 
                            },
                        }}
                    />
                    <br /><br />
                    <Button variant="contained" type="submit" sx={{ borderRadius: "30px", color: "black", backgroundColor: "white" }}>Search</Button>
                    {error && <p style={{ color: "red" }} >No Such Place Exists!</p>}
                </form>
            </div>
        </>
    )
}