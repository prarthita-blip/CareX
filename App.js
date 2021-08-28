import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";
import Home from "./screens/Home";
import Collection from "./screens/Collection";
import Diabetes from "./screens/Diabetes";
import LiverDisease from "./screens/LiverDisease";
import HeartAttack from "./screens/HeartAttack";
import Kidney from "./screens/Kidney";
import Animia from "./screens/Animia";
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Collection"
            component={Collection}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Diabetes"
            component={Diabetes}
            options={{
              headerStyle: { backgroundColor: "#1B98F5" },
              headerTintColor: "#fff",
            }}
          />
          <Stack.Screen
            name="Liver Disease"
            component={LiverDisease}
            options={{
              headerStyle: { backgroundColor: "#1B98F5" },
              headerTintColor: "#fff",
            }}
          />

          <Stack.Screen
            name="Heart Attack"
            component={HeartAttack}
            options={{
              headerStyle: { backgroundColor: "#1B98F5" },
              headerTintColor: "#fff",
            }}
          />
          <Stack.Screen
            name="Chronic Disease"
            component={Kidney}
            options={{
              headerStyle: { backgroundColor: "#1B98F5" },
              headerTintColor: "#fff",
            }}
          />
          <Stack.Screen
            name="Anemia"
            component={Animia}
            options={{
              headerStyle: { backgroundColor: "#1B98F5" },
              headerTintColor: "#fff",
            }}
          />
        </Stack.Navigator>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({});
