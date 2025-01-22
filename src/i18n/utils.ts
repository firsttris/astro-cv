import { translations, defaultLang } from './translations';

export type LocaType = keyof (typeof translations)[typeof defaultLang];

export const getLangFromUrl = (pathname: string) => {
  const lang = pathname.includes('/de') ? 'de' : 'en';
  if (lang in translations) return lang as keyof typeof translations;
  return defaultLang;
}

export const useTranslations = (pathname: string) => {
    const lang = getLangFromUrl(pathname);
    return (key: keyof typeof translations[typeof defaultLang]) => {
      return translations[lang][key] || translations[defaultLang][key];
    }
  }