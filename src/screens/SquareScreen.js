import React, { useReducer } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const reducer = (state, action) => {
    switch (action.colorToChange) {
        case 'red':
            return { ...state, red: state.red + action.amount };
        case 'green':
            return { ...state, green: state.green + action.amount };
        case 'blue':
            return { ...state, blue: state.blue + action.amount };
    }
}


const SquareScreen = () => {
   
    const [state, dispatch] = useReducer(reducer, {red: 0, green: 0, blue: 0})
    const {red, green, blue} = state;
    const COLOR_INCREMENT = 15;


    return <View>
        <ColorCounter
            color="red"
            onIncrease={() => {dispatch({colorToChange: 'red', amount: COLOR_INCREMENT})}}
            onDecrease={() => {dispatch({colorToChange: 'red', amount: -1 * COLOR_INCREMENT})}} />
        <ColorCounter 
            color="green" 
            onIncrease={() => {dispatch({colorToChange: 'green', amount: COLOR_INCREMENT})}}
            onDecrease={() => {dispatch({colorToChange: 'green', amount: -1 * COLOR_INCREMENT})}} />
        <ColorCounter
            color="blue" 
            onIncrease={() => {dispatch({colorToChange: 'blue', amount: COLOR_INCREMENT})}}
            onDecrease={() => {dispatch({colorToChange: 'blue', amount: -1 * COLOR_INCREMENT})}} />
            <View style={{height: 150,width: 150, backgroundColor:  `rgb(${red}, ${green}, ${blue})`}}></View>
    </View>
};

const styles = StyleSheet.create({})

export default SquareScreen;