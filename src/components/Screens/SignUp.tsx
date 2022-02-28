import React, {useState} from 'react';
import CheckBox from '@react-native-community/checkbox';
import TextButton from '../../components/Navigations/Button/TxBtn';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  ImageBackground,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const SignUp: React.FC = (props: any) => {
  const [text, onChangeText] = React.useState('');
  const [text1, onChangeText1] = React.useState('');
  const [toggleCheckbox, settoggleCheckbox] = useState(false);
  const {navigation} = props;

  return (
    <ImageBackground
      source={require('../Screens/assets/background.png')}
      style={styles.container}>
      <Text style={styles.text1}>Hey, chào mừng bạn đến với</Text>

      <Text style={styles.text2}>Pepsi Tet</Text>

      <Text style={styles.text3}>Đăng ký</Text>

      <TextInput
        style={styles.textIp1}
        onChangeText={onChangeText}
        value={text}
        placeholder="Nhập số điện thoại"
      />

      <TextInput
        style={styles.textIp2}
        onChangeText={onChangeText1}
        value={text1}
        placeholder="Tên người dùng"
      />

      <CheckBox
        style={styles.ckbox}
        disabled={false}
        value={toggleCheckbox}
        onValueChange={newValue => settoggleCheckbox(newValue)}
      />

      <View style={styles.txcontainer}>
        <Text style={styles.text5}>Tôi đã đọc và đồng ý với</Text>
        <TextButton
          titleStyle={{color: '#FFFF00'}}
          title="thể lệ chương trình"
          onPress={() => {
            navigation.navigate('commit');
          }}
        />
        <Text style={styles.text4}>Pepsi Tết.</Text>
      </View>

      <View style={styles.btncontainer}>
        <TouchableOpacity
          style={[
            styles.btnOTP,
            {backgroundColor: toggleCheckbox ? 'dodgerblue' : 'grey'},
          ]}
          disabled={!toggleCheckbox}>
          <Text
            style={{
              color: '#fff',
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: 16,
            }}>
            Lấy mã OTP
          </Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.text6}>Hoặc</Text>

      <View style={styles.btnDN}>
        <Button
          title="Đăng nhập"
          onPress={() => navigation.navigate('Login')}
        />
      </View>
    </ImageBackground>
  );
};
export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  brimage: {
    flex: 1,
    width: undefined,
    height: undefined,
    flexDirection: 'column',
    backgroundColor: 'transparent',
    justifyContent: 'flex-start',
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
    width: 103,
    height: 26,
    left: 136,
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

  textIp1: {
    position: 'absolute',
    width: 340,
    height: 44,
    left: 17,
    top: 290,

    borderRadius: 8,
    borderWidth: 1,
    backgroundColor: '#fff',
    borderColor: '#fff',
  },
  textIp2: {
    position: 'absolute',
    width: 340,
    height: 44,
    left: 17,
    top: 350,

    borderRadius: 8,
    borderWidth: 1,
    backgroundColor: '#fff',
    borderColor: '#fff',
  },

  ckbox: {
    position: 'absolute',
    left: 8,
    top: 400,
  },
  txcontainer: {
    flex: 1,
  },

  text4: {
    position: 'absolute',
    width: 288,
    height: 14,
    left: 277,
    top: 410,

    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontSize: 12,
    fontWeight: 'normal',
    lineHeight: 14,

    color: '#fff',
  },
  text5: {
    position: 'absolute',
    width: 288,
    height: 14,
    left: 40,
    top: 410,

    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontSize: 12,
    fontWeight: 'normal',
    lineHeight: 14,

    color: '#fff',
  },

  btncontainer: {
    flex: 1,
    top: 510,
    position: 'absolute',
  },
  btnOTP: {
    top: 10,
    padding: 10,
    width: 264,
    height: 44,
    left: 54,
    borderRadius: 8,
  },

  text6: {
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

  btnDN: {
    position: 'absolute',
    width: 264,
    height: 44,
    left: 57,
    top: 610,

    backgroundColor: 'Primary',
    borderColor: 'Primary',
  },
});
