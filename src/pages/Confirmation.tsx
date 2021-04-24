import React from 'react';
import { 
  SafeAreaView,
  View,
  Text,
  StyleSheet
} from 'react-native';

import { Button } from '../components/Button';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function Confirmation () {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.emoji}>😁</Text>
        <Text style={styles.title}>Prontinho</Text>

        <Text style={styles.subTitle}>
          Agora vamos começar a cuidar das suas {"\n"}
          plantinhas com muito cuidado.
        </Text>

        <View style={styles.wrapperButton}>
          <Button title={"Começar"} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    padding: 30,
  },
  emoji: {
    fontSize: 78,
    textAlign: "center",
    paddingBottom: 50,
  },
  title: {
    fontSize: 24,
    lineHeight: 30,
    textAlign: "center",
    fontFamily: fonts.heading,
    color: colors.heading,
  },
  subTitle: {
    fontSize: 17,
    color: colors.heading,
    fontFamily: fonts.text,
    textAlign: "center",
    paddingTop: 20,
    paddingBottom: 40,
  },
  wrapperButton: {
    width: "50%",
  },
});
