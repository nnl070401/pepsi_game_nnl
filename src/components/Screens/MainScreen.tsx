import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  ImageBackground,
  Image,
} from 'react-native';
import {Button} from 'react-native-elements/dist/buttons/Button';
import RetangleButton from '../Navigations/Button/Retangle_button';
import {Button_play, Background, Button_white} from './assets/Index';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Rules: React.FC = () => {
  return (
    <ImageBackground source={Background} style={styles.container}>
      <View>
        <Image
          source={require('../Screens/assets/head_icon.png')}
          style={styles.headImage}
        />
        <Text style={styles.textInstruction}>{'Hướng dẫn'}</Text>

        <RetangleButton 
          title="Chơi ngay" 
          backgroundImage={Button_play} 
        />
        <RetangleButton 
          title="Quét mã " 
          backgroundImage={Button_white} 
        />
        <RetangleButton 
          title="Bộ sưu tập" 
          backgroundImage={Button_white} 
        />
        <RetangleButton
          title="Chi tiết quà tặng"
          backgroundImage={Button_white}
        />
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
    marginTop: windowWidth * 0.3,
  },
  textInstruction: {
    color: '#e3c91e',
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});
