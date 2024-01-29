import React, {PropsWithChildren, createContext} from 'react';
import {DEFAULT_LANGUAGE} from '../constants/languages';
import useGetLanguage from '../hooks/useGetLanguage';

const DEFAULT_CONTEXT_VALUE = {
  language: DEFAULT_LANGUAGE,
  setLanguage: () => undefined,
};
export const LanguageContext = createContext(DEFAULT_CONTEXT_VALUE);

export default function LanguageProvider(props: PropsWithChildren) {
  const languageInfo = useGetLanguage();
  return <LanguageContext.Provider value={languageInfo} {...props} />;
}
