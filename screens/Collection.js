import React, { useState } from "react";
import * as Linking from "expo-linking";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { Button } from "react-native-elements";
const fetchFont = () => {
  return Font.loadAsync({
    "PermanentMarker-Regular": require("../assets/fonts/PermanentMarker-Regular.ttf"),
    "Asap-Italic-VariableFont_wght.ttf": require("../assets/fonts/Asap-Italic-VariableFont_wght.ttf"),
  });
};
const cardData = [
  {
    name: "Diabetes",
    subheading: "Predict your chances",
    uri: require("../images/diabetes.jpg"),
    screen: "Diabetes",
  },
  {
    name: "Liver Disease",
    subheading: "Predict your chances",
    uri: require("../images/liver.jpeg"),
    screen: "Liver Disease",
  },
  {
    name: "Chronic Disease",
    subheading: "Predict your chances",
    uri: require("../images/kidney.jpg"),
    screen: "Chronic Disease",
  },
  {
    name: "Heart Attack",
    subheading: "Predict your chances",
    uri: require("../images/heart-attack.jpg"),
    screen: "Heart Attack",
  },
  {
    name: "Anemia",
    subheading: "Predict your chances",
    uri: require("../images/animia.jpg"),
    screen: "Anemia",
  },
];
const Collection = () => {
  const [fontLoaded, setfontLoaded] = useState(false);
  const navigation = useNavigation();
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
      <View
        style={{
          backgroundColor: "#CAD5E2",
          flex: 1,
        }}
      >
        <View
          style={{
            backgroundColor: "#1B98F5",
            height: "30%",
            borderBottomLeftRadius: 30,
            borderBottomRightRadius: 30,
            paddingHorizontal: 30,
          }}
        >
          <Image
            source={require("../images/icon.png")}
            style={{
              height: 20,
              width: 40,
              marginTop: 60,
            }}
          />
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 35,
              width: "100%",
            }}
          >
            <View style={{ flexDirection: "row", width: "50%" }}>
              <Text
                style={{
                  fontSize: 40,
                  color: "#fff",
                  fontFamily: "PermanentMarker-Regular",
                }}
              >
                careX
              </Text>
            </View>
            <View style={{ width: "50%", alignItems: "flex-end" }}>
              <Image
                source={require("../images/logo.png")}
                style={{ height: 50, width: 50 }}
              />
            </View>
          </View>
        </View>
        <View
          style={{
            paddingHorizontal: 20,
            paddingVertical: 15,
            borderBottomWidth: 3,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            width: "80%",
            borderBottomColor: "#3DBE29",
            marginTop: 15,
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontFamily: "Asap-Italic-VariableFont_wght.ttf",
              color: "#000",
            }}
          >
            Our Products
          </Text>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {cardData.map((data, index) => {
            return (
              <TouchableOpacity
                activeOpacity={0.7}
                style={{
                  height: 300,
                  elevation: 2,
                  backgroundColor: "#FFF",
                  marginTop: 30,
                  marginHorizontal: 20,
                  borderRadius: 15,
                  marginBottom: 10,
                  width: 200,
                  backgroundColor: "#bbceed",
                }}
                onPress={() => navigation.navigate(data.screen)}
                key={index}
              >
                <Image
                  source={data.uri}
                  style={{ width: 200, height: 230, borderRadius: 15 }}
                />
                <View
                  style={{
                    flexDirection: "row",
                    paddingHorizontal: 10,
                    paddingTop: 10,
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Text style={{ fontWeight: "bold", fontSize: 17 }}>
                    {data.name}
                  </Text>
                  <AntDesign name="rightcircle" size={24} color="black" />
                </View>
                <Text
                  style={{
                    paddingHorizontal: 10,
                    fontSize: 13,
                    paddingTop: 5,
                  }}
                >
                  {data.subheading}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
        <Button
          title="Read More"
          buttonStyle={{
            paddingVertical: 25,
            backgroundColor: "#1B98F5",
          }}
          onPress={() => {
            Linking.openURL("https://expo.dev");
          }}
        />
      </View>
    );
  }
};

export default Collection;

const styles = StyleSheet.create({});
// // "adaptiveIcon": {
//   "foregroundImage": "./assets/adaptive-icon.png",
//   "backgroundColor": "#FFFFFF"
// }
