import React from 'react'
import { Image, StyleSheet, View, Text} from 'react-native'

export default function DayWeather({day}) {
    const weather = day.weather[0];
    
    const dayDate = new Date(day.dt*1000);
    const dayDateFR = dayDate.toLocaleString('fr-FR',{
        timeZone: 'Europe/Paris',
        weekday: 'long',
        day: '2-digit',
        month: 'long',
        year: 'numeric' // Optionnel
    })

    return (
        <View style={styles.day}>
            <Text>{dayDateFR}</Text>
            <Text>Min: {day.temp.min}</Text>
            <Text>Max: {day.temp.max}</Text>

            <Text>{weather.description}</Text>

            <Image style={styles.myImg} source={{
            uri: `http://openweathermap.org/img/wn/${weather.icon}@2x.png`,
            }} />
        </View>
    )
}

const styles = StyleSheet.create({
    day: {
        margin: 10
    },
    myImg: {
        width: 100,
        height: 100
    }
})
