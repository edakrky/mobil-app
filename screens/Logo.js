import { View, Image, Text, StyleSheet} from "react-native";

export const Logo = () => {
  return (
    <View style={styles.container}>
    <View style={styles.logo}>
 <Image source={require('../assets/log.png')} style={{width: 30, height: 30, borderRadius:15}}/>
    </View>
    <Text style={styles.name}>Edicine</Text>
    </View>
  );
};

const styles = StyleSheet.create({
container: {
width: 150, 
height: 70, 
flexDirection: "row",
alignItems: "center",
},

logo: {
width: 40, 
height: 40, 
backgroundColor: "#498CAD", 
justifyContent: "center", 
alignItems: "center",
borderRadius: 5
},

name: {
fontSize: 25,
fontWeight: "bold",
color: "#498CAD", 
},
});

