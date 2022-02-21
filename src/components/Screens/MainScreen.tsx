import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  ImageBackground,
  Image,
} from 'react-native';
import RetangleButton from '../Navigations/Button/Retangle_button';
import {Button_play, Background, Button_white} from './assets/Index';
import Header from './logout';
import ExitPopup from './exit_popup';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const Rules: React.FC = (prop: any) => {
  const [logoutModalVisible, setLogoutModalVisible] = useState(false);
  const {navigation} = prop;
  return (
    <ImageBackground source={Background} style={styles.container}>
        <View style={styles.exit_btn}>
          <Header
            leftButtonAvailable={false}
            rightButtonAvailable={true}
            onPressRightButton={() => {
              setLogoutModalVisible(!logoutModalVisible);
            }}
          />
      <View>
        <Image
          source={require('../Screens/assets/head_icon.png')}
          style={styles.headImage}
        />
        
      <View style={styles.button_container}>
        <Text style={styles.textInstruction}>{'Hướng dẫn'}</Text>
        <RetangleButton  title="Chơi ngay" backgroundImage={Button_play} />
        <RetangleButton  
          title={'Quét mã'} 
          backgroundImage={Button_white}
          titleStyle={styles.titlebutton}/>
        <RetangleButton 
          title="Bộ sưu tập" 
          backgroundImage={Button_white}
          titleStyle={styles.titlebutton} />
        <RetangleButton
          title="Chi tiết quà tặng"
          backgroundImage={Button_white}
          titleStyle={styles.titlebutton}
        />
        </View>
        <ExitPopup
            visible={logoutModalVisible}
            onPressConfirm={() => {
              setLogoutModalVisible(!logoutModalVisible);
              navigation.popToTop();
            }}
            onPressCanel={() => setLogoutModalVisible(!logoutModalVisible)}
          />
      </View>
    
        </View>
    </ImageBackground>
  );
};

export default Rules;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subTextContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  subTextHighlight: {
    fontSize: 13,
    color: 'yellow',
    fontWeight: 'bold',
  },
  subText: {
    fontSize: 12,
    color: 'white',
  },
  headImage: {
    alignSelf: 'center',
    marginTop: windowWidth * 0.001,
  },
  textInstruction: {
    color: '#e3c91e',
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  titlebutton: {
    fontSize:18,
    color: '#0063a7',
    fontWeight:'bold',
    alignSelf:'center',
  },
  button_container: {
    alignSelf:'center',
    width:'55%',
  },
  exit_btn:{
    right:5,
    marginTop:20,
  },
});
