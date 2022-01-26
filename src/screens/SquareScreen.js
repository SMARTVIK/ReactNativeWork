import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const SquareScreen = () => {
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

    const COLOR_INCREMENT = 15;

    console.log(`rgb(${red}, ${green}, ${blue}`)
    return <View>
        <ColorCounter
            color="red"
            onIncrease={() => {
                if(red + COLOR_INCREMENT > 255){
                    return;
                }
                setRed(red + COLOR_INCREMENT)
            }}
            onDecrease={() => {
                if(red - COLOR_INCREMENT < 0){
                    return;
                }
                setRed(red + -1 * COLOR_INCREMENT)
                }} />
        <ColorCounter 
            color="green" 
            onIncrease={() => {
                if(green + COLOR_INCREMENT > 255){
                    return;
                }
                setGreen(green + COLOR_INCREMENT)
            }}
            onDecrease={() => {
                if(green - COLOR_INCREMENT < 0){
                    return;
                }
                setGreen(green + -1 * COLOR_INCREMENT)
                }} />
        <ColorCounter
            color="blue" 
            onIncrease={() => {
                if(blue + COLOR_INCREMENT > 255){
                    return;
                }
                setBlue(blue + COLOR_INCREMENT)
            }}
            onDecrease={() => {
                if(blue - COLOR_INCREMENT < 0){
                    return;
                }
                setBlue(blue + -1 * COLOR_INCREMENT)
                }} />

            <View style={{height: 150,width: 150, backgroundColor:  `rgb(${red}, ${green}, ${blue})`}}></View>
    </View>
};

const styles = StyleSheet.create({})

export default SquareScreen;