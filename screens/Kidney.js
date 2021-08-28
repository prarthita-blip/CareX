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
const Kidney = () => {
  const [shift, setShift] = useState(false);
  const [data, setData] = useState(true);
  const [prediction, setPrediction] = useState(true);
  const [diseased, setDiseased] = useState("");
  const [age, setAge] = useState("");
  const [bp, setBp] = useState("");
  const [sg, setSg] = useState("");
  const [albumin, setAlbumin] = useState("");
  const [sugar, setSugar] = useState("");
  const [bgr, setBgr] = useState("");
  const [urea, setUrea] = useState("");
  const [sc, setSc] = useState("");
  const [sodium, setSodium] = useState("");
  const [potassium, setPotassium] = useState("");
  const [haemoglobin, setHaemoglobin] = useState("");
  const [pcv, setPcv] = useState("");
  const [wbc, setWbc] = useState("");
  const [rbcc, setRbcc] = useState("");
  const [apetite, setApetite] = useState(0);
  const [hypertension, setHypertension] = useState(1);
  const [pc, setPc] = useState(1);
  const [bacteria, setBacteria] = useState(1);
  const [pcc, setPcc] = useState(1);
  const [dm, setDm] = useState(1);
  const [cad, setCad] = useState(1);
  const [pe, setPe] = useState(1);
  const [animia, setAnimia] = useState(1);
  const [rbc, setRbc] = useState(1);
  const sendData = () => {
    if (
      !age ||
      !bp ||
      !sg ||
      !albumin ||
      !sugar ||
      !bgr ||
      !urea ||
      !sc ||
      !sodium ||
      !potassium ||
      !haemoglobin ||
      !pcv ||
      !wbc ||
      !rbcc
    ) {
      return alert("Please Fill all the fields");
    }
    if (
      age < 0 ||
      bp < 0 ||
      sg < 0 ||
      albumin < 0 ||
      sugar < 0 ||
      bgr < 0 ||
      urea < 0 ||
      sc < 0 ||
      sodium < 0 ||
      potassium < 0 ||
      haemoglobin < 0 ||
      pcv < 0 ||
      wbc < 0 ||
      rbcc < 0
    ) {
      return alert("Please Write Proper Values");
    }
    setData(false);
    fetch("https://carexserver.herokuapp.com/kidney_predict", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        age: parseFloat(age),
        bp: parseFloat(bp),
        sg: parseFloat(sg),
        albumin: parseFloat(albumin),
        sugar: parseFloat(sugar),
        rbc: parseFloat(rbc),
        pc: parseFloat(pc),
        pcc: parseFloat(pcc),
        bacteria: parseFloat(bacteria),
        bgr: parseFloat(bgr),
        urea: parseFloat(urea),
        sc: parseFloat(sc),
        sodium: parseFloat(sodium),
        potassium: parseFloat(potassium),
        haemoglobin: parseFloat(haemoglobin),
        pcv: parseFloat(pcv),
        wbc: parseFloat(wbc),
        rbcc: parseFloat(rbcc),
        hypertension: parseFloat(hypertension),
        dm: parseFloat(dm),
        cad: parseFloat(cad),
        apetite: parseFloat(apetite),
        pe: parseFloat(pe),
        animia: parseFloat(animia),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data === 0) {
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
          setShift(false);
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
                  }}
                />
                <TextInput
                  label="Specific Gravity"
                  underlineColor="#1B98F5"
                  theme={{ colors: { primary: "#1B98F5" } }}
                  keyboardType="numeric"
                  onFocus={() => setShift(false)}
                  value={sg}
                  maxLength={4}
                  onChangeText={(value) => {
                    setSg(value);
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
                  onFocus={() => setShift(false)}
                  maxLength={1}
                  value={albumin}
                  onChangeText={(value) => {
                    setAlbumin(String(value).replace(/[^0-9]/g, ""));
                  }}
                  style={{
                    backgroundColor: "transparent",
                    marginTop: 10,
                  }}
                />
                <TextInput
                  label="Sugar"
                  underlineColor="#1B98F5"
                  theme={{ colors: { primary: "#1B98F5" } }}
                  keyboardType="numeric"
                  onFocus={() => setShift(false)}
                  maxLength={1}
                  value={sugar}
                  onChangeText={(value) => {
                    setSugar(String(value).replace(/[^0-9]/g, ""));
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
                  <Text style={{ fontSize: 15 }}>Red Blood Cells</Text>
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
                        status={rbc === 1 ? "checked" : "unchecked"}
                        onPress={() => {
                          setRbc(1);
                        }}
                        color="#4287f5"
                      />
                    </View>
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <Text>Abnormal</Text>
                      <RadioButton
                        value="Female"
                        status={rbc === 0 ? "checked" : "unchecked"}
                        onPress={() => {
                          setRbc(0);
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
                >
                  <Text style={{ fontSize: 15 }}>Pus Cells</Text>
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
                        status={pc === 1 ? "checked" : "unchecked"}
                        onPress={() => {
                          setPc(1);
                        }}
                        color="#4287f5"
                      />
                    </View>
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <Text>Abnormal</Text>
                      <RadioButton
                        value="Female"
                        status={pc === 0 ? "checked" : "unchecked"}
                        onPress={() => {
                          setPc(0);
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
                >
                  <Text style={{ fontSize: 15 }}>Pus Cell Clums</Text>
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
                      <Text>Present</Text>
                      <RadioButton
                        value="Male"
                        status={pcc === 1 ? "checked" : "unchecked"}
                        onPress={() => {
                          setPcc(1);
                        }}
                        color="#4287f5"
                      />
                    </View>
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <Text>Not Present</Text>
                      <RadioButton
                        value="Female"
                        status={pcc === 0 ? "checked" : "unchecked"}
                        onPress={() => {
                          setPcc(0);
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
                >
                  <Text style={{ fontSize: 15 }}>Bacteria</Text>
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
                      <Text>Present</Text>
                      <RadioButton
                        value="Male"
                        status={bacteria === 1 ? "checked" : "unchecked"}
                        onPress={() => {
                          setBacteria(1);
                        }}
                        color="#4287f5"
                      />
                    </View>
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <Text>Not Present</Text>
                      <RadioButton
                        value="Female"
                        status={bacteria === 0 ? "checked" : "unchecked"}
                        onPress={() => {
                          setBacteria(0);
                        }}
                        color="#4287f5"
                      />
                    </View>
                  </View>
                </View>
                <TextInput
                  label="Blood Glucose Random"
                  underlineColor="#1B98F5"
                  theme={{ colors: { primary: "#1B98F5" } }}
                  keyboardType="numeric"
                  onFocus={() => setShift(false)}
                  maxLength={3}
                  value={bgr}
                  onChangeText={(value) => {
                    setBgr(String(value).replace(/[^0-9]/g, ""));
                  }}
                  style={{
                    backgroundColor: "transparent",
                    marginTop: 10,
                  }}
                />
                <TextInput
                  label="Urea"
                  underlineColor="#1B98F5"
                  theme={{ colors: { primary: "#1B98F5" } }}
                  keyboardType="numeric"
                  onFocus={() => setShift(false)}
                  maxLength={3}
                  value={urea}
                  onChangeText={(value) => {
                    setUrea(value);
                  }}
                  style={{
                    backgroundColor: "transparent",
                    marginTop: 10,
                  }}
                />
                <TextInput
                  label="Serum Creatinin"
                  underlineColor="#1B98F5"
                  theme={{ colors: { primary: "#1B98F5" } }}
                  keyboardType="numeric"
                  onFocus={() => setShift(false)}
                  maxLength={3}
                  value={sc}
                  onChangeText={(value) => {
                    setSc(value);
                  }}
                  style={{
                    backgroundColor: "transparent",
                    marginTop: 10,
                  }}
                />
                <TextInput
                  label="Sodium"
                  underlineColor="#1B98F5"
                  theme={{ colors: { primary: "#1B98F5" } }}
                  keyboardType="numeric"
                  onFocus={() => setShift(false)}
                  maxLength={3}
                  value={sodium}
                  onChangeText={(value) => {
                    setSodium(String(value).replace(/[^0-9]/g, ""));
                  }}
                  style={{
                    backgroundColor: "transparent",
                    marginTop: 10,
                  }}
                />
                <TextInput
                  label="Potassium"
                  underlineColor="#1B98F5"
                  theme={{ colors: { primary: "#1B98F5" } }}
                  keyboardType="numeric"
                  onFocus={() => setShift(false)}
                  maxLength={3}
                  value={potassium}
                  onChangeText={(value) => {
                    setPotassium(value);
                  }}
                  style={{
                    backgroundColor: "transparent",
                    marginTop: 10,
                  }}
                />
                <TextInput
                  label="Haemoglobin"
                  underlineColor="#1B98F5"
                  theme={{ colors: { primary: "#1B98F5" } }}
                  keyboardType="numeric"
                  onFocus={() => setShift(false)}
                  maxLength={1}
                  value={haemoglobin}
                  onChangeText={(value) => {
                    setHaemoglobin(value);
                  }}
                  style={{
                    backgroundColor: "transparent",
                    marginTop: 10,
                  }}
                />
                <TextInput
                  label="Packed Cell Volume"
                  underlineColor="#1B98F5"
                  theme={{ colors: { primary: "#1B98F5" } }}
                  keyboardType="numeric"
                  onFocus={() => setShift(false)}
                  maxLength={2}
                  value={pcv}
                  onChangeText={(value) => {
                    setPcv(String(value).replace(/[^0-9]/g, ""));
                  }}
                  style={{
                    backgroundColor: "transparent",
                    marginTop: 10,
                  }}
                />
                <TextInput
                  label="White Blood Cell Count"
                  underlineColor="#1B98F5"
                  theme={{ colors: { primary: "#1B98F5" } }}
                  keyboardType="numeric"
                  onFocus={() => setShift(false)}
                  maxLength={5}
                  value={wbc}
                  onChangeText={(value) => {
                    setWbc(String(value).replace(/[^0-9]/g, ""));
                  }}
                  style={{
                    backgroundColor: "transparent",
                    marginTop: 10,
                  }}
                />
                <TextInput
                  label="Red Blood Cell Count"
                  underlineColor="#1B98F5"
                  theme={{ colors: { primary: "#1B98F5" } }}
                  keyboardType="numeric"
                  onFocus={() => setShift(false)}
                  maxLength={3}
                  value={rbcc}
                  onChangeText={(value) => {
                    setRbcc(value);
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
                  <Text style={{ fontSize: 15 }}>Hypertension</Text>
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
                        value="1"
                        status={hypertension ? "checked" : "unchecked"}
                        onPress={() => {
                          setHypertension(1);
                        }}
                        color="#4287f5"
                      />
                    </View>
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <Text>No</Text>
                      <RadioButton
                        value="0"
                        status={hypertension ? "unchecked" : "checked"}
                        onPress={() => {
                          setHypertension(0);
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
                >
                  <Text style={{ fontSize: 15 }}>Diabetes Melitus</Text>
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
                        value="1"
                        status={dm ? "checked" : "unchecked"}
                        onPress={() => {
                          setDm(1);
                        }}
                        color="#4287f5"
                      />
                    </View>
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <Text>No</Text>
                      <RadioButton
                        value="0"
                        status={dm ? "unchecked" : "checked"}
                        onPress={() => {
                          setDm(0);
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
                >
                  <Text style={{ fontSize: 15 }}>Coronary Artery Disease</Text>
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
                        value="1"
                        status={cad ? "checked" : "unchecked"}
                        onPress={() => {
                          setCad(1);
                        }}
                        color="#4287f5"
                      />
                    </View>
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <Text>No</Text>
                      <RadioButton
                        value="0"
                        status={cad ? "unchecked" : "checked"}
                        onPress={() => {
                          setCad(0);
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
                >
                  <Text style={{ fontSize: 15 }}>Apetite</Text>
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
                      <Text>Good</Text>
                      <RadioButton
                        value="1"
                        status={!apetite ? "checked" : "unchecked"}
                        onPress={() => {
                          setApetite(0);
                        }}
                        color="#4287f5"
                      />
                    </View>
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <Text>Poor</Text>
                      <RadioButton
                        value="1"
                        status={!apetite ? "unchecked" : "checked"}
                        onPress={() => {
                          setApetite(1);
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
                >
                  <Text style={{ fontSize: 15 }}>Pedal Edema</Text>
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
                        value="1"
                        status={pe ? "checked" : "unchecked"}
                        onPress={() => {
                          setPe(1);
                        }}
                        color="#4287f5"
                      />
                    </View>
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <Text>No</Text>
                      <RadioButton
                        value="1"
                        status={pe ? "unchecked" : "checked"}
                        onPress={() => {
                          setPe(0);
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
                >
                  <Text style={{ fontSize: 15 }}>Anemia</Text>
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
                        value="1"
                        status={animia ? "checked" : "unchecked"}
                        onPress={() => {
                          setAnimia(1);
                        }}
                        color="#4287f5"
                      />
                    </View>
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <Text>No</Text>
                      <RadioButton
                        value="1"
                        status={animia ? "unchecked" : "checked"}
                        onPress={() => {
                          setAnimia(0);
                        }}
                        color="#4287f5"
                      />
                    </View>
                  </View>
                </View>

                <View style={{ height: 50 }}></View>
              </KeyboardAvoidingView>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-around",
                  // marginTop: -50,
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
                    setBp("");
                    setSg("");
                    setAlbumin("");
                    setAlbumin("");
                    setSugar("");
                    setRbc(1);
                    setPc(1);
                    setPcc(1);
                    setBacteria(1);
                    setBgr("");
                    setUrea("");
                    setSc("");
                    setSodium("");
                    setPotassium("");
                    setHaemoglobin("");
                    setPcv("");
                    setWbc("");
                    setRbcc("");
                    setHypertension(1);
                    setDm(1);
                    setCad(1);
                    setApetite(0);
                    setPe(1);
                    setAnimia(1);
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
                    of Chronic Disease , Please Contact your doctor.
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
                      setBp("");
                      setSg("");
                      setAlbumin("");
                      setAlbumin("");
                      setSugar("");
                      setRbc(1);
                      setPc(1);
                      setPcc(1);
                      setBacteria(1);
                      setBgr("");
                      setUrea("");
                      setSc("");
                      setSodium("");
                      setPotassium("");
                      setHaemoglobin("");
                      setPcv("");
                      setWbc("");
                      setRbcc("");
                      setHypertension(1);
                      setDm(1);
                      setCad(1);
                      setApetite(0);
                      setPe(1);
                      setAnimia(1);
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
                      setBp("");
                      setSg("");
                      setAlbumin("");
                      setAlbumin("");
                      setSugar("");
                      setRbc(1);
                      setPc(1);
                      setPcc(1);
                      setBacteria(1);
                      setBgr("");
                      setUrea("");
                      setSc("");
                      setSodium("");
                      setPotassium("");
                      setHaemoglobin("");
                      setPcv("");
                      setWbc("");
                      setRbcc("");
                      setHypertension(1);
                      setDm(1);
                      setCad(1);
                      setApetite(0);
                      setPe(1);
                      setAnimia(1);
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

export default Kidney;

const styles = StyleSheet.create({});
