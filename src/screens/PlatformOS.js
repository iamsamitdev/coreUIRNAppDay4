import { StyleSheet, Text, View, SafeAreaView, Platform } from 'react-native'
import React from 'react'

const PlatformOS = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.text}>React Native</Text>
      </View>
    </SafeAreaView>
  )
}

export default PlatformOS

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgrey',
  },
  // text: {
  //   fontSize: 24,
  //   textAlign: 'center',
  //   borderStyle: 'solid',
  //   borderWidth: 3,
  //   borderRadius: 10,
  //   padding: 10,
  //   borderColor: Platform.OS === 'android' ? '#07A738':'#616A6B',
  //   backgroundColor: Platform.OS === 'android' ? '#07A738':'transparent',
  //   color: Platform.OS === 'android' ? '#FFFFFF':'#616A6B',
  // },

  ...Platform.select({
    ios: {
      text:{
        fontSize: 24,
        textAlign: 'center',
        borderStyle: 'solid',
        borderWidth: 3,
        borderRadius: 10,
        borderColor: '#616A6B',
        backgroundColor: 'transparent',
        color: '#616A6B',
        padding: 10,
      }
    },
    android: {
      text:{
        fontSize: 24,
        textAlign: 'center',
        borderStyle: 'solid',
        borderWidth: 3,
        borderRadius: 10,
        borderColor: '#07A738',
        backgroundColor: '#07A738',
        color: '#FFFFFF',
        padding: 10,
      }
    }
  })

})
