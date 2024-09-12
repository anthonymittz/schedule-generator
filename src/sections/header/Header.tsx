import React from 'react';
import { useTranslation } from 'react-i18next';
import LocaleSwitch from '../../components/LocaleSwitch';

function Header() {
  const { t } = useTranslation();
  return (
    <header className='flex justify-between align-middle h-fit px-4 py-2'>
      <div id='brand' className='text-xl font-bold'>{t('app_name')}</div>
      <div className=''>
        <LocaleSwitch />
      </div>
    </header>
  );
}

export default Header;