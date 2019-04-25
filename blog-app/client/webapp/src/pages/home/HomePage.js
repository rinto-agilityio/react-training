import React, { memo } from 'react';

//component
import Header from '../../components/header/Header'

//style
import './HomePageStyle.css'

const HomePage = () => {
  return (
    <div className='container'>
      <Header />
    </div>
  )
}

export default memo(HomePage);
