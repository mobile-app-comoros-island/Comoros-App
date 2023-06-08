
//I use this file to test some features. replace the App.tsx with this file to test the features on index.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

const MyWeb: React.FC = () => {
  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: 'https://www.openstreetmap.org/' }}
        style={styles.webView}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
  },
  webView: {
    width: '100%',
    height: '100%',
  },
});

export default MyWeb;
