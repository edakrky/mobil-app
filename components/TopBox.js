import React from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  useWindowDimensions
} from 'react-native';

export const TopBox = () => {
  const { width: screenWidth } = useWindowDimensions();

  const totalPad = 7 * 2 + 10;
  const dynamicW = (screenWidth - totalPad) / 2;
  const cardWidth = Math.min(dynamicW, 191);

  const assets = [
    require('../assets/Tansiyon Bilgileri.png'),
    require('../assets/Uyku Düzeni.png')
  ];

  return (
    <View style={styles.container}>
      {assets.map((src, i) => (
        <TouchableOpacity
          key={i}
          style={[styles.card, { width: cardWidth }]}
        >
          <Image
            source={src}
            style={styles.image}
            resizeMode="contain"
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 7,
    paddingVertical: 10,
    justifyContent: 'space-between',
    backgroundColor: '#fff',
  },
  card: {
    backgroundColor: '#EAEAEA',
    borderRadius: 10,
    aspectRatio: 230 / 260,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  image: {
    width: '90%',
    height: '90%',
  },
});