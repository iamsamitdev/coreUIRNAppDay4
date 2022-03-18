import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'

const FlexDemoScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={[styles.textBox, {backgroundColor: 'green', flex: 2}]}>Box1</Text>
      <Text style={[styles.textBox, {backgroundColor: 'orange', flex: 1, alignSelf: 'center'}]}>Box2</Text>
      <Text style={[styles.textBox, {backgroundColor: 'magenta', flex: 1, alignSelf: 'flex-start'}]}>Box3</Text>
    </View>
  )
}

export default FlexDemoScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center', // Main Axis
    // alignItems: 'flex-end', // Cross Axis
    alignItems: 'stretch', // Cross Axis
  },
  textBox: {
    fontSize: 24,
    color: '#fff',
    margin: 5,
    padding: 10,
  }
})