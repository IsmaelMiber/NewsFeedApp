import {StyleSheet} from 'react-native';
import Fonts from '../../constants/fonts';

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingBottom: 150,
  },
  searchInput: {
    marginBottom: 20,
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    fontFamily: Fonts.bold,
    fontSize: 16,
  },
});

export default styles;
