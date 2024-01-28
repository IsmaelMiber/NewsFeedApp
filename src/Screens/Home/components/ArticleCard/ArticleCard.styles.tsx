import {StyleSheet} from 'react-native';
import Fonts from '../../../../constants/fonts';

const styles = StyleSheet.create({
  container: {
    height: 300,
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
  },
  img: {
    height: 200,
    width: '100%',
    marginBottom: 8,
  },
  title: {
    fontFamily: Fonts.medium,
    fontSize: 16,
    textAlign: 'left',
    marginHorizontal: 8,
  },
});

export default styles;
