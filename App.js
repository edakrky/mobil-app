import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Platform,
} from 'react-native';
import AppNavigator from './navigation/AppNavigator';

export default function App() {
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView
        style={[styles.scroll, Platform.OS === 'web' && styles.webScroll]}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <AppNavigator />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scroll: {
    flex: 1,
  },
  content: {
    flexGrow: 1,
  },
  webScroll: {
    overflowY: 'scroll',
  },
});