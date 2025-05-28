import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {StyleSheet, TouchableOpacity, View, Text, Image, ActivityIndicator,
} from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Boxes } from '../components/Boxes';
import { TopBox } from '../components/TopBox';
import {Logo} from "./Logo";

const healthTips = [
  'Düzenli su içmek vücudun toksinlerden arınmasına yardımcı olur.',
  'Her gün en az 30 dakika yürüyüş yapın.',
  'Renkli sebze ve meyvelerle beslenmek antioksidan alımını artırır.',
  'Yeterli uyku bağışıklık sisteminizi güçlendirir.',
  'Stresi azaltmak için derin nefes egzersizleri uygulayın.',
  'Her öğünde protein ve lif dengesi önemlidir.',
  'Ara öğünlerde kuruyemiş tercih edin.',
  'Dijital detoks, zihinsel sağlığa iyi gelir.',
  'Düzenli doktor kontrolleri erken teşhiste yardımcı olur.',
  'Pozitif düşünce, genel iyiliğinizi artırır.',
];

const PEXELS_API_KEY = 'rRLCVD6GPKoEjSUsnryEcNZJDd2rPz9WnDC5RsCLdTsoTUVLv6567lGb';

export default function Home({ navigation }) {
  const [idx, setIdx] = useState(0);
  const [imageUrl, setImageUrl] = useState(null);
  const [loadingImage, setLoadingImage] = useState(true);

  const next = () => {
    setIdx(i => (i + 1) % healthTips.length);
  };

  const fetchPhoto = async (seed) => {
    try {
      setLoadingImage(true);
      const res = await fetch(
        `https://api.pexels.com/v1/search?query=health&per_page=1&page=${seed + 1}`,
        {
          headers: { Authorization: PEXELS_API_KEY },
        }
      );
      const json = await res.json();
      if (json.photos && json.photos.length > 0) {
        setImageUrl(json.photos[0].src.medium);
      } else {
        setImageUrl(null);
      }
    } catch (err) {
      console.warn('Pexels fetch failed:', err);
      setImageUrl(null);
    } finally {
      setLoadingImage(false);
    }
  };

  useEffect(() => {
    fetchPhoto(idx);
  }, [idx]);

  useEffect(() => {
    const iv = setInterval(next, 5000);
    return () => clearInterval(iv);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.header}>
      <Logo/>
  
<View style={styles.sagUst}>
        <TouchableOpacity
          style={styles.profile}
          onPress={() => navigation.navigate('Profile')}
        >
          <FontAwesome name="user-circle-o" size={40} color="#274C5E"/>
        </TouchableOpacity>
        <Text style={styles.greeting}>Merhaba, Kullanıcı</Text>
</View>

      </View>

      <View style={styles.motivation}>
        <View style={styles.motivationBox}>
          {loadingImage ? (
            <ActivityIndicator size="large" color="#fff" />
          ) : imageUrl ? (
            <Image source={{ uri: imageUrl }} style={styles.image} />
          ) : (
            <View style={[styles.image, styles.imagePlaceholder]}>
              <Text style={styles.placeholderText}>Resim yüklenemedi</Text>
            </View>
          )}

          <Text style={styles.motivationText}>
            {healthTips[idx]}
          </Text>

          <TouchableOpacity style={styles.refreshBtn} onPress={next}>
            <Text style={styles.refreshText}>YENİLE</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.body}>
        <TopBox navigation={navigation} />
        <Boxes navigation={navigation} />
      </View>

      <View style={styles.footer} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 5 },

  header: {
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '2rem',
    paddingLeft: '0.5rem',
    borderBottomWidth: 2,
    borderBottomColor: '#F98239',
  },
  greeting: {
    fontWeight: '600',
    color: '#333',
    fontSize: 12,
    alignItems: "flex-end",
    marginBottom: 40,
  },
  profile: {
    padding: 10,
    marginTop: 35,
    alignItems: "flex-end",
    justifyContent: "center",
  },

  motivation: {
    flex: 3,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '0.5rem'
  },
  motivationBox: {
    backgroundColor: '#F98239',
    height: 300,
    width: '100%',
    borderRadius: 15,
    padding: 10,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 160,
    borderRadius: 10,
    marginBottom: 10,
  },
  imagePlaceholder: {
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderText: {
    color: '#666',
  },
  motivationText: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },

  refreshBtn: {
    marginTop: 12,
    backgroundColor: '#fff',
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 20,
  },

  refreshText: {
    color: '#F98239',
    fontWeight: '600',
  },

  body: {
  flex: 5, 
  backgroundColor: 'grey', 
  width: '100%', 
  marginTop: '2rem' },


  footer: {
  flex: 0.5, 
  backgroundColor: '#fff', 
  width: '100%' },

  sagUst: {
  width: "%100",
  height:"%100",
  justifyContent:"center",
  },
});