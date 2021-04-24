import React, { useState } from "react";
import {
  View,
  SafeAreaView,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions
} from "react-native";

import { Feather } from '@expo/vector-icons'

import wateringImg from "../assets/watering.png";
import colors from "../styles/colors";
import fonts from "../styles/fonts";


export function Welcome() {

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>
          Gerencie {"\n"}
          suas plantas de{"\n"}
          forma fácil
        </Text>

        <Image
          source={wateringImg}
          style={styles.image}
          resizeMode={"contain"}
        />

        <Text style={styles.subtitle}>
          Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você
          sempre que precisar.
        </Text>

        <TouchableOpacity style={styles.button} activeOpacity={0.7}>
          <Text>
            <Feather name="chevron-right" style={styles.buttonIcon} />
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper:{
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: 20
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    fontFamily: fonts.heading,
    lineHeight: 34,
    textAlign: "center",
    color: colors.heading,
    marginTop: 38
  },
  subtitle:{
    textAlign: "center",
    fontSize: 18,
    fontFamily: fonts.text,
    paddingHorizontal: 20,
    color: colors.heading
  },
  image:{
    height: Dimensions.get("window").width * 0.7
  },
  button:{
    height: 56,
    width: 56,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
 
    color: "#fff",
    backgroundColor: colors.green
  },
  buttonIcon:{
    color:colors.white,
    fontSize: 24
  },

})
