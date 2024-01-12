import React, { useEffect, useState } from 'react'
import "./Home.css"
import axios from 'axios'

const Home = () => {
 
    const [loading,setLoading]=useState(false);
    const a=0;
    const fetchData =async()=>{
        try{
            setLoading(true);
            const response= await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=471fb94ff0e574a226bea4957cfaff4c`);
          
            const data= response.data;
            setTemperature(data.main.temp.toFixed());
            setDesc(data.weather[0].main);
            setMin(data.main.temp_min.toFixed());
            setMax(data.main.temp_max.toFixed());
            setName(data.name);
            setFeel(data.main.feels_like.toFixed());
            setHumidity(data.main.humidity);
            setwind(data.wind.speed.toFixed());
            setVisibilty(data.visibility);
        }
        catch(e){
           alert("Please Enter Correct City")
        }
    }
    useEffect(()=>{
        (async () => {
            await fetchData();
        })();
},[a])
    const [location, setLocation] = useState("Jaipur");
   
    const [temperature,setTemperature]=useState();
    const [desc,setDesc]=useState("");
    const [min,setMin]=useState();
    const [max,setMax]=useState();
    const [name,setName]=useState("New Delhi");
    const[feel,setFeel]=useState("");
    const [humidity,setHumidity] =useState("");
    const [wind,setwind]=useState(" ");
    const [visibility,setVisibilty]=useState("")
 
  
    const search = (e) => {
     
        if (e.key==="Enter"){
            fetchData();
           
        }
      

    }
    return (
        <div>
            <div className="header">
                <h2>Weather App By Abhay </h2>
            </div>
            
            {loading && (<div className="screen"><div className="main">
                <div className="search">
                    <input className='input-tag' type="text" value={location} placeholder='Enter City Name' onChange={(e) => {
                        setLocation(e.target.value);
                    }} onKeyPress={search} />
                    <div className="icon">
                        <i className="fa-solid fa-location-dot"></i>
                    </div>
                </div>
                <div className="weather-icon">
                <i className="fa-solid fa-cloud"></i>
                </div>
                <div className="location">
                    <h4>{name}</h4>
                </div>
                <div className="weather-temp">
                    <h1>{temperature}</h1><span className='tempc'> °C</span>
                </div>
                <div className="weather-desc">
                    <h1>{desc}</h1>

                </div>
                <div className="min-max">
                    <div className="s">
                       <p>Min : {min}°C</p>
                    </div>
                    <div className="s">
                        <p>Max : {max}°C</p>
                    </div>
                </div>
            </div>

            <div className="main2">
                <h2>Today's Highlights </h2>
             <div className="section">
               <div className="highlight">
                <p>Feels Like</p>
                <h3>{feel} °C</h3>
               </div>

               <div className="highlight">
            <p>Humidity</p>
            <h3>{humidity}%</h3>
               </div>
             </div>
             <div className="section">
                     <div className="highlight">
                        <p>Wind Speed</p>
                        <h3>{wind} Mph</h3>
                     </div>
                     <div className="highlight">
                     <p>Visibilty</p>
                        <h3>{visibility}</h3>
                     </div>


             </div>

            </div>
            
            </div>)}
            

        </div>
    )
}

export default Home
