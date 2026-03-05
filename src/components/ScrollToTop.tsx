import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useLayoutEffect(() => {
    if (hash) return;
    
    // Force scroll to top on all possible scroll containers
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    
    // Also target #root in case it's the scroll container
    const root = document.getElementById('root');
    if (root) root.scrollTop = 0;
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
