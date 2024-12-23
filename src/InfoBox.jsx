import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './InfoBox.css';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
export default function InfoBox({info}){
   let HOT_URL= "https://img.freepik.com/premium-photo/orange-sky-with-sun-clouds-hot-summer-weather_144356-92319.jpg";
   let COLD_URL="https://images.unsplash.com/photo-1672588337559-d2ce3ad82682?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fGNvbGQlMjB3ZWF0aGVyfGVufDB8fDB8fHww";
   let RAIN_URL="https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=sw_CRZcGopaGHDWqtT1M8y64k5uCcq-nro55Bw3YzyQ=";
    return(
        <>
        <div className='cardcontainer'  >
        <Card sx={{ maxWidth: 345 ,borderRadius:"10px" ,backgroundColor:"rgba(0, 0, 0, 0.29) ",color:"white" }} >
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80?RAIN_URL:info.temp>15?HOT_URL:COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}  {info.humidity>80?<ThunderstormIcon/>:info.temp>15?<WbSunnyIcon sx={{ fontSize: 28 }}/>:<AcUnitIcon/>}
        </Typography>
        <Typography variant="body2" sx={{ color: 'white' }} component={"span"}>
          <p>Temprature={info.temp}&deg;C</p>
          <p>Humidity={info.humidity}&deg;C</p>
          <p>Max Temp={info.tempMax}&deg;C</p>
          <p>Min Temp={info.tempMin}&deg;C</p>
          <p>The Weather can be described as <b>{info.weather}</b> and feels like {info.feellike}&deg;C</p>
        </Typography>
      </CardContent>
    </Card>
    </div>
        </>
    );
}