import React from 'react';
import './app/App.css';

const Weather = (props) => (
  <div>
    {props.city &&
      <div className="weather-data">
        <p>Страна {props.country}</p>
        <p>В городе {props.city} сейчас {props.temp} градусов</p>
        <p>Рассвет в городе {props.city}: {props.sunrise}</p>
        <p>Закат в городе {props.city}: {props.sunset}</p>
      </div>
    }
    <p>{props.error}</p>
  </div>
)




export default Weather;
