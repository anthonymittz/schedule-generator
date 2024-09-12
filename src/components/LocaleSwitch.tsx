import React from 'react';
import { useTranslation } from 'react-i18next';

function LocaleSwitch() {
  const { i18n } = useTranslation();
  const locale = i18n.resolvedLanguage;

  return <button 
    className='py-1 px-2 bg-slate-300 hover:bg-slate-400 active:bg-slate-500 rounded-md' 
    onClick={() => i18n.changeLanguage(locale === 'ru' ? 'en': 'ru')}>
      { locale }
  </button>;
}

export default LocaleSwitch;