import {StyleSheet} from 'react-native';
import Fonts from '../../constants/fonts';

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  label: {
    fontFamily: Fonts.bold,
    fontSize: 22,
    textAlign: 'left',
  },
  dropdown: {
    padding: 10,
    marginTop: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  dropdownContainer: {
    borderRadius: 8,
  },
});

export default styles;
