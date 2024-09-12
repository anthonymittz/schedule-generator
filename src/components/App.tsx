import React from 'react';
import { useTranslation } from 'react-i18next';

function App() {
  const {t} = useTranslation();
  return (
    <div className='text-3xl font-bold underline'>
      <h1>App</h1>
      <p>{t('hello_world')}</p>
    </div>
  );
}

export default App;