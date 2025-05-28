import {View,Text,TouchableOpacity,StyleSheet,Image,Platform} from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { TextInput } from 'react-native';
import React, { useState } from 'react';


export default function Profile({ navigation }) {

const [name, setName] = useState("");
const [surname, setSurname] = useState("");
const [age, setAge] = useState("");
const [kilo, setKilo] = useState("");
const [boy, setBoy] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.headerBar} />

      <TouchableOpacity
        style={styles.backBtn}
        onPress={() => navigation.goBack()}
      >
        <FontAwesome name="arrow-left" size={24} color="#fff" />
      </TouchableOpacity>

      <Image
        source={{ uri: 'https://media.licdn.com/dms/image/v2/D4D03AQGe05QVxfNDwA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1701111638551?e=1753920000&v=beta&t=sQsrAnJRoxYOChxm9VJ6F-4WJa89P-C3V38Z_8FJT4M' }}
        style={styles.profileImage}
      />

      <Text style={styles.name}>{name} {surname}</Text>

      <View style={styles.infoRow}>
        <FontAwesome6 name="hand-holding-medical" size={18} color="#555" />
        <Text style={styles.infoText}>
          Lütfen Bilgilerinizi Giriniz
        </Text> 
    </View>

<TextInput style={styles.InfBox} placeholder="AD"value={name} onChangeText={(e) => setName(e.toUpperCase())} placeholderTextColor={"#6B5D4E"} maxLength={15}/>


<TextInput style={styles.InfBox} placeholder="SOYAD"value={surname} onChangeText={(e) => setSurname(e.toUpperCase())} placeholderTextColor={"#6B5D4E"} maxLength={15}/>

<TextInput style={styles.InfBox} placeholder="YAŞ" placeholderTextColor="#6B5D4E" keyboardType="numeric" value={age} onChangeText={setAge}
/>

<TextInput style={styles.InfBox} placeholder="KİLO" placeholderTextColor="#6B5D4E" keyboardType="numeric" value={kilo} onChangeText={setKilo}
/>

<TextInput style={styles.InfBox} placeholder="BOY" placeholderTextColor="#6B5D4E" keyboardType="numeric" value={boy} onChangeText={setBoy}
/>

<TouchableOpacity
  style={{ backgroundColor: "#58A555", padding: 12, borderRadius: 10}}
  onPress={() => {
    console.log("AD:", name);
    console.log("SOYAD:", surname);
    console.log("YAŞ:", age);
    console.log("BOY:", height);
    console.log("KİLO:", weight);
  }}
>
  <Text style={{ color: '#fff', fontWeight: 'bold' }}>Kaydet</Text>
</TouchableOpacity>

</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  headerBar: {
    width: '100%',
    height: 120,
    backgroundColor: '#F98239',
  },
  backBtn: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 50 : 40,
    left: 20,
    zIndex: 2,
  },
  profileImage: {
    width: 120,
    height: 140,
    borderRadius: 60,
    borderWidth: 4,
    borderColor: '#fff',
    marginTop: -60,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 12,
    color: '#333',
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  infoText: {
    marginLeft: 8,
    fontSize: 16,
    color: '#555',
  },

  InfBox: {
  height: 50,
  width: 200,
  borderRadius: 10,
  borderWidth: 2,
  padding: 15,
  margin: 20,
  },

  footer: {
  width: "100%", 
  height:"100%", 
  backgroundColor: "pink",
  alignItems: "center",
  justifyContent: "center",
  },
});