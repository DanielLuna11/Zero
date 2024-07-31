import React from 'react';
import { View, Text, FlatList, Image, Button, StyleSheet } from 'react-native';

import controlImage from '../image/2057.jpg';
import audifonosImage from '../image/audi.jpeg';
import gamePassImage from '../image/gjh2mrscw5kripyjinps.jpg';
import xboxXImage from '../image/xbox.jpg';
import seriesImage from '../image/series.jpg';

const products = [
  {
    id: '1',
    name: 'Control',
    price: 850,
    description: 'Control inalámbrico edición Fortnite',
    image: controlImage,
  },
  {
    id: '2',
    name: 'Audífonos',
    price: 150,
    description: 'Audifonos inalambricos xbox ',
    image: audifonosImage,
  },
  {
    id: '3',
    name: 'Xbox Game Pass Ultimate',
    price: 200,
    description: 'Membresia de 3 meses de xbox game pass ultimate',
    image: gamePassImage,
  },
  {
    id: '4',
    name: 'Xbox Series X',
    price: 250,
    description: 'Consola xbox series X de 1tb',
    image: xboxXImage,
  },
  {
    id: '5',
    name: 'Xbox Series S',
    price: 300,
    description: 'Consola xbox series S de 512gb',
    image: seriesImage,
  },
];

const ProductList = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.productContainer}>
            <Image source={item.image} style={styles.productImage} />
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productPrice}>Precio: ${item.price}</Text>
            <Button
              title="Ver Detalles"
              onPress={() => navigation.navigate('ProductDetails', { product: item })}
            />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  productContainer: {
    marginBottom: 16,
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 2,
  },
  productImage: {
    width: '100%',
    height: 250,
    marginBottom: 8,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 16,
    marginBottom: 8,
  },
});

export default ProductList;
