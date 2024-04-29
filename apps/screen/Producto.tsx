import {Text} from '@react-native-material/core';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {SafeAreaView} from 'react-native';
import {Producto} from '../models/producto';

// type RootStackParamList = {
//   Produc: undefined;
// };
// type HomeScreenProps = StackNavigationProp<RootStackParamList, 'Produc'>;
// type HomeScreenRoute = RouteProp<RootStackParamList, 'Produc'>;

export type HomeProps = {
  // navigation: HomeScreenProps;
  // route: HomeScreenRoute;
  producto: Producto;
};

const ProductoDetalle = ({
  // navigation,
  producto,
}: HomeProps): React.JSX.Element => {
  return (
    <SafeAreaView>
      <Text>Nombre: {producto.nombre} </Text>
      <Text>presio: {producto.precio} </Text>
      <Text>existenci: {producto.currenStock} </Text>
    </SafeAreaView>
  );
};

export default ProductoDetalle;
