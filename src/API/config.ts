import Axios from 'axios';
import {Alert} from 'react-native';

Axios.defaults.baseURL = 'https://newsapi.org/v2';
Axios.defaults.params = {
  apiKey: '0dde9d0a263a4f7c9cfe9cbbc9d42691',
};
Axios.defaults.timeout = 3000;

const axios = Axios.create();

export function errorHandler(message: string) {
  switch (message) {
    case 'ERR_NETWORK':
    case 'Network Error':
      Alert.alert('Attention', 'Please check your internet.');
      break;
    case 'ERR_BAD_RESPONSE':
    case 'ERR_BAD_REQUEST':
      Alert.alert('Attention', 'Please try again by swiping down.');
      break;
    case 'ECONNABORTED':
    case 'ETIMEDOUT':
      Alert.alert('Attention', 'Something went wrong, please try again later');
      break;
  }
}

export default axios;
