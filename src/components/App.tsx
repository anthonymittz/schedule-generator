import React from 'react';
import Header from '../sections/header/Header';
import Intro from './Intro';

function App() {  
  return (
    <div className='flex flex-col items-stretch h-screen overflow-hidden'>
      <Header />
      <Intro />
    </div>
  );
}

export default App;