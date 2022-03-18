import { StyleSheet, Text, SafeAreaView } from 'react-native'
import React from 'react'

const DashboardScreen = ({navigation, route}) => {

  const { params } = route

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Username: {params.username}</Text>
      <Text style={styles.text}>Password: {params.password}</Text>
    </SafeAreaView>
  )
}

export default DashboardScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  }
})