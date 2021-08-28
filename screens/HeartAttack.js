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
import { Picker } from "@react-native-picker/picker";
const HeartAttack = () => {
  const [shift, setShift] = useState(false);
  const [gender, setGender] = useState(true);
  const [data, setData] = useState(true);
  const [prediction, setPrediction] = useState(true);
  const [diseased, setDiseased] = useState("");
  const [age, setAge] = useState("");
  const [rbp, setRbp] = useState("");
  const [cholestoral, setCholestoral] = useState("");
  const [fbs, setFbs] = useState("");
  const [recg, setRecg] = useState(0);
  const [mhr, setMhr] = useState("");
  const [eia, setEia] = useState(1);
  const [oldpeak, setOldpeak] = useState("");
  const [slope, setSlope] = useState(0);
  const [mv, setMv] = useState(0);
  const [tstr, setTstr] = useState(0);
  const [cpt, setCpt] = useState("");
  const sendData = () => {
    if (!age || !rbp || !cholestoral || !fbs || !mhr || !oldpeak || !cpt) {
      return alert("Please Fill all the fields");
    }
    let gndr = 1;
    if (parseFloat(fbs) >= 120) {
      setFbs(1);
    } else {
      setFbs(0);
    }
    if (gender) {
      gndr = 1;
    } else {
      gndr = 0;
    }
    if (
      age < 0 ||
      rbp < 0 ||
      cholestoral < 0 ||
      fbs < 0 ||
      recg < 0 ||
      mhr < 0 ||
      oldpeak < 0
    ) {
      return alert("Please Write Proper Values");
    }
    setData(false);
    fetch("https://carexserver.herokuapp.com/heartAttack_predict", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        age: parseFloat(age),
        gender: gndr,
        cpt: parseFloat(cpt),
        rbp: parseFloat(rbp),
        cholestoral: parseFloat(cholestoral),
        fbs: parseFloat(fbs),
        recg: parseFloat(recg),
        mhr: parseFloat(mhr),
        eia: parseFloat(eia),
        oldpeak: parseFloat(oldpeak),
        slope: parseFloat(slope),
        mv: parseFloat(mv),
        tstr: parseFloat(tstr),
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
          // setShift(false);
        }}
      >
        <View style={{ flex: 1, paddingLeft: 20, width: "95%" }}>
          {data ? (
            <>
              <KeyboardAvoidingView behavior="position" enabled={shift}>
                <TextInput
                  label="Age"
                  underlineColor="#1B98F5"
                  theme={{ colors: { primary: "#1B98F5" } }}
                  keyboardType="numeric"
                  onFocus={() => setShift(false)}
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
                <View>
                  <Picker
                    selectedValue={cpt}
                    onValueChange={(itemValue, itemIndex) => setCpt(itemValue)}
                    style={{ marginTop: 10 }}
                  >
                    <Picker.Item label="Chest Pain Type" value="" />
                    <Picker.Item label="Typical Angina" value="0" />
                    <Picker.Item label="Atypical Angina" value="1" />
                    <Picker.Item label="Non-anginal Pain" value="2" />
                    <Picker.Item label="Asymptomatic" value="3" />
                  </Picker>
                </View>

                <TextInput
                  label="Resting Blood Pressure(mmHg)"
                  underlineColor="#1B98F5"
                  theme={{ colors: { primary: "#1B98F5" } }}
                  keyboardType="numeric"
                  onFocus={() => setShift(false)}
                  value={rbp}
                  maxLength={3}
                  onChangeText={(value) => {
                    setRbp(String(value).replace(/[^0-9]/g, ""));
                  }}
                  style={{
                    backgroundColor: "transparent",
                  }}
                />
                <TextInput
                  label="Cholestoral(mg/dl)"
                  underlineColor="#1B98F5"
                  theme={{ colors: { primary: "#1B98F5" } }}
                  keyboardType="numeric"
                  onFocus={() => setShift(false)}
                  value={cholestoral}
                  maxLength={3}
                  onChangeText={(value) => {
                    setCholestoral(String(value).replace(/[^0-9]/g, ""));
                  }}
                  style={{
                    backgroundColor: "transparent",
                    marginTop: 10,
                  }}
                />

                <TextInput
                  label="Fasting Blood Sugar(mg/dl)"
                  underlineColor="#1B98F5"
                  theme={{ colors: { primary: "#1B98F5" } }}
                  keyboardType="numeric"
                  onFocus={() => setShift(false)}
                  maxLength={3}
                  value={fbs}
                  onChangeText={(value) => {
                    setFbs(String(value).replace(/[^0-9]/g, ""));
                  }}
                  style={{
                    backgroundColor: "transparent",
                    marginTop: 10,
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
                  <Text style={{ fontSize: 15 }}>Resting ECG </Text>
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
                      <Text>Normal</Text>
                      <RadioButton
                        value="Male"
                        status={recg === 0 ? "checked" : "unchecked"}
                        onPress={() => {
                          setRecg(0);
                        }}
                        color="#4287f5"
                      />
                    </View>
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <Text>ST-T</Text>
                      <RadioButton
                        value="Female"
                        status={recg === 1 ? "checked" : "unchecked"}
                        onPress={() => {
                          setRecg(1);
                        }}
                        color="#4287f5"
                      />
                    </View>
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <Text>Others</Text>
                      <RadioButton
                        value="Female"
                        status={recg === 2 ? "checked" : "unchecked"}
                        onPress={() => {
                          setRecg(2);
                        }}
                        color="#4287f5"
                      />
                    </View>
                  </View>
                </View>
                <TextInput
                  label="Maximum Heart Rate"
                  underlineColor="#1B98F5"
                  theme={{ colors: { primary: "#1B98F5" } }}
                  keyboardType="numeric"
                  onFocus={() => setShift(true)}
                  maxLength={3}
                  value={mhr}
                  onChangeText={(value) => {
                    setMhr(String(value).replace(/[^0-9]/g, ""));
                  }}
                  style={{
                    backgroundColor: "transparent",
                    marginTop: 10,
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
                  <Text style={{ fontSize: 15 }}>Exercise Induced Angina</Text>
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
                      <Text>Yes</Text>
                      <RadioButton
                        value="0"
                        status={eia ? "checked" : "unchecked"}
                        onPress={() => {
                          setEia(1);
                        }}
                        color="#4287f5"
                      />
                    </View>
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <Text>No</Text>
                      <RadioButton
                        value="Female"
                        status={eia ? "unchecked" : "checked"}
                        onPress={() => {
                          setEia(0);
                        }}
                        color="#4287f5"
                      />
                    </View>
                  </View>
                </View>
                <TextInput
                  label="OldPeak"
                  underlineColor="#1B98F5"
                  theme={{ colors: { primary: "#1B98F5" } }}
                  keyboardType="numeric"
                  onFocus={() => setShift(true)}
                  maxLength={3}
                  value={oldpeak}
                  onChangeText={(value) => {
                    setOldpeak(value);
                  }}
                  style={{
                    backgroundColor: "transparent",
                    marginTop: 10,
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
                  onFocus={() => setShift(false)}
                >
                  <Text style={{ fontSize: 15 }}>Slope</Text>
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
                      <Text>0</Text>
                      <RadioButton
                        value="Male"
                        status={slope === 0 ? "checked" : "unchecked"}
                        onPress={() => {
                          setSlope(0);
                        }}
                        color="#4287f5"
                      />
                    </View>
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <Text>1</Text>
                      <RadioButton
                        value="Female"
                        status={slope === 1 ? "checked" : "unchecked"}
                        onPress={() => {
                          setSlope(1);
                          setShift(false);
                        }}
                        color="#4287f5"
                      />
                    </View>
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <Text>2</Text>
                      <RadioButton
                        value="Female"
                        status={slope === 2 ? "checked" : "unchecked"}
                        onPress={() => {
                          setSlope(2);
                          setShift(false);
                        }}
                        color="#4287f5"
                      />
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginTop: 15,
                    alignItems: "center",
                    paddingHorizontal: 10,
                  }}
                  onFocus={() => setShift(false)}
                >
                  <Text style={{ fontSize: 15 }}>No of Major Vessels</Text>
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
                      <Text>0</Text>
                      <RadioButton
                        value="Male"
                        status={mv === 0 ? "checked" : "unchecked"}
                        onPress={() => {
                          setMv(0);
                          setShift(false);
                        }}
                        color="#4287f5"
                      />
                    </View>
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <Text>1</Text>
                      <RadioButton
                        value="Female"
                        status={mv === 1 ? "checked" : "unchecked"}
                        onPress={() => {
                          setMv(1);
                          setShift(false);
                        }}
                        color="#4287f5"
                      />
                    </View>
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <Text>2</Text>
                      <RadioButton
                        value="Female"
                        status={mv === 2 ? "checked" : "unchecked"}
                        onPress={() => {
                          setMv(2);
                          setShift(false);
                        }}
                        color="#4287f5"
                      />
                    </View>
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <Text>3</Text>
                      <RadioButton
                        value="Female"
                        status={mv === 3 ? "checked" : "unchecked"}
                        onPress={() => {
                          setMv(3);
                          setShift(false);
                        }}
                        color="#4287f5"
                      />
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginTop: 15,
                    alignItems: "center",
                    paddingHorizontal: 10,
                  }}
                  onFocus={() => setShift(false)}
                >
                  <Text style={{ fontSize: 15 }}>Thallium Stress Test</Text>
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
                      <Text>0</Text>
                      <RadioButton
                        value="Male"
                        status={tstr === 0 ? "checked" : "unchecked"}
                        onPress={() => {
                          setTstr(0);
                          setShift(false);
                        }}
                        color="#4287f5"
                      />
                    </View>
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <Text>1</Text>
                      <RadioButton
                        value="Female"
                        status={tstr === 1 ? "checked" : "unchecked"}
                        onPress={() => {
                          setTstr(1);
                          setShift(false);
                        }}
                        color="#4287f5"
                      />
                    </View>
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <Text>2</Text>
                      <RadioButton
                        value="Female"
                        status={tstr === 2 ? "checked" : "unchecked"}
                        onPress={() => {
                          setTstr(2);
                          setShift(false);
                        }}
                        color="#4287f5"
                      />
                    </View>
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <Text>3</Text>
                      <RadioButton
                        value="Female"
                        status={tstr === 3 ? "checked" : "unchecked"}
                        onPress={() => {
                          setTstr(3);
                          setShift(false);
                        }}
                        color="#4287f5"
                      />
                    </View>
                  </View>
                </View>

                <View style={{ height: 100 }}></View>
              </KeyboardAvoidingView>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-around",
                  marginTop: -50,
                  marginBottom: 30,
                }}
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
                    setAge("");
                    setCholestoral("");
                    setEia("");
                    setFbs("");
                    setGender(true);
                    setMhr("");
                    setMv(0);
                    setOldpeak("");
                    setRbp("");
                    setRecg(0);
                    setSlope(0);
                    setTstr(0);
                    setCpt(0);
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
                    of Heart Attack , Please Contact your doctor.
                  </Text>
                  <Button
                    mode="contained"
                    icon="reload"
                    style={{ backgroundColor: "#4DD637", marginTop: 20 }}
                    onPress={() => {
                      setData(true);
                      setPrediction(true);
                      setDiseased(false);
                      setAge("");
                      setCholestoral("");
                      setEia("");
                      setFbs("");
                      setGender(true);
                      setMhr("");
                      setMv(0);
                      setOldpeak("");
                      setRbp("");
                      setRecg(0);
                      setSlope(0);
                      setTstr(0);
                      setCpt(0);
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
                      setAge("");
                      setCholestoral("");
                      setEia("");
                      setFbs("");
                      setGender(true);
                      setMhr("");
                      setMv(0);
                      setOldpeak("");
                      setRbp("");
                      setRecg(0);
                      setSlope(0);
                      setTstr(0);
                      setCpt(0);
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

export default HeartAttack;

const styles = StyleSheet.create({});
