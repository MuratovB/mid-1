import { useLanguageContext } from '../context/LanguageContext';

export const useLanguage = () => {
  const { language, toggleLanguage } = useLanguageContext();
  return { language, toggleLanguage };
};