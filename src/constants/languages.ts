export const LANGUAGE_KEY = 'SELECTED_LANGUAGE';
export const DEFAULT_LANGUAGE = {label: 'English', value: 'us'};

export const languages = [DEFAULT_LANGUAGE, {label: 'française', value: 'fr'}];

export type Language = (typeof languages)[0];

export function stringify(languageObj: Language) {
  return JSON.stringify(languageObj);
}

export function parse(languageObj: string) {
  return JSON.parse(languageObj);
}
