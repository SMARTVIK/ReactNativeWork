import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const SquareScreen = () => {
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

    const COLOR_INCREMENT = 15;

    const setColor = (color, change) => {
        switch (color) {
            case 'red':
                if (red + change > 255 || red + change < 0) {
                    return;
                }
                setRed(red + change);
                break;
            case 'green':
                if (green + change > 255 || green + change < 0) {
                    return;
                }
                setGreen(green + change);
                break;
            case 'blue':
                if (blue + change > 255 || blue + change < 0) {
                    return;
                }
                setBlue(blue + change);
                break;
        }
    }

    return <View>
        <ColorCounter
            color="red"
            onIncrease={() => {setColor('red', COLOR_INCREMENT)}}
            onDecrease={() => {setColor('red', -1 * COLOR_INCREMENT)}} />
        <ColorCounter 
            color="green" 
            onIncrease={() => {setColor('green', COLOR_INCREMENT)}}
            onDecrease={() => {setColor('green', -1 * COLOR_INCREMENT)}} />
        <ColorCounter
            color="blue" 
            onIncrease={() => {setColor('blue', COLOR_INCREMENT)}}
            onDecrease={() => {setColor('blue', -1 * COLOR_INCREMENT)}} />
            <View style={{height: 150,width: 150, backgroundColor:  `rgb(${red}, ${green}, ${blue})`}}></View>
    </View>
};

const styles = StyleSheet.create({})

export default SquareScreen;