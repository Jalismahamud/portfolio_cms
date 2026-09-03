import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * react-router doesn't reset scroll position between route changes on its
 * own. Without this, navigating to a new page (e.g. a project card click)
 * while scrolled down on the previous page lands the user mid-page instead
 * of at the top. Skips the reset when a hash is present so in-page anchor
 * navigation (e.g. "/#blog") isn't fought.
 */
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
