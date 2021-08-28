import React, { useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  Image,
} from "react-native";
import { ActivityIndicator, Button } from "react-native-paper";
import { TextInput } from "react-native-paper";
import { RadioButton } from "react-native-paper";
const Diabetes = () => {
  const [shift, setShift] = useState(false);
  const [gender, setGender] = useState(false);
  const [glucose, setGlucose] = useState("");
  const [pregnancies, setPregnancies] = useState("");
  const [bp, setBp] = useState("");
  const [bmi, setBmi] = useState("");
  const [dpf, setDpf] = useState("");
  const [age, setAge] = useState("");
  const [data, setData] = useState(true);
  const [prediction, setPrediction] = useState(true);
  const [diseased, setDiseased] = useState("");
  const sendData = () => {
    if (dpf > 1 || bmi < 0 || dpf < 0) {
      return alert("Please Write Proper Values");
    }
    if (!glucose || !bp || !bmi || !dpf || !age) {
      return alert("Please Fill all the fields");
    }
    if (!gender && !pregnancies) {
      return alert("Please Fill all the fields");
    }
    if (gender) {
      setPregnancies(0);
    }
    setData(false);
    fetch("https://carexserver.herokuapp.com/diabetes_predict", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        pregnancies: parseFloat(pregnancies),
        glucose: parseFloat(glucose),
        bp: parseFloat(bp),
        bmi: parseFloat(bmi),
        dpf: parseFloat(dpf),
        age: parseFloat(age),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data === 1) {
          setDiseased(true);

          setPrediction(false);
        } else {
          setDiseased(false);
          setPrediction(false);
        }

        console.log(data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <ScrollView style={{ backgroundColor: "#CAD5E2" }}>
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}
      >
        <View style={{ flex: 1, paddingLeft: 20, width: "95%" }}>
          {data ? (
            <>
              <KeyboardAvoidingView behavior="position" enabled={shift}>
                <TextInput
                  label="Glucose"
                  underlineColor="#1B98F5"
                  theme={{ colors: { primary: "#1B98F5" } }}
                  keyboardType="numeric"
                  onFocus={() => setShift(false)}
                  style={{
                    backgroundColor: "transparent",
                    marginTop: 10,
                  }}
                  value={glucose}
                  maxLength={3}
                  onChangeText={(value) => {
                    setGlucose(String(value).replace(/[^0-9]/g, ""));
                  }}
                />
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginTop: 15,
                    alignItems: "center",
                    paddingHorizontal: 10,
                  }}
                >
                  <Text style={{ fontSize: 15 }}>Gender</Text>
                  <View
                    style={{
                      flexDirection: "row",
                    }}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        paddingLeft: 10,
                      }}
                    >
                      <Text>Male</Text>
                      <RadioButton
                        value="Male"
                        status={gender ? "checked" : "unchecked"}
                        onPress={() => {
                          setGender(true);
                        }}
                        color="#4287f5"
                      />
                    </View>
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <Text>Female</Text>
                      <RadioButton
                        value="Female"
                        status={gender ? "unchecked" : "checked"}
                        onPress={() => {
                          setGender(false);
                        }}
                        color="#4287f5"
                      />
                    </View>
                  </View>
                </View>
                {gender ? (
                  <Text></Text>
                ) : (
                  <TextInput
                    label="Pregnancies"
                    underlineColor="#1B98F5"
                    theme={{ colors: { primary: "#1B98F5" } }}
                    keyboardType="numeric"
                    value={pregnancies}
                    maxLength={2}
                    onChangeText={(value) => {
                      setPregnancies(String(value).replace(/[^0-9]/g, ""));
                    }}
                    onFocus={() => setShift(false)}
                    style={{
                      backgroundColor: "transparent",
                      marginTop: 10,
                    }}
                  />
                )}

                <TextInput
                  label="Blood Pressure"
                  underlineColor="#1B98F5"
                  theme={{ colors: { primary: "#1B98F5" } }}
                  keyboardType="numeric"
                  onFocus={() => setShift(false)}
                  value={bp}
                  maxLength={3}
                  onChangeText={(value) => {
                    setBp(String(value).replace(/[^0-9]/g, ""));
                  }}
                  style={{
                    backgroundColor: "transparent",
                    marginTop: 10,
                  }}
                />

                <TextInput
                  label="BMI"
                  underlineColor="#1B98F5"
                  theme={{ colors: { primary: "#1B98F5" } }}
                  keyboardType="numeric"
                  onFocus={() => setShift(true)}
                  value={bmi}
                  maxLength={4}
                  onChangeText={(value) => {
                    setBmi(value);
                  }}
                  style={{
                    backgroundColor: "transparent",
                    marginTop: 10,
                  }}
                />
                <TextInput
                  label="Diabetes Predigree Function (0-1)"
                  underlineColor="#1B98F5"
                  theme={{ colors: { primary: "#1B98F5" } }}
                  keyboardType="numeric"
                  onFocus={() => setShift(true)}
                  value={dpf}
                  maxLength={4}
                  onChangeText={(value) => {
                    setDpf(value);
                  }}
                  style={{
                    backgroundColor: "transparent",
                    marginTop: 10,
                  }}
                />

                <TextInput
                  label="Age"
                  underlineColor="#1B98F5"
                  theme={{ colors: { primary: "#1B98F5" } }}
                  keyboardType="numeric"
                  onFocus={() => setShift(true)}
                  value={age}
                  maxLength={2}
                  onChangeText={(value) => {
                    setAge(String(value).replace(/[^0-9]/g, ""));
                  }}
                  style={{
                    backgroundColor: "transparent",
                    marginTop: 10,
                  }}
                />
                <View style={{ height: 150 }}></View>
              </KeyboardAvoidingView>
              <View
                style={{ flexDirection: "row", justifyContent: "space-around" }}
              >
                <Button
                  mode="contained"
                  icon="lightbulb-on"
                  style={{ backgroundColor: "#4DD637" }}
                  onPress={sendData}
                >
                  Predict
                </Button>
                <Button
                  mode="contained"
                  icon="delete"
                  style={{ backgroundColor: "#E21717" }}
                  onPress={() => {
                    setGlucose("");
                    setGender(false);
                    setPregnancies("");
                    setBp("");
                    setBmi("");
                    setDpf("");
                    setAge("");
                  }}
                >
                  Reset
                </Button>
              </View>
            </>
          ) : (
            <>
              {prediction ? (
                <View
                  style={{
                    flex: 1,
                    flexDirection: "column",
                    alignItems: "center",
                    marginTop: "100%",
                  }}
                >
                  <Text>Please Wait</Text>
                  <ActivityIndicator size="large" color="#1B98F5" />
                </View>
              ) : diseased ? (
                <View
                  style={{
                    paddingVertical: 20,
                    alignItems: "center",
                    marginTop: 50,
                  }}
                >
                  <Image
                    source={require("../images/danger.png")}
                    style={{ height: 250, width: 250 }}
                  />
                  <Text style={{ fontSize: 17 }}>
                    You have{" "}
                    <Text style={{ fontWeight: "bold" }}>High Probability</Text>{" "}
                    of Diabetes , Please Contact your doctor.
                  </Text>
                  <Button
                    mode="contained"
                    icon="reload"
                    style={{ backgroundColor: "#4DD637", marginTop: 20 }}
                    onPress={() => {
                      setData(true);
                      setPrediction(true);
                      setDiseased(false);
                      setGlucose("");
                      setGender(false);
                      setPregnancies("");
                      setBp("");
                      setBmi("");
                      setDpf("");
                      setAge("");
                    }}
                  >
                    Retry
                  </Button>
                </View>
              ) : (
                <View
                  style={{
                    paddingVertical: 20,
                    alignItems: "center",
                    marginTop: 50,
                  }}
                >
                  <Image
                    source={require("../images/safe.png")}
                    style={{ height: 250, width: 250 }}
                  />
                  <Text style={{ fontSize: 17 }}>
                    <Text style={{ fontWeight: "bold" }}>
                      Congratulations!!!!
                    </Text>{" "}
                    You are Safe!!!
                  </Text>
                  <Button
                    mode="contained"
                    icon="reload"
                    style={{ backgroundColor: "#4DD637", marginTop: 20 }}
                    onPress={() => {
                      setData(true);
                      setPrediction(true);
                      setDiseased(false);
                      setGlucose("");
                      setGender(false);
                      setPregnancies("");
                      setBp("");
                      setBmi("");
                      setDpf("");
                      setAge("");
                    }}
                  >
                    Retry
                  </Button>
                </View>
              )}
            </>
          )}
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
};

export default Diabetes;

const styles = StyleSheet.create({});
