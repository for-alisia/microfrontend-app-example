import { mount } from 'marketing/App';
import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const MarketingApp = () => {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      onNavigate: ({ pathname: nextPathName }) => {
        if (history.location.pathname === nextPathName) return;
        history.push(nextPathName);
      },
      initialPath: history.location.pathname,
    });

    history.listen(onParentNavigate);
  }, [])

  return <div ref={ref} />;
};

export default MarketingApp;