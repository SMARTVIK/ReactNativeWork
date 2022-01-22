import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = (props) => {
  return <View>
    <Button 
    onPress={
      () =>{
        props.navigation.navigate("Components")
      }
    }
    title="Go to components demo"/>

    <TouchableOpacity onPress={() => {
      props.navigation.navigate('List')
    }}>
      <Text> Go to List screen</Text>
    </TouchableOpacity>
  </View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;


