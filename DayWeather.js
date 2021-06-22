import React from 'react'
import { Image, StyleSheet, View, Text} from 'react-native'

export default function DayWeather({day}) {
    const weather = day.weather[0];

    return (
        <View style={styles.day}>
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
