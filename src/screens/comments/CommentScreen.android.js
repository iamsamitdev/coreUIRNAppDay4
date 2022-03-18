import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CommentScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>I'm Android</Text>
    </View>
  )
}

export default CommentScreen

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
    borderWidth: 2,
    borderColor: 'darkgrey',
    width: '80%',
    height: 100
  },
  text: {
    color:'white',
    textAlign: 'center',
    fontSize: 30,
  }
})