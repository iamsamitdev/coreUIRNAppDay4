import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native'
import React from 'react'

const ScrollViewScreen = () => {

  const students = [
    {id: 10, name: 'Samit'},
    {id: 15, name: 'Wichai'},
    {id: 20, name: 'Wuttisak'},
    {id: 32, name: 'Anirut'},
    {id: 40, name: 'Jaysie'},
    {id: 56, name: 'Phanuphong'},
    {id: 72, name: 'Thongchai'},
    {id: 75, name: 'Yodrak'},
  ]

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        {
          students.map((item) => {
            return (
              <View key={item.id} style={styles.child}>
                <Text>{ item.name }</Text>
              </View>
            )
          })
        }
      </ScrollView>
    </SafeAreaView>
  )
}

export default ScrollViewScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch'
  },
  scrollView: {
    padding: 4,
  },
  child: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    margin: 5,
    borderWidth: 3,
    borderColor: 'lightgrey',
    borderRadius: 10,
    padding: 10
  },
  text: {
    fontSize: 20,
    fontWeight: '700',
    color: 'lightslategrey',
    textAlign: 'center',
    textTransform: 'uppercase'
  }
})