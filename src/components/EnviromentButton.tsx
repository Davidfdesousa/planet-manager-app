import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import {
  RectButton,
  RectButtonProperties
} from 'react-native-gesture-handler';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface EnviromentButtonProps extends RectButtonProperties {
  title: string;
  active?: boolean;
}

export function EnviromentButton({
  title,
  active = false,
  ...rest
} : EnviromentButtonProps) {
  return (
    <RectButton
      style={[
        styles.container,
        active && styles.containerActive
      ]}
      {...rest}
    >
      <Text style={[
        styles.textButton,
        active && styles.textButtonActive 
        ]}>
        {title}
      </Text>
    </RectButton>

  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.shape,
    width: 76,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    marginHorizontal: 5
  },
  containerActive: {
    backgroundColor: colors.green_light,
  },
  textButton: {
    color: colors.heading,
    fontFamily: fonts.text
  },
  textButtonActive: {
    color: colors.green_dark,
    fontFamily: fonts.heading,
  }
})