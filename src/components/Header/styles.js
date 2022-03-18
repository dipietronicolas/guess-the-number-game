import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    height: 150,
    backgroundColor: colors.lightPrimary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    color: 'whitesmoke',
    fontFamily: 'OpenSans-Bold',
  }
})