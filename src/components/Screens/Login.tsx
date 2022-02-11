import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  ImageBackground,
} from 'react-native';

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
      <View style={styles.btnOTP}>
        <Button
          title="Lấy mã OTP"
          color="#B7B9C0"
          onPress={() => {
            navigation.navigate('MainScreen');
          }}
        />
      </View>
      <Text style={styles.text5}>Hoặc</Text>

      <View style={styles.btnDK}>
        <Button title="Đăng kí" onPress={() => navigation.navigate('SignUp')} />
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
  btnOTP: {
    position: 'absolute',
    width: 264,
    height: 44,
    left: 57,
    top: 530,

    borderRadius: 8,
  },
  text5: {
    position: 'absolute',
    width: 24,
    height: 14,
    left: 175,
    top: 580,

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
    top: 610,

    backgroundColor: 'Primary',
    borderColor: 'Primary',
  },
});
