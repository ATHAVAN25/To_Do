import { Text, View, StatusBar } from "react-native";
import { Stack } from "expo-router";
import Login from './../components/login'


export default function Index() {
  return (
 
      <View>

        {/* <StatusBar hidden={true} /> */}
        <Login/>

      </View>
  
    );
}
