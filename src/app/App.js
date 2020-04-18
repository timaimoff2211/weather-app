import React from 'react';
import './App.css';
import Info from '../info/Info';
import Form from '../Form';
import Weather from '../Weather';

const API_KEY = "35f051fb947ef2aaf2937ef592b91480";

class App extends React.Component {

  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    sunrise: undefined,
    sunset: undefined,
    error: undefined
  }

  gettingWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;

    if(city){
      const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
      const data = await api_url.json();
      console.log(data);

      let sunset = data.sys.sunset * 1000;
      let date = new Date();
      date.setTime(sunset);
      let sunset_date = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

      let sunrise = data.sys.sunrise * 1000;
      let sunriseDate = new Date();
      sunriseDate.setTime(sunrise);
      let sunrise_date = sunriseDate.getHours() + ":" + sunriseDate.getMinutes() + ":" + sunriseDate.getSeconds();


      this.setState({
        temp: data.main.temp,
        city: data.name,
        country: data.sys.country,
        sunrise: sunrise_date,
        sunset: sunset_date,
        error: undefined
      });
    } else {
      this.setState({
        temp: undefined,
        city: undefined,
        country: undefined,
        sunrise: undefined,
        sunset: undefined,
        error: "Введите название города"
      });
    }
  }

  render() {
    return (
      <div className="app">
        <div className="weather-main">
          <Info />
          <div className="right-block">
            <Form weatherMethod={this.gettingWeather} />
            <Weather
              temp={this.state.temp}
              city={this.state.city}
              country={this.state.country}
              sunrise={this.state.sunrise}
              sunset={this.state.sunset}
              error={this.state.error}
             />
          </div>
        </div>
      </div>
    );
  };
}

export default App;
