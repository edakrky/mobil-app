import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Platform } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function MyMedicines({ navigation, route }) {
  const [medicines, setMedicines] = useState([]);

  useEffect(() => {
    if (route.params?.NewMedicine) {
      setMedicines(prev => [...prev, route.params.NewMedicine]);
    }
  }, [route.params?.NewMedicine]);


  const renderItem = ({ item }) => (
    <View style={styles.medicineItem}>
      <Text style={styles.medicineName}>{item.name}</Text>
      <Text>Dozaj: {item.dosage}</Text>
      <Text>Kullanım: {item.usage}</Text>
      {item.notes ? <Text>Notlar: {item.notes}</Text> : null}
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerBar}>
        <Text style={styles.headerTitle}>İlaçlarım</Text>
      </View>

      <FlatList
        data={medicines}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        contentContainerStyle={{ padding: 20 }}
        ListEmptyComponent={<Text>Henüz ilaç eklenmedi.</Text>}
      />

      <TouchableOpacity
        style={styles.addBtn}
        onPress={() => navigation.navigate('NewMedicine')}
      >
        <FontAwesome name="plus" size={24} color="#fff" />
        <Text style={styles.addBtnText}>Yeni İlaç Kaydet</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  headerBar: {
    width: '100%',
    height: 100,
    backgroundColor: '#F98239',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Platform.OS === 'ios' ? 50 : 20,
  },
  headerTitle: { fontSize: 22, fontWeight: 'bold', color: '#fff' },

  medicineItem: {
    backgroundColor: '#E3F2FD',
    padding: 15,
    marginBottom: 12,
    borderRadius: 10,
  },
  medicineName: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 5,
  },

  addBtn: {
    flexDirection: 'row',
    backgroundColor: '#58A555',
    padding: 15,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },
  addBtnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 10,
  },
});
