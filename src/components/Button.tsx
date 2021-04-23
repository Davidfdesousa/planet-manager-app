import React from 'react';
import { Text, StyleSheet, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import colors from '../styles/colors';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

export function Button ({ title, ...rest } : ButtonProps) {
  return (
    <>
      {/* <TouchableOpacity style={styles.button} activeOpacity={0.7} {...rest}>
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity> */}
    </>
  );
}

const styles = StyleSheet.create({
  button:{
    height: 56,
    width: 56,
    paddingHorizontal: 10,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    color: "#fff",
    backgroundColor: colors.green
  },
  buttonText:{
    color:colors.white,
    fontSize: 24
  }
})