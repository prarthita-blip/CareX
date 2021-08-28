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
const LiverDisease = () => {
  const [shift, setShift] = useState(false);
  const [gender, setGender] = useState(true);
  const [data, setData] = useState(true);
  const [prediction, setPrediction] = useState(true);
  const [diseased, setDiseased] = useState("");
  const [age, setAge] = useState("");
  const [tb, setTb] = useState("");
  const [db, setDb] = useState("");
  const [ap, setAp] = useState("");
  const [ala, setAla] = useState("");
  const [asa, setAsa] = useState("");
  const [tp, setTp] = useState("");
  const [albumin, setAlbumin] = useState("");
  const [agr, setAgr] = useState("");

  const sendData = () => {
    if (!age || !tb || !db || !ap || !ala || !asa || !tp || !albumin || !agr) {
      return alert("Please Fill all the fields");
    }
    let gndr = 1;
    if (gender) {
      gndr = 1;
    } else {
      gndr = 0;
    }
    if (
      age < 0 ||
      tb < 0 ||
      db < 0 ||
      ap < 0 ||
      ala < 0 ||
      asa < 0 ||
      tp < 0 ||
      albumin < 0 ||
      agr < 0
    ) {
      return alert("Please Write Proper Values");
    }
    setData(false);
    fetch("https://carexserver.herokuapp.com/liver_predict", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        age: parseFloat(age),
        gender: gndr,
        tb: parseFloat(tb),
        db: parseFloat(db),
        ap: parseFloat(ap),
        ala: parseFloat(ala),
        asa: parseFloat(asa),
        tp: parseFloat(tp),
        albumin: parseFloat(albumin),
        agr: parseFloat(agr),
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
                <TextInput
                  label="Total Bilirubin"
                  underlineColor="#1B98F5"
                  theme={{ colors: { primary: "#1B98F5" } }}
                  keyboardType="numeric"
                  onFocus={() => setShift(false)}
                  value={tb}
                  maxLength={4}
                  onChangeText={(value) => {
                    setTb(value);
                  }}
                  style={{
                    backgroundColor: "transparent",
                  }}
                />
                <TextInput
                  label="Direct Bilirubin"
                  underlineColor="#1B98F5"
                  theme={{ colors: { primary: "#1B98F5" } }}
                  keyboardType="numeric"
                  onFocus={() => setShift(false)}
                  value={db}
                  maxLength={4}
                  onChangeText={(value) => {
                    setDb(value);
                  }}
                  style={{
                    backgroundColor: "transparent",
                    marginTop: 10,
                  }}
                />

                <TextInput
                  label="Alkaline Phosphotase"
                  underlineColor="#1B98F5"
                  theme={{ colors: { primary: "#1B98F5" } }}
                  keyboardType="numeric"
                  onFocus={() => setShift(false)}
                  maxLength={4}
                  value={ap}
                  onChangeText={(value) => {
                    setAp(value);
                  }}
                  style={{
                    backgroundColor: "transparent",
                    marginTop: 10,
                  }}
                />
                <TextInput
                  label="Alamine Aminotransferase"
                  underlineColor="#1B98F5"
                  theme={{ colors: { primary: "#1B98F5" } }}
                  keyboardType="numeric"
                  onFocus={() => setShift(true)}
                  maxLength={4}
                  value={ala}
                  onChangeText={(value) => {
                    setAla(value);
                  }}
                  style={{
                    backgroundColor: "transparent",
                    marginTop: 10,
                  }}
                />

                <TextInput
                  label="Aspartate Aminotransferase"
                  underlineColor="#1B98F5"
                  theme={{ colors: { primary: "#1B98F5" } }}
                  keyboardType="numeric"
                  onFocus={() => setShift(true)}
                  maxLength={4}
                  value={asa}
                  onChangeText={(value) => {
                    setAsa(value);
                  }}
                  style={{
                    backgroundColor: "transparent",
                    marginTop: 10,
                  }}
                />
                <TextInput
                  label="Total Protiens"
                  underlineColor="#1B98F5"
                  theme={{ colors: { primary: "#1B98F5" } }}
                  keyboardType="numeric"
                  onFocus={() => setShift(true)}
                  maxLength={3}
                  value={tp}
                  onChangeText={(value) => {
                    setTp(value);
                  }}
                  style={{
                    backgroundColor: "transparent",
                    marginTop: 10,
                  }}
                />
                <TextInput
                  label="Albumin"
                  underlineColor="#1B98F5"
                  theme={{ colors: { primary: "#1B98F5" } }}
                  keyboardType="numeric"
                  onFocus={() => setShift(true)}
                  maxLength={3}
                  value={albumin}
                  onChangeText={(value) => {
                    setAlbumin(value);
                  }}
                  style={{
                    backgroundColor: "transparent",
                    marginTop: 10,
                  }}
                />
                <TextInput
                  label="Albumin and Globulin Ratio"
                  underlineColor="#1B98F5"
                  theme={{ colors: { primary: "#1B98F5" } }}
                  keyboardType="numeric"
                  onFocus={() => setShift(true)}
                  maxLength={3}
                  value={agr}
                  onChangeText={(value) => {
                    setAgr(value);
                  }}
                  style={{
                    backgroundColor: "transparent",
                    marginTop: 10,
                  }}
                />
                <View style={{ height: 150 }}></View>
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
                    setAgr("");
                    setAla("");
                    setAlbumin("");
                    setAp("");
                    setAsa("");
                    setDb("");
                    setGender(true);
                    setAge("");
                    setTb("");
                    setTp("");
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
                    of Liver Disease , Please Contact your doctor.
                  </Text>
                  <Button
                    mode="contained"
                    icon="reload"
                    style={{ backgroundColor: "#4DD637", marginTop: 20 }}
                    onPress={() => {
                      setData(true);
                      setPrediction(true);
                      setDiseased(false);
                      setAgr("");
                      setAla("");
                      setAlbumin("");
                      setAp("");
                      setAsa("");
                      setDb("");
                      setGender(true);
                      setAge("");
                      setTb("");
                      setTp("");
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
                      setAgr("");
                      setAla("");
                      setAlbumin("");
                      setAp("");
                      setAsa("");
                      setDb("");
                      setGender(true);
                      setAge("");
                      setTb("");
                      setTp("");
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

export default LiverDisease;

const styles = StyleSheet.create({});
