import React from 'react';
import {Text, TouchableOpacity, StyleSheet, TextStyle} from 'react-native';

export interface TextButton {
  title: string;
  titleStyle?: TextStyle;
  onPress?: () => void;
}

const TextButton: React.FC<TextButton> = props => {
  const {title, titleStyle, onPress} = props;
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={[styles.title, titleStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  title: {
    color: '#426AFA',
    fontStyle: 'normal',
    fontSize: 12,
    fontWeight: 'normal',
    position: 'absolute',
    width: 280,
    height: 14,
    left: 174,
    top: 409,
  },
});

export default TextButton;
