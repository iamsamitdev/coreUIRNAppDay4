import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useState } from 'react'

const CounterScreen = () => {

  // สร้างตัวแปรประเภท State
  const [counter, setCounter] = useState(0)

  return (
    <View style={styles.container}>
      <Text style={styles.text}> Your clicked {counter} Times</Text>
      <Text />
      <Button 
        title='+ Count up'
        onPress={()=> setCounter(counter+1)}
      />
    </View>
  )
}

export default CounterScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 32,
  }
})
