import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'

const SafeAreaScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>React Native</Text>
      <Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque totam cumque vero molestiae, enim nisi odio voluptatibus culpa delectus facere reprehenderit exercitationem, aut ipsam repellat. Alias, pariatur! Fugiat obcaecati debitis culpa hic corrupti ipsam necessitatibus voluptates non? Placeat, minus voluptatem iusto consequatur reiciendis ab cumque neque quisquam! Dolorum dignissimos sunt debitis natus explicabo praesentium facilis esse et, aspernatur nobis minima, tempora fugiat perferendis voluptatibus, vitae modi nesciunt laboriosam! Libero possimus illum, minus quo vel expedita deserunt corrupti magni architecto cumque ab eum fuga ducimus sint illo hic, fugiat, quisquam blanditiis voluptas aperiam. Nesciunt autem magnam officia praesentium obcaecati blanditiis architecto.</Text>
    </SafeAreaView>
  )
}

export default SafeAreaScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  text: {
    fontSize: 26,
    textAlign: 'center',
  }
})