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
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/synthetic';
import { setPlay } from '../../redux/gameplay';
import ExitPopup from '../Navigations/popups/exit_popup';
import ChooseButton from '../Navigations/popups/button2_popup'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const MainScreen: React.FC = (prop: any) => {
  const [logoutModalVisible, setLogoutModalVisible] = useState(false);
  const {navigation} = prop;
  const [ptsModalVisible, setPtsModalVisible] = useState(false);
  const [optModalVisible, setOptModalVisible] = useState(false);
  const dispatch = useDispatch();
  const playTimesExchange = useSelector(
    (state: RootState) => state.timeplay.timeplay_exchange,
  );
  const playTimesFree = useSelector(
    (state: RootState) => state.timeplay.timeplay_free,
  );
  const navigateToGame = (playType: string) => {
    dispatch(setPlay(playType));
    navigation.navigate('');
    setPtsModalVisible(!ptsModalVisible);
  };
  const navigateToScanCode = () => {
    navigation.navigate('');
    setOptModalVisible(!optModalVisible);
  };

  const selectModal = () => {
    if (playTimesExchange > 0 || playTimesFree > 0) {
      setPtsModalVisible(!ptsModalVisible);
    } else {
      setOptModalVisible(!optModalVisible);
    }
  };
  const renderPlayTimesLeft = (times: number) => {
    return (
      <View style={styles.subTextContainer}>
        <Text style={styles.subText}>{'Bạn có tổng cộng '}</Text>
        <Text style={styles.subTextHighlight}>{times}</Text>
        <Text style={styles.subText}>{' lượt chơi'}</Text>
      </View>
    );
  };


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
        <RetangleButton 
          title="Chơi ngay"
          // onPress={() => {
          //   navigation.navigate('');
          // }}
          backgroundImage={Button_play}
          subComponent={renderPlayTimesLeft(
            playTimesExchange + playTimesFree,
          )}
          onPress={selectModal}
          />

        <RetangleButton  
          title={'Quét mã'} 
          backgroundImage={Button_white}
          titleStyle={styles.titlebutton}
          onPress={() => {
            navigation.navigate('GamePlay');
          }}/>
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
      <ChooseButton
            visible={ptsModalVisible}
            onClose={() => setPtsModalVisible(!ptsModalVisible)}
            data={{playTimesFree, playTimesExchange}}
            onPressFirst={() => navigateToGame('')}
            onPressSecond={() => navigateToGame('')}
          />
      </View>
    </ImageBackground>
  );
};

export default MainScreen;

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
