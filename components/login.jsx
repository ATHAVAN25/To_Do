import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.bg_color} >
      <View style={styles.container}>
      <Image style={styles.stretch} source={require("../assets/images/login_screen.png")} />
      </View>
       
    
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        /> 
      </View> 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        /> 
      </View> 
      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text> 
      </TouchableOpacity> 
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>LOGIN</Text> 
      </TouchableOpacity> 
    </View> 
  );
}
const styles = StyleSheet.create({
  container: {
    
     paddingLeft: 45,
     paddingRight: 50,
    //justifyContent: 'center',
    alignContent:'center',
    
  },
  bg_color: {
    backgroundColor: '#22E9EC ',
  },
  stretch: {
    width: 200,
    height: 400,
   // resizeMode: 'stretch',
  },
  inputView: {
    backgroundColor: "#B4DCDD",
    borderRadius: 10,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignContent:"center",
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
    
  },
  forgot_button: {
    height: 30,
    marginBottom: 30,
    alignItems:'center'
  },
  loginBtn: {
    width: "45%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#FF1493",
  },
});