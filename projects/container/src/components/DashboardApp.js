import { mount } from 'dashboard/App';
import React, { useRef, useEffect } from 'react';

const AuthApp = ({ onSignin }) => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current);
  }, [])

  return <div ref={ref} />;
};

export default AuthApp;