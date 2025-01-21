import { ui, defaultLang } from './ui';


export const getLangFromUrl = (pathname: string) => {
  const lang = pathname.includes('/de') ? 'de' : 'en';
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export const useTranslations = (pathname: string) => {
    const lang = getLangFromUrl(pathname);
    return (key: keyof typeof ui[typeof defaultLang]) => {
      return ui[lang][key] || ui[defaultLang][key];
    }
  }