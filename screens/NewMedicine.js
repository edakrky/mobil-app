import React, { useState } from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity, Platform, Alert, KeyboardAvoidingView} from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function NewMedicine({ navigation }) {
const [medicineName, setMedicineName] = useState('');

  const handleSaveMedicine = async () => {
    if (!medicineName.trim()) {
      Alert.alert('Lütfen ilaç adını giriniz.');
      return;
    }

    const newMedicine = {
      id: Date.now().toString(),
      name: medicineName.trim(),
    };

    try {
      const storedData = await AsyncStorage.getItem('medicines');
      const parsedData = storedData ? JSON.parse(storedData) : [];
      const updatedData = [...parsedData, newMedicine];
      await AsyncStorage.setItem('medicines', JSON.stringify(updatedData));

      Alert.alert('İlaç başarıyla kaydedildi.', [{text: 'Tamam',onPress: () => {
            navigation.navigate('MyMedicines');
            setMedicineName('');
          },
        },
      ]);
    } catch (error) {
      Alert.alert('Hata', 'İlaç kaydedilemedi.');
      console.error(error);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View style={styles.headerBar}>
        <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
          <FontAwesome name="arrow-left" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Yeni İlaç Ekle</Text>
      </View>

      <View style={styles.formContainer}>
        <Text style={styles.label}>İlaç Adı:</Text>
        <TextInput
          style={styles.input}
          placeholder="Örn: Parol"
          value={medicineName}
          onChangeText={setMedicineName}
          placeholderTextColor="#a0a0a0"
        />

        <TouchableOpacity style={styles.saveBtn} onPress={handleSaveMedicine}>
          <Text style={styles.saveBtnText}>İlacı Kaydet</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
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

  formContainer:{
  flex: 1,
  padding: 20, 
  justifyContent: 'center', 
  alignItems: 'center' },

  label: { 
  fontSize: 18, 
  fontWeight: '600', 
  color: '#333', 
  marginBottom: 10 },

  input: {
  width: '90%',
  height: 50,
  borderWidth: 1,
  borderColor: '#ddd',
  borderRadius: 8,
  paddingHorizontal: 15,
  marginBottom: 20,
  fontSize: 16,
  color: '#333',
  backgroundColor: '#f9f9f9',
  textAlign: 'center',
  },

  saveBtn: {
  backgroundColor: '#58A555',
  paddingVertical: 15,
  paddingHorizontal: 30,
  borderRadius: 10,
  width: '90%',
  alignItems: 'center',
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.2,
  shadowRadius: 3,
  elevation: 5,
  },

  saveBtnText: { 
  color: '#fff',
  fontWeight: 'bold',
  fontSize: 18 },
});
