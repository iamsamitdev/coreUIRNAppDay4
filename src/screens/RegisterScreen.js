import React from 'react'
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

const RegisterScreen = ({navigation}) => {

  const background = require('../assets/images/register/signup_bg.png')
  const backIcon = require('../assets/images/register/back.png')
  const personIcon = require('../assets/images/register/signup_person.png')
  const lockIcon = require('../assets/images/register/signup_lock.png')
  const emailIcon = require('../assets/images/register/signup_email.png')
  const birthdayIcon = require('../assets/images/register/signup_birthday.png')

  // สร้างฟังก์ชันกลับไปหน้า Login
  const onGoBackPress = () => {
    navigation.goBack()
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <ImageBackground
            source={background}
            style={styles.background}
            resizeMode="cover">
            <View style={styles.headerContainer}>
              <View style={styles.headerIconView}>
                <TouchableOpacity style={styles.headerBackButtonView} onPress={onGoBackPress}>
                  <Image
                    source={backIcon}
                    style={styles.backButtonIcon}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              </View>

              <View style={styles.headerTitleView}>
                <Text style={styles.titleViewText}>สมัครสมาชิก</Text>
              </View>
            </View>

            <View style={styles.inputsContainer}>
              <View style={styles.inputContainer}>
                <View style={styles.iconContainer}>
                  <Image
                    source={personIcon}
                    style={styles.inputIcon}
                    resizeMode="contain"
                  />
                </View>
                <TextInput
                  style={[styles.input, styles.whiteFont]}
                  placeholder="ชื่อ-สกุล"
                  placeholderTextColor="#FFFFFF"
                  underlineColorAndroid="transparent"
                />
              </View>

              <View style={styles.inputContainer}>
                <View style={styles.iconContainer}>
                  <Image
                    source={emailIcon}
                    style={styles.inputIcon}
                    resizeMode="contain"
                  />
                </View>
                <TextInput
                  style={[styles.input, styles.whiteFont]}
                  placeholder="อีเมล์"
                  placeholderTextColor="#FFFFFF"
                />
              </View>

              <View style={styles.inputContainer}>
                <View style={styles.iconContainer}>
                  <Image
                    source={lockIcon}
                    style={styles.inputIcon}
                    resizeMode="contain"
                  />
                </View>
                <TextInput
                  secureTextEntry={true}
                  style={[styles.input, styles.whiteFont]}
                  placeholder="รหัสผ่าน"
                  placeholderTextColor="#FFFFFF"
                />
              </View>

              <View style={styles.inputContainer}>
                <View style={styles.iconContainer}>
                  <Image
                    source={birthdayIcon}
                    style={styles.inputIcon}
                    resizeMode="contain"
                  />
                </View>
                <TextInput
                  style={[styles.input, styles.whiteFont]}
                  placeholder="วันเกิด"
                  placeholderTextColor="#FFFFFF"
                  underlineColorAndroid="transparent"
                />
              </View>
            </View>

            <View style={styles.footerContainer}>
              <TouchableOpacity>
                <View style={styles.signup}>
                  <Text style={styles.buttonText}>บันทึก</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={onGoBackPress}>
                <View style={styles.signin}>
                  <Text style={styles.greyFont}>
                    เป็นสมาชิกอยู่แล้ว ?
                    <Text style={styles.whiteFont}> เข้าสู่ระบบ</Text>
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    width,
    height,
  },
  headerContainer: {
    flex: 1,
  },
  inputsContainer: {
    flex: 3,
    marginTop: 50,
  },
  footerContainer: {
    flex: 2,
  },
  headerIconView: {
    marginTop: 20,
    marginLeft: 20,
    backgroundColor: 'transparent',
  },
  headerBackButtonView: {
    width: 25,
    height: 25,
  },
  backButtonIcon: {
    width: 25,
    height: 25,
  },
  headerTitleView: {
    backgroundColor: 'transparent',
    marginTop: 25,
    marginLeft: 25,
  },
  titleViewText: {
    fontSize: 32,
    color: '#ffffff',
  },
  inputs: {
    paddingVertical: 20,
  },
  inputContainer: {
    borderWidth: 1,
    borderBottomColor: '#CCCCCC',
    borderColor: 'transparent',
    flexDirection: 'row',
    height: 75,
  },
  iconContainer: {
    paddingHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputIcon: {
    width: 30,
    height: 30,
  },
  input: {
    flex: 1,
    fontSize: 20,
  },
  signup: {
    backgroundColor: '#FF3366',
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },
  signin: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  greyFont: {
    color: '#D8D8D8',
  },
  whiteFont: {
    color: '#FFFFFF',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
  },
})
