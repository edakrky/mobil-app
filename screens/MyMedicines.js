import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

export default function MyMedicines({ route }) {
  const [medicines, setMedicines] = useState([]);

  useEffect(() => {
    if (route.params?.newMedicine) {
      setMedicines(prev => [...prev, route.params.newMedicine]);
    }
  }, [route.params?.newMedicine]);


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
      <Text style={styles.title}>Kayıtlı İlaçlar</Text>
      {medicines.length === 0 ? (
        <Text style={styles.emptyText}>Henüz ilaç kaydedilmedi.</Text>
      ) : (
        <FlatList
          data={medicines}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
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
  },
});
