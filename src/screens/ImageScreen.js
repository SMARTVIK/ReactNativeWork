import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
    return <View>
        <ImageDetail title="Forest" image={require('../../assets/beach.jpg')} score={4}/>
        <ImageDetail title="Mountain" image={require('../../assets/forest.jpg')} score={5}/>
        <ImageDetail title="River" image={require('../../assets/mountain.jpg')} score={9}/>
    </View>
};

const styles = StyleSheet.create({

});

export default ImageScreen;