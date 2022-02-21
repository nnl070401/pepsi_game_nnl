import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,  
} from 'react-native';
import {goback, logout_button} from './assets/Index';

const windowHeight = Dimensions.get('window').height;

export interface HeaderProps {
  title?: string;
  leftButtonAvailable: boolean;
  onPressLeftButton?: () => void;
  rightButtonAvailable: boolean;
  onPressRightButton?: () => void;
}

const Header: React.FC<HeaderProps> = (props: any) => {
  const {
    title,
    leftButtonAvailable,
    rightButtonAvailable,
    onPressLeftButton,
    onPressRightButton,
  } = props;

  const renderGoback = (leftButton: boolean, onPress: any) => {
    if (leftButton === true) {
      return (
        <TouchableOpacity onPress={onPress}>
          <Image source={goback} />
        </TouchableOpacity>
      );
    } else {
      return;
    }
  };

  const renderSignout = (rightButton: boolean, onPress: any) => {
    if (rightButton === true) {
      return (
        <TouchableOpacity onPress={onPress}>
          <Image source={logout_button} />
        </TouchableOpacity>
      );
    } else {
      return;
    }
  };

  return (
    <View style={styles.headerContainer}>
      <View style={styles.gobackContainer}>
        {renderGoback(leftButtonAvailable, onPressLeftButton)}
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.textTitle}>{title}</Text>
      </View>
      <View style={styles.signoutContainer}>
        {renderSignout(rightButtonAvailable, onPressRightButton)}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    width: '95%',
    justifyContent: 'center',
    alignItems: 'stretch',
    flexDirection: 'row',
    marginTop: windowHeight * 0.03,
  },
  gobackContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signoutContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    flex: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
});

export default Header;