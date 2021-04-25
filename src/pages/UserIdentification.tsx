import React, { useState } from 'react';
import { 
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform
} from 'react-native'

import colors from '../styles/colors';
import fonts from '../styles/fonts';

import { Button } from '../components/Button';
import { useNavigation } from '@react-navigation/core';

export function UserIdentification () {

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState (false);
  const [name, setName] = useState <string>();

  function handleInputBlur () {
    setIsFocused(false);
    setIsFilled(!!name);
  }

  function handleInputFocus () {
    setIsFocused(true);
  }

  function handleInputChange (value:string) {
    setIsFilled(!!value);
    setName(value);
  }
  const navigation = useNavigation();

  function handleSubmit (){
    navigation.navigate("Confirmation");
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.content}>
            <View style={styles.form}>
              <>
                <Text style={styles.emoji}>{isFilled ? "😄" : "😀"}</Text>
                <Text style={styles.title}>
                  Como podemos {"\n"} chamar você?
                </Text>
              </>
              <TextInput
                style={[
                  styles.input,
                  (isFocused || isFilled) && { borderColor: colors.green },
                ]}
                placeholder="Digite um nome"
                onBlur={handleInputBlur}
                onFocus={handleInputFocus}
                onChangeText={handleInputChange}
              />

              <View style={styles.wrapperButton}>
                <Button title={"Confirmar"} onPress={handleSubmit} />
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-around",
  },
  content: {
    flex: 1,
    width: "100%",
  },
  title:{
    fontSize: 24,
    lineHeight: 32,
    textAlign: 'center',
    color: colors.heading,
    fontFamily: fonts.heading,
    marginTop: 20
  },
  form: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 54,
  },
  emoji:{
    fontSize: 44
  },
  input:{
    borderBottomWidth: 1,
    borderColor: colors.gray,
    color: colors.heading,
    width: '100%',
    fontSize: 18,
     marginTop: 50,
     padding: 10,
     textAlign: 'center'
  },
  wrapperButton:{
    width: '90%',
    marginTop: 40
  }
});