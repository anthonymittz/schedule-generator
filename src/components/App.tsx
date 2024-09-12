import React from 'react';
import { useTranslation } from 'react-i18next';
import LocaleSwitch from './LocaleSwitch';

function App() {
  const { t, i18n } = useTranslation();

  console.log(i18n.resolvedLanguage);
  // i18n.changeLanguage("en");
  
  return (
    <div className='text-3xl font-bold underline'>
      <h1>App</h1>
      <LocaleSwitch />
      <p>{t('hello_world')}</p>
    </div>
  );
}

export default App;