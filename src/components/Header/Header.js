import React from 'react'
import {
  View, Text
} from 'react-native';
import { styles } from './styles';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Adivina el Numero</Text>
    </View>

  )
}

export default Header