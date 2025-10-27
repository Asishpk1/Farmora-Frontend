import { useEffect, useState } from 'react';
import adminfarm from '../assets/adminfarm.jpg'
import weatherbg from '../assets/weatherbg.jpg'
import HeaderFarmer from '../Components/HeaderFarmer'


const Weather = () => {

    const [weather, setWeather] = useState(null);
    console.log(weather);
    
    const [dailyForecast, setDailyForecast] = useState([]);
    console.log(dailyForecast);
    

    useEffect(() => {
      fetchWeather()
    }, [])
    

    const fetchWeather = async () => {
      try {
        const user = JSON.parse(sessionStorage.getItem('user'))
        const city = user.place

        // Current weather
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=5b4bee0ba241d092159faf007e166080`
        );
        const data = await res.json();
        setWeather(data);

        // 5-day forecast (3-hour intervals)
        const resForecast = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=5b4bee0ba241d092159faf007e166080`
        );
        const forecastData = await resForecast.json();

        // Group by date → pick 12:00:00 entry
        const dailyMap = {};
        forecastData.list.forEach(slot => {
          const [date, time] = slot.dt_txt.split(" ");
          if (time === "12:00:00" && !dailyMap[date]) {
            dailyMap[date] = slot;
          }
        });

        //Converting to array & limit to 5 days
        const dailyArray = Object.values(dailyMap).slice(0, 5);
        setDailyForecast(dailyArray);

      } catch (err) {
        console.error("Error fetching weather:", err);
      }
    }

  return (
    <>
    <div className='container-fluid'>
        <div className='row'>
            <HeaderFarmer/>
            <div className='col-11 ps-0 pe-5 pt-5'>
                <div className='d-flex justify-content-between align-items-end px-5 pt-5 pb-3' style={{ backgroundImage: `url(${weatherbg})`, borderRadius: '10px',backgroundSize: "contain"}}>
                    <div className='text-light'>
                        <img src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`} alt="" />
                        <h1 className='m-0' style={{fontSize:'70px'}}> {weather && `${Math.round(weather.main.temp)}`}&deg;</h1>
                        <span>{weather?.name}</span>
                    </div>
                    <div className='text-light d-flex flex-column'>
                        <span className='fs-5' style={{fontWeight:'500'}}>{new Date().toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'})}</span>
                        <span className='fs-5' style={{fontWeight:'500'}}>{new Date().toLocaleDateString()}</span>
                    </div>
                </div> <br />
                <div className='row d-flex gap-5 justify-content-between'>
                    <div className='col-3 d-flex flex-column gap-5 '>
                        <div className=' px-4 py-3 shadow d-flex justify-content-around gap-4' style={{backgroundColor:'rgba(219, 239, 226, 1)',borderRadius:'90px', border:'solid 4px rgba(61, 179, 101, 1) '}}>
                        <div className='d-flex flex-column align-items-start justify-content-between'>
                            <div className='d-flex align-items-center gap-2' style={{color:"rgba(61, 179, 101, 1)"}}>
                                <i className="fa-solid fa-droplet fa-2xl"></i>
                                <div className='d-flex flex-column'>
                                    <span>Humidity</span>
                                    <span> {weather?.main.humidity} %</span>
                                </div>
                            </div>
                            <div className='d-flex align-items-center mt-4 gap-2' style={{color:"rgba(61, 179, 101, 1)"}}>
                                <i className="fa-solid fa-wind fa-2xl"></i>
                                <div className='d-flex flex-column'>
                                    <span>Wind</span>
                                    <span> {weather?.wind.speed} m/s </span>
                                </div>
                            </div>
                        </div>
                        <div className='d-flex flex-column align-items-start justify-content-between'>
                            <div className='d-flex align-items-center gap-2' style={{color:"rgba(61, 179, 101, 1)"}}>
                                <i className="fa-solid fa-water fa-2xl"></i>
                                <div className='d-flex flex-column'>
                                    <span>Pressure</span>
                                    <span> {weather?.main.pressure} hPa </span>
                                </div>
                            </div>
                            <div className='d-flex align-items-center mt-4 gap-2' style={{color:"rgba(61, 179, 101, 1)"}}>
                                <i class="fa-solid fa-eye fa-2xl"></i>
                                <div className='d-flex flex-column'>
                                    <span>Visibility</span>
                                    <span>{weather?.visibility/1000} km</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='d-flex flex-column px-5 py-3 shadow' style={{color:'rgba(61, 179, 101, 1)',backgroundColor:'rgba(219, 239, 226, 1)',borderRadius:'20px',border:'solid 4px rgba(61, 179, 101, 1)'}}>
                        <span>Weather Alerts</span>
                        <hr />
                        <span>{weather?.weather[0].description} </span>
                    </div>
                    </div>

                    <div className='col-8 d-flex flex-column shadow mb-5' style={{backgroundColor:'rgba(219, 239, 226, 1)',borderRadius:'80px',border:'solid 4px rgba(61, 179, 101, 1)'}}>
                        {dailyForecast.map((day, index) => (
              <div
                key={index}
                className="d-flex align-items-center justify-content-around text-secondary"
                style={{ borderBottom: 'solid 1px rgba(113, 113, 113, 0.3)' }}
              >
                <img
                  src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                  alt="forecast icon"
                />
                <span>{new Date(day.dt_txt).toLocaleDateString([], { weekday: 'long' })}</span>
                <span>{Math.round(day.main.temp)}°C</span>
                <span>Wind: {day.wind.speed} m/s</span>
                <span>Pressure: {day.main.pressure} hPa</span>
              </div>
            ))}
                        
                        
                    </div>

                </div>
            </div>

        </div>
    </div>
    </>
  )
}

export default Weather