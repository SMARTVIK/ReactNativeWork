import React, { useState } from 'react'
import { View, StyleSheet, Text, TextInput } from 'react-native'

const TextScreen = () => {
  const [name, setName] = useState('')
  return (
    <View>
      <Text>Enter Password:</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={name}
        onChangeText={(newValue) => {
          setName(newValue)
        }}
      />
    
      {name.length >=5 ? null : <Text>Password must be greater than 5 characters.</Text>}
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: 'black',
    borderWidth: 1,
  },
})

export default TextScreen
