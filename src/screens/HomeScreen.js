import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import MainTheme, { colors } from '../themes/MainTheme'

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={MainTheme.card}>
        <Text style={MainTheme.header1}>Title</Text>
        <Text style={MainTheme.header2}>Subtitle</Text>
        <Text style={MainTheme.body}>This is a book</Text>
      </View>
      <Text />
      <View style={MainTheme.card}>
        <Text style={MainTheme.header1}>Title</Text>
        <Text style={MainTheme.header2}>Subtitle</Text>
        <Text style={MainTheme.body}>This is a book</Text>
      </View>
      <Text />
      <View style={MainTheme.card}>
        <Text style={MainTheme.header1}>Title</Text>
        <Text style={MainTheme.header2}>Subtitle</Text>
        <Text style={MainTheme.body}>This is a book</Text>
      </View>
    </View>
  )
}  

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.textLight,
  },
})


/*
const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text
        style={[
          styles.content,
          { padding: 20, fontStyle: 'italic', color: 'red' },
        ]}>
        HomeScreen
      </Text>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: 'lightblue',
  },
  content: {
    fontSize: 32,
    color: '#000',
  },
})
*/