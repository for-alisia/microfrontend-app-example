import { mount } from 'marketing/App';
import React, { useRef, useEffect } from 'react';

const MarketingApp = () => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current);
  }, [])

  return <div ref={ref} />;
};

export default MarketingApp;