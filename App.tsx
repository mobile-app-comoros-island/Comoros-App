import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { WebView } from 'react-native-webview';

// Define the address interface
interface Address {
  id: number;
  address: string;
  lat: number;
  lng: number;
}

// Define the list of addresses
const addresses: Address[] = [
  {
    id: 1,
    address: 'Address 1',
    lat: 12.9715987,
    lng: 77.5945627,
  },
  {
    id: 2,
    address: 'Address 2',
    lat: 12.9641756,
    lng: 77.5929731,
  },
  {
    id: 3,
    address: 'Address 3',
    lat: 12.9737162,
    lng: 77.6141024,
  },
];

export default function App(): JSX.Element {
  // State to keep track of the selected address
  const [selectedAddress, setSelectedAddress] = useState<Address | null>(null);

  // Function to handle address button click
  const handleAddressClick = (address: Address): void => {
    setSelectedAddress(address);
  };

  return (
    <View style={styles.container}>
      <View style={styles.leftColumn}>
        {addresses.map((address) => (
          <TouchableOpacity
            key={address.id}
            style={styles.addressButton}
            onPress={() => handleAddressClick(address)}
          >
            <Text style={styles.addressText}>{address.address}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.rightColumn}>
        {selectedAddress ? (
          <View style={styles.mapContainer}>
            <WebView
              style={styles.map}
              source={{
                uri: `https://www.openstreetmap.org/?mlat=${selectedAddress.lat}&mlon=${selectedAddress.lng}&zoom=16`,
              }}
            />
          </View>
        ) : (
          <Text style={styles.placeholderText}>Select an address</Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  leftColumn: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    padding: 10,
  },
  addressButton: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  addressText: {
    fontSize: 16,
    color: '#333',
  },
  rightColumn: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapContainer: {
    flex: 1,
    alignSelf: 'stretch',
  },
  map: {
    flex: 1,
  },
  placeholderText: {
    fontSize: 18,
    color: '#666',
  },
});
