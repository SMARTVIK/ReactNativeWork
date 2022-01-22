import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const name = 'Vivek'

const ComponentsScreen = () => {
    return(
        <View>
            <Text style={styles.firstText}>Getting started with react native</Text>
            <Text style={styles.nameText}>My name is {name}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    firstText: {
        fontSize: 45
    },
    nameText: {
        fontSize: 20
    }
});

export default ComponentsScreen;