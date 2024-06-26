import {StackNavigationProp} from '@react-navigation/stack';
import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {Producto} from '../models/producto';
import {FlatList} from 'react-native-gesture-handler';
import {HomeProps as producProos} from './Producto';

type RootStackParamList = {
  Home: undefined;
  Produc: producProos;
};
// type HomeScreenProps = StackNavigationProp<RootStackParamList, 'Home'>;
type ProducScreenProps = StackNavigationProp<RootStackParamList, 'Produc'>;
type HomeScreenRoute = RouteProp<RootStackParamList, 'Home'>;

type HomeProps = {
  navigation: ProducScreenProps;
  route: HomeScreenRoute;
};

function Home({navigation}: HomeProps): React.JSX.Element {
  const [product, setProduct] = useState<Producto[]>([]);

  const producItem = ({item}: {item: Producto}) => (
    <TouchableOpacity
      style={style.producItem}
      onPress={() => {
        navigation.navigate('Produc', {producto: item});
      }}>
      <Text style={style.itemTitle}> {item.nombre}</Text>
      <Text style={style.itemDetails}>Precio: {item.precio.toFixed(2)}</Text>
    </TouchableOpacity>
  );

  useEffect(() => {
    setProduct([
      {
        id: 1,
        nombre: 'martillo',
        precio: 80,
        minStock: 5,
        currenStock: 2,
        maxStock: 20,
      },
      {
        id: 2,
        nombre: 'Mangera (metro)',
        precio: 15,
        minStock: 50,
        currenStock: 200,
        maxStock: 1000,
      },
    ]);
  }, []);

  return (
    <SafeAreaView>
      <FlatList
        data={product}
        renderItem={producItem}
        keyExtractor={item => item.id.toString()}
      />
    </SafeAreaView>
  );
}

export default Home;

const style = StyleSheet.create({
  producItem: {
    padding: 12,
    borderBottomColor: '#c0c0c0',
    borderBottomWidth: 1,
    backgroundColor: 'white',
  },

  itemTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  itemDetails: {
    fontSize: 14,
    opacity: 0.7,
  },
});
