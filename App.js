import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';

export default function App() {
  const [weatherData,setWeatherData] = useState({});
  
  useEffect(() => {
    axios.get('https://api.openweathermap.org/data/2.5/onecall?lat=50.42893&lon=2.83183&units=metric&lang=fr&exclude=minutely,hourly&appid=e5e7309948c6fffb8aeb0c9a7e872843')
    .then(res => {
      console.log(res.data);
      setWeatherData(res.data);
    })
  }, [])

  /* 
  C'est pas parceque l'API est chargé que l'écran ne tourne pas
  Vous avez déjà un visuel avant que vous ayez vos données de l'API

  Un ennui: weatherData.current.temp, ça n'existe pas avant de récupérer les données

  Vérification, si l'objet weatherData n'est pas vide, ça veut 
  dire qu'il y a des données et que donc on peut afficher quelque
  chose.
  Dans le cas contraire, non 
  */

  // Cas où les données sont chargées
  // Dans weatherData, j'ai bien des infos si 
  // la longueur des propriétés de mon objet vaut plus que 0
  if(Object.entries(weatherData).length > 0) {
    return (
      <View style={styles.container}>
        <Text>{weatherData.current.temp}</Text>
      </View>
    );
  }
  // Cas où les données ne sont pas encore chargées de l'API
  // weatherData est à sa valeur par défaut: {}
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
  },
});
