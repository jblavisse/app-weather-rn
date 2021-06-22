import React from 'react'
import {Image, StyleSheet, View, Text } from 'react-native'

export default function CurrentWeather({current}) {
    const weather = current.weather[0];

    return (
        <View>
            <Text>Température réelle: {current.temp}</Text>
            <Text>Température ressentie: {current.feels_like}</Text>
            <Text>{weather.description}</Text>

            <Image style={styles.myImg} source={{
            uri: `http://openweathermap.org/img/wn/${weather.icon}@2x.png`,
            }} />
        </View>
    )
}

const styles = StyleSheet.create({
    myImg: {
      width: 100,
      height: 100
    }
  });
  