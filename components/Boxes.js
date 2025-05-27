import React from "react";
import {View, TouchableOpacity, Text, StyleSheet} from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export const Boxes = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.box}>
      <View style={{backgroundColor: "white", height:30, width: 30, justifyContent:"center", alignItems: "center", borderRadius:15}}>
      <AntDesign name="medicinebox" size={20} color="#075F5A"/>
      </View>
        <Text style={styles.text}>İlaçlarım</Text>
      </TouchableOpacity>



      <TouchableOpacity style={styles.box}>
      <View style={{backgroundColor: "white", height:26, width: 26, justifyContent:"center", alignItems: "center", borderRadius:13}}>
      <Entypo name="plus" size={25} color="green" />
      </View>
        <Text style={styles.text}>Yeni İlaç Kaydet</Text>
      </TouchableOpacity>


      <TouchableOpacity style={styles.box}>
      <View style={{backgroundColor: "white", height:28, width: 28, justifyContent:"center", alignItems: "center", borderRadius:14}}> 
      <FontAwesome name="bell-o" size={18} color="#BE5200" />
      </View>
        <Text style={styles.text}>Hatırlatıcı</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    backgroundColor: "#719B9C",
    padding: 20,
    marginVertical: 5,
    borderRadius: 10,
    width: "80%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 60,
  },
  text: {
    fontSize: 18,
    color: "#fff",
    paddingLeft: 5,
    fontWeight: "bold",
  },
});
