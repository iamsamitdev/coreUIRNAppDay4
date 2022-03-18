import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import CommentScreen from './CommentScreen'

const Comment = () => {
  return (
    <SafeAreaView style={styles.container}>
      <CommentScreen />
    </SafeAreaView>
  )
}

export default Comment

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgrey',
  },
})