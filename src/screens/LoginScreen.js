import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Dimensions,
  TextInput,
  Button,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native'

const { width, height } = Dimensions.get('screen')

const LoginScreen = ({navigation}) => {

  const background = require('../assets/images/login/login1_bg.png')
  const mark = require('../assets/images/login/login1_mark.png')
  const lockIcon = require('../assets/images/login/login1_lock.png')
  const personIcon = require('../assets/images/login/login1_person.png')

  // สร้างตัวแปรแบบ State ไว้เก็บค่าจากแบบฟอร์ม
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  // สร้างฟังก์ชันสำหรับส่งไปหน้า Register
  const onRegisterPress = () => {
    navigation.navigate('Register')
    // navigation.push('Register')
    // navigation.replace('Register')
  }

  // สร้างฟังก์ชันเมื่อกดเข้าสู่ระบบ
  const loginPress = () => {
    let userData = {
      username: username,
      password: password
    }
    // ส่งไปหน้า Dashboard
    navigation.navigate('Dashboard', userData)
  }

  return (
    <SafeAreaView>
      <ScrollView>
      <ImageBackground
        source={background}
        style={styles.background}
        resizeMode="cover">
          <View style={styles.markWrap}>
            <Image source={mark} style={styles.mark} resizeMode="contain" />
          </View>
          <View style={styles.wrapper}>
            <View style={styles.inputWrap}>
              <View style={styles.iconWrap}>
                <Image
                  source={personIcon}
                  style={styles.icon}
                  resizeMode="contain"
                />
              </View>
              <TextInput
                placeholder="ชื่อผู้ใช้"
                placeholderTextColor="#FFFFFF"
                style={styles.input}
                autoCapitalize='none'
                keyboardType="default"
                value={username}
                onChangeText={
                  (text) => setUsername(text)
                }
              />
            </View>
            <View style={styles.inputWrap}>
              <View style={styles.iconWrap}>
                <Image
                  source={lockIcon}
                  style={styles.icon}
                  resizeMode="contain"
                />
              </View>
              <TextInput
                placeholderTextColor="#FFFFFF"
                placeholder="รหัสผ่าน"
                style={styles.input}
                secureTextEntry
                value={password}
                onChangeText={
                  (text) => setPassword(text)
                }
              />
            </View>
            <TouchableOpacity activeOpacity={0.5}>
              <View>
                <Text style={styles.forgotPasswordText}>ลืมรหัสผ่าน ?</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5} onPress={loginPress}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>เข้าสู่ระบบ</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.container}>
            <View style={styles.signupWrap}>
              <Text style={styles.accountText}>ยังไม่เป็นสมาชิก ?</Text>
              <TouchableOpacity activeOpacity={0.5} onPress={onRegisterPress}>
                <View>
                  <Text style={styles.signupLinkText}>สมัครสมาชิก</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
      </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  markWrap: {
    flex: 1,
    paddingVertical: 30,
    alignSelf: 'center',
  },
  mark: {
    width: 120,
    height: 150,
    flex: 1,
  },
  background: {
    width,
    height,
  },
  wrapper: {
    paddingVertical: 30,
  },
  inputWrap: {
    flexDirection: 'row',
    marginVertical: 10,
    height: 60,
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
  },
  iconWrap: {
    paddingHorizontal: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    height: 20,
    width: 20,
  },
  input: {
    fontSize: 20,
    flex: 1,
    paddingHorizontal: 10,
    color: '#FFFFFF',
  },
  button: {
    backgroundColor: '#FF3366',
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 24,
  },
  forgotPasswordText: {
    color: '#D8D8D8',
    backgroundColor: 'transparent',
    textAlign: 'right',
    paddingRight: 15,
    fontSize: 18,
  },
  signupWrap: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  accountText: {
    fontSize: 16,
    color: '#D8D8D8',
  },
  signupLinkText: {
    color: '#FFFFFF',
    marginLeft: 5,
  },
})