import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  DEFAULT_LANGUAGE,
  LANGUAGE_KEY,
  Language,
  parse,
  stringify,
} from '../constants/languages';
import {useCallback, useEffect, useState} from 'react';

export default function useGetLanguage() {
  const [language, setLanguage] = useState<Language>(DEFAULT_LANGUAGE);

  const setItem = useCallback((lang = DEFAULT_LANGUAGE) => {
    setLanguage(lang);
    AsyncStorage.setItem(LANGUAGE_KEY, stringify(lang));
  }, []);

  useEffect(() => {
    AsyncStorage.getItem(LANGUAGE_KEY).then(val => {
      if (val) {
        setLanguage(parse(val));
      } else {
      }
    });
  }, []);

  return {language, setLanguage: setItem};
}
