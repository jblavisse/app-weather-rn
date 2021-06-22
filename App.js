import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';
import CurrentWeather from './CurrentWeather';
import DayWeather from './DayWeather';

export default function App() {
  const [weatherData,setWeatherData] = useState({});
  
  useEffect(() => {
    axios.get('https://api.openweathermap.org/data/2.5/onecall?lat=50.42893&lon=2.83183&units=metric&lang=fr&exclude=minutely,hourly&appid=e5e7309948c6fffb8aeb0c9a7e872843')
    .then(res => {
      console.log(res.data);
      setWeatherData(res.data);
    })
  }, [])

  // Si API chargé
  if(Object.entries(weatherData).length > 0) {

    const dailyJSX = weatherData.daily.map(day => {
      return <DayWeather day={day} />
    })

    return (
      <View style={styles.container}>
          <CurrentWeather current={weatherData.current} />
          {dailyJSX}
      </View>
    );
  }
  // Si API pas encore chargé
  else {
    return <Text>Loading...</Text>
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
