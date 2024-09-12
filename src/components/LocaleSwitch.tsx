import React from 'react';
import { useTranslation } from 'react-i18next';

function LocaleSwitch() {
  const { i18n } = useTranslation();
  const locale = i18n.resolvedLanguage;

  return (
    <button onClick={() => i18n.changeLanguage(locale === 'ru' ? 'en': 'ru')}>{ locale }</button>
  );
}

export default LocaleSwitch;