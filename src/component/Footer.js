import React from 'react';
import { useStateContext } from '../Context/ContextProvider';

const Footer = () => {
  const {currentMode} = useStateContext()
  const cb = currentMode === 'Dark' ? 'text-bg-dark' : 'text-bg-light'

  return(
  <div className={cb}>
    <p className={cb}>
      © 2022 All rights reserved by OmShoppy.com
    </p>
  </div>
  )
};

export default Footer;