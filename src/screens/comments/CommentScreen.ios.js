import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CommentScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>I'm iOS</Text>
    </View>
  )
}

export default CommentScreen

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
    borderRadius: 50,
    borderWidth: 5,
    borderColor: 'lightgreen',
    borderStyle: 'dashed',
    width: '80%',
    height: 100
  },
  text: {
    color:'white',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold'
  }
})