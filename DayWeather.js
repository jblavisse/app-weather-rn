import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

export default function DayWeather({day}) {
    return (
        <View style={styles.day}>
            <Text>Min: {day.temp.min}</Text>
            <Text>Max: {day.temp.max}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    day: {
        margin: 10
    } 
})
