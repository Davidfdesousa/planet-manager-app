import React from 'react';
import { 
  StyleSheet, 
  SafeAreaView, 
  View, 
  Text,
  Image
} from 'react-native';

import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import colors from '../styles/colors';
import userImg from  '../assets/david.jpeg'
import fonts from '../styles/fonts';

export function Header() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Olá,</Text>
        <Text style={styles.subtitle}>David</Text>
      </View>

      <Image style={styles.image} source={userImg} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: { 
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center', 
    paddingHorizontal: 30,
    marginTop: getStatusBarHeight(),
  
  },
  title:{
    fontSize: 32,
    color: colors.heading,
    fontFamily: fonts.text
  },
  subtitle: {
    fontSize: 32,
    fontFamily: fonts.heading,
    color: colors.heading,
    lineHeight: 40
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35
  }
})