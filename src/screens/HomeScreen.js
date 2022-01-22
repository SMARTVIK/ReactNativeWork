import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({navigation}) => {
  return <View>
    <Button 
    onPress={
      () =>{
        navigation.navigate("Components")
      }
    }
    title="Go to components demo"/>

    <Button
    onPress={() => {
      navigation.navigate('List')
    }
    }
    title="Go to List screen"/>  
   
  </View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;


