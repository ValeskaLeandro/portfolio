// Styles
import { ButtonTop } from './styled';

// Hooks
import { useState, useEffect, useCallback } from 'react';

// Utilities
import { AiOutlineArrowUp } from 'react-icons/ai';

const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = useCallback(() => {
    setShowButton(window.scrollY > 0);
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]); 

  return (
    <ButtonTop
      onClick={scrollToTop}
      className={showButton ? 'show_button' : ''}
    >
      <AiOutlineArrowUp size={20} />
    </ButtonTop>
  );
};

export default ScrollToTop;
