import React from 'react';
import { useTranslation } from 'react-i18next';

function Intro() {
  const { t } = useTranslation();
  
  return (
    <div className='flex-1 overflow-hidden'>
      <p className=''>{t('hello_world')}</p>
    </div>
  );
}

export default Intro;