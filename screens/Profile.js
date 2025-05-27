import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Platform,
} from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function Profile({ navigation }) {
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

      <Text style={styles.name}>Eda Karakaya</Text>

      <View style={styles.infoRow}>
        <FontAwesome name="graduation-cap" size={18} color="#555" />
        <Text style={styles.infoText}>
          Yıldız Technical University
        </Text>
      </View>
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
    height: 120,
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
});