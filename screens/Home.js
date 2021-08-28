import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import * as Font from "expo-font";
import { Button } from "react-native-elements";
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import AppLoading from "expo-app-loading";
import { useNavigation } from "@react-navigation/native";
// const background = {
//   uri: "../images/1.png",
// };
//https://i.pinimg.com/originals/59/11/cd/5911cda1f1ae980b26ca367af3197dfd.jpg
const fetchFont = () => {
  return Font.loadAsync({
    "Norican-Regular": require("../assets/fonts/Norican-Regular.ttf"),
    "PermanentMarker-Regular": require("../assets/fonts/PermanentMarker-Regular.ttf"),
    "Dosis-VariableFont_wght": require("../assets/fonts/Dosis-VariableFont_wght.ttf"),
  });
};
export default function Home() {
  const navigation = useNavigation();
  const [fontLoaded, setfontLoaded] = useState(false);
  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFont}
        onFinish={() => setfontLoaded(true)}
        onError={() => console.log("ERROR")}
      />
    );
  } else {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <ImageBackground
          source={require("../images/background.jpg")}
          style={styles.image}
        >
          <StatusBar style="light" />
          <View style={styles.container}>
            <View style={styles.text}>
              <Text
                style={{
                  fontSize: 40,
                  color: "#fff",

                  fontFamily: "PermanentMarker-Regular",
                }}
              >
                care
              </Text>
              <Text
                style={{
                  fontSize: 60,
                  color: "#4DD637",

                  fontFamily: "Norican-Regular",
                }}
              >
                X
              </Text>
            </View>
            <View style={styles.subheading}>
              <Text
                style={{
                  color: "#E5D68A",
                  //   color: "#fff",
                  fontSize: 16,
                  fontFamily: "Dosis-VariableFont_wght",
                  fontWeight: "bold",
                }}
              >
                One app , many sollutions!!
              </Text>
            </View>
            <View style={styles.button}>
              <Button
                title="Let's Start"
                buttonStyle={{
                  paddingLeft: 25,
                  paddingRight: 25,

                  // backgroundColor: "#5A20CB",
                  backgroundColor: "#1FAA59",
                }}
                onPress={() => {
                  navigation.navigate("Collection");
                }}
              />
            </View>
          </View>
        </ImageBackground>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "cover",
  },

  text: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    paddingTop: 40,
    fontWeight: "bold",
  },
});
