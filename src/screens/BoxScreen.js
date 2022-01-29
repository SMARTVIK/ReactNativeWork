import React from 'react';
import {View, Text, StyleSheet} from 'react-native';


const BoxScreen = () => {
    return <View style={styles.viewStyle}>
        <Text style={styles.textStyle}>Hi From box BoxScreen</Text>
    </View>
};


const styles = StyleSheet.create({
        viewStyle:{
            borderWidth: 3,
            borderColor: 'black',
            alignItems: 'center'
        },
        textStyle:{
            margin: 20,
            borderWidth: 2,
            borderColor: 'red',
            padding: 20

        }
});


export default BoxScreen;