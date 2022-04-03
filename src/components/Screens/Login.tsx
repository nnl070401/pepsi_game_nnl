import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  ImageBackground,
  Image,

} from 'react-native';
import RetangleButton from '../Navigations/Button/Retangle_button';
import { Button_off , Button_white, Lon_pessi} from './assets/Index';


const Login: React.FC = (prop: any) => {
  const [text, onChangeText] = React.useState('');
  const {navigation} = prop;
  return (
    <ImageBackground
      source={require('../Screens/assets/background.png')}
      style={styles.container}>
      <Text style={styles.text1}>Hey, chào mừng bạn đến với</Text>

      <Text style={styles.text2}>Pepsi Tet</Text>

      <Text style={styles.text3}>Đăng nhập</Text>

      <Text style={styles.text4}>Số điện thoại</Text>

      <TextInput
        style={styles.textIp}
        onChangeText={onChangeText}
        value={text}
        placeholder="Nhập số điện thoại"
      />

      
        <ImageBackground source={Lon_pessi} style={styles.imagess}/>
  
      <View style={styles.btnOTP}>
        
        <RetangleButton
          title="Lấy mã OTP"
          backgroundImage={Button_off}
          titleStyle={styles.titlebuttonotp}
          onPress={() => {
            navigation.navigate('MainScreen');
          }}
        />
      </View>
      <Text style={styles.text5}>Hoặc</Text>

      <View style={styles.btnDK}>
        <RetangleButton 
        title="Đăng kí" 
        backgroundImage={Button_white}
        titleStyle={styles.titlebuttondk}
        onPress={() => navigation.navigate('SignUp')} />
      </View>
    </ImageBackground>
  );
};
export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  text1: {
    position: 'absolute',
    width: 200,
    height: 24,
    left: 98,
    top: 112,

    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontSize: 15,
    fontWeight: '600',
    lineHeight: 24,
    color: '#fff',
  },

  text2: {
    position: 'absolute',
    width: 163,
    height: 148,
    left: 116,
    top: 136,

    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontSize: 36,
    fontWeight: 'bold',
    lineHeight: 48,

    color: '#fff',
  },

  text3: {
    position: 'absolute',
    width: 150,
    height: 26,
    left: 122,
    top: 214,

    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontSize: 22,
    fontWeight: 'bold',
    lineHeight: 26,

    textAlign: 'center',
    letterSpacing: -0.3,

    color: '#fff',
  },

  text4: {
    position: 'absolute',
    width: 150,
    height: 16,
    left: 17,
    top: 280,

    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontSize: 14,
    fontWeight: 'bold',
    lineHeight: 16,
    letterSpacing: -0.3,

    color: '#fff',
  },

  textIp: {
    position: 'absolute',
    width: 340,
    height: 44,
    left: 17,
    top: 304,

    borderRadius: 8,
    borderWidth: 1,
    backgroundColor: '#fff',
    borderColor: '#fff',
  },
  imagess:{
    position: 'absolute',
    width: 120,
    height: 100,
    left: 135,
    top: 376,
    
  },
  btnOTP: {
    position: 'absolute',
    width: 264,
    height: 44,
    left: 57,
    top: 500,

    borderRadius: 8,
  },

  titlebuttonotp:{
    fontSize:22,
    color: '#fff',
    fontWeight:'bold',
    alignSelf:'center',
  },
  text5: {
    position: 'absolute',
    width: 24,
    height: 14,
    left: 175,
    top: 560,

    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontSize: 10,
    fontWeight: 'normal',
    lineHeight: 14,

    color: '#fff',
  },

  btnDK: {
    position: 'absolute',
    width: 264,
    height: 44,
    left: 57,
    top: 580,

    backgroundColor: 'Primary',
    borderColor: 'Primary',
  },
  titlebuttondk:{
    fontSize:22,
    color: '#0063a7',
    fontWeight:'bold',
    alignSelf:'center',
  },
});
