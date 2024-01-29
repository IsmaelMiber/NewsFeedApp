import EnglishLocalization from '../localization/english.json';
import FrenchLocalization from '../localization/french.json';
import {useContext} from 'react';
import {LanguageContext} from '../providers/LanguageProvider';

export default function useLocalization() {
  var localization = EnglishLocalization;
  const {language, setLanguage} = useContext(LanguageContext);
  if (language.value === 'fr') {
    localization = FrenchLocalization;
  }
  return {
    language,
    setLanguage,
    localization,
  };
}
