import React, { useEffect, useState } from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity, Alert, Platform} from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function MyMedicines({ navigation }) {
  const [medicines, setMedicines] = useState([]);

  useEffect(() => {
    const loadMedicines = async () => {
      try {
        const storedData = await AsyncStorage.getItem('medicines');
        const parsedData = storedData ? JSON.parse(storedData) : [];
        setMedicines(parsedData);
      } catch (error) {
        console.error('Veriler alınamadı', error);
      }
    };

    const unsubscribe = navigation.addListener('focus', loadMedicines);
    return unsubscribe;
  }, [navigation]);

  const deleteMedicine = (id) => {
    Alert.alert(
      "Bu ilacı silmek istediğinize emin misiniz?",
      [{ text: "İptal", style: "cancel" },
        {
          text: "Sil", style: "destructive", onPress: async () => {
            try {
              const filtered = medicines.filter((item) => item.id !== id);
              await AsyncStorage.setItem('medicines', JSON.stringify(filtered));
              setMedicines(filtered);
            } catch (error) {
              console.error('Silme hatası:', error);
            }
          }
        }
      ]
    );
  };

  const renderItem = ({ item }) => (
    <View style={styles.medicineItem}>
      <Text style={styles.medicineName}>{item.name}</Text>
      <TouchableOpacity onPress={() => deleteMedicine(item.id)}>
        <FontAwesome name="trash" size={22} color="#B00020" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerBar}>
        <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
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
  container: { flex: 1, backgroundColor: '#fff' },
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
  color: '#fff' },

  emptyText: { 
  fontSize: 16, 
  color: '#777', 
  marginTop: 50, 
  textAlign: 'center' },

  medicineItem: {
  backgroundColor: '#DFF0D8',
  borderRadius: 10,
   padding: 15,
  marginBottom: 15,
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  },

  medicineName: { 
  fontSize: 18,
  fontWeight: 'bold', 
  color: '#333' },
});
