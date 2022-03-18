import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

// สร้าง Child Component (คอมโพเน้นลูก) 
// const Greeting = (props) => {
const Greeting = ({ name, age }) => {
  
  // ประกาศตัวแปรมารับค่า props
  // const { name, age } = props

  return (
    <View>
      {/* <Text>Hello. {props.name} Age is {props.age} year</Text> */}
      <Text>Hello. {name} Age is {age} year</Text>
    </View>
  )
}

// Parent Component (คอมโพเน้นแม่)
const GreetingScreen = () => {
  return (
    <View>
      <Greeting name="Tony" age="46" />
      <Greeting name="Natasah" age="32" />
      <Greeting name="Steve" age="42" />
    </View>
  )
}

export default GreetingScreen

const styles = StyleSheet.create({})