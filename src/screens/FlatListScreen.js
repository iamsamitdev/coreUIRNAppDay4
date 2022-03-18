import { StyleSheet, Text, View, FlatList, SafeAreaView, TouchableOpacity, Alert } from 'react-native'
import React from 'react'

const FlatListScreen = () => {

  const students = [
    {id: 10, name: 'Samit'},
    {id: 15, name: 'Wichai'},
    {id: 20, name: 'Wuttisak'},
    {id: 32, name: 'Anirut'},
    {id: 40, name: 'Jaysie'},
    {id: 56, name: 'Phanuphong'},
    {id: 72, name: 'Thongchai'},
    {id: 75, name: 'Yodrak'},
    {id: 76, name: 'Samit'},
    {id: 77, name: 'Wichai'},
    {id: 78, name: 'Wuttisak'},
    {id: 79, name: 'Anirut'},
    {id: 80, name: 'Jaysie'},
    {id: 81, name: 'Phanuphong'},
    {id: 82, name: 'Thongchai'},
    {id: 83, name: 'Yodrak'}
  ]

  const showStudent = (id, name) => {
    Alert.alert(
      'ข้อมูลนักเรียน',
      `ID: ${id}\nName: ${name}`,
      [
        {
          text: 'ปิดหน้าต่าง'
        }
      ]
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.textHeading}>Student List</Text>
      <FlatList 
        data={students}
        keyExtractor={
          (item) => item.id.toString()
        }
        renderItem={({item}) => {
          return (
            <TouchableOpacity 
              style={styles.child}
              onPress={() => showStudent(item.id,item.name)}
            >
              <Text style={styles.text}>{item.name}</Text>
            </TouchableOpacity>
          )
        }}
        ItemSeparatorComponent={()=>{
          return  <View
            style={{
              borderColor: 'lightgrey',
              borderBottomWidth: 1,
              marginHorizontal: 10
            }}
          />
        }}
      />
    </SafeAreaView>
  )
}

export default FlatListScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch'
  },
  child: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    height: 60,
  },
  text: {
    fontSize: 16,
    fontWeight: '400',
    color: 'lightslategrey',
    textAlign: 'left',
    padding: 20
  },
  textHeading: {
    fontSize: 24,
    padding: 20
  }
})