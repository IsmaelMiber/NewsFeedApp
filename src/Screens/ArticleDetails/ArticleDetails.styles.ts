import {StyleSheet} from 'react-native';
import Fonts from '../../constants/fonts';

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    fontFamily: Fonts.bold,
    fontSize: 22,
    textAlign: 'left',
    marginVertical: 10,
  },
  desc: {
    fontFamily: Fonts.regular,
    fontSize: 16,
    textAlign: 'left',
    marginTop: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  publishedAt: {
    fontFamily: Fonts.medium,
    fontSize: 12,
    textAlign: 'left',
  },
  author: {
    fontFamily: Fonts.bold,
    fontSize: 12,
    textAlign: 'left',
  },
  img: {
    height: 200,
    width: '100%',
    marginTop: 10,
  },
});

export default styles;
