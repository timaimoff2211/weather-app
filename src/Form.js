import React from 'react';
import './app/App.css';

const Form = (props) => (
  <form onSubmit={props.weatherMethod} className="weather-form">
    <input type="text" name="city" placeholder="Город" class="input-city" />
    <button className="weather-btn">Получить погоду</button>
  </form>
)


export default Form;
