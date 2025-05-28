// screens/MyMedicines.js
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function MyMedicines({navigation, route}) {
  const [medicines, setMedicines] = useState([]);
  useEffect(() => {
    if (route.params?.newMedicine) {
      if (!medicines.some(med => med.id === route.params.newMedicine.id)) {
        setMedicines(prev => [...prev, route.params.newMedicine]);
      }
      navigation.setParams({ newMedicine: undefined });
    }
  }, [route.params?.newMedicine, medicines, navigation]);


  const renderItem = ({ item }) => (
    <View style={styles.medicineItem}>
      <Text style={styles.medicineName}>{item.name}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerBar}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => navigation.goBack()}
        >
          <FontAwesome name="arrow-left" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Kayıtlı İlaçlar</Text>
      </View>

      {medicines.length === 0 ? (
        <Text style={styles.emptyText}>Henüz ilaç kaydedilmedi.</Text>
      ) : (
        <FlatList
          data={medicines}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          contentContainerStyle={{ padding: 20 }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerBar: {
    width: '100%',
    height: 100,
    backgroundColor: '#F98239',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Platform.OS === 'ios' ? 50 : 20,
  },
  backBtn: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 50 : 40,
    left: 20,
    zIndex: 2,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
  },
  emptyText: {
    fontSize: 16,
    color: '#777',
    marginTop: 50,
    textAlign: 'center',
  },
  medicineItem: {
    backgroundColor: '#DFF0D8',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
  },
  medicineName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
});