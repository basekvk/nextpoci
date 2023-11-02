import React, { useState, useEffect }  from 'react';
import { AiOutlinePhone } from 'react-icons/ai';

const FloatingButton = () => {
    const phoneNumber = '+34647376782';
    const [isHover, setIsHover] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        const handleResize = () => {
          setIsMobile(window.innerWidth <= 768);
        };
    
        window.addEventListener('resize', handleResize);
        handleResize();
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

    const handleMouseEnter = () => {
        setIsHover(true);
      };
    
      const handleMouseLeave = () => {
        setIsHover(false);
      };

    return (
        <a
            href={`tel:${phoneNumber}`}
            style={{
                textDecoration: 'none',
            }}
            onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
        >
            <button
                style={{
                    
                    position: 'fixed',
                    bottom: isMobile ? 'auto' : '20px',
                    right: isMobile ? 'auto' : '100px',
                    top: isMobile ? '20px' : 'auto',
                    left: isMobile ? '5px' : 'auto',
                    zIndex: 1000,
                    backgroundColor: isHover ? '#00bbb4' : '#003a70', // Fondo negro
                    borderColor: 'white',
                    borderRadius: '50%',
                    width: isMobile ? '45px' :'65px',
                    height: isMobile ? '45px' :'65px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    border: 'none',
                    cursor: 'pointer',
                    border: '1px solid white',
                    
                }}
                onClick={scrollToTop}
            >
                <AiOutlinePhone size={35} color={isHover ? 'black' : '#00bbb4'} />{' '}
                {/* Ícono de teléfono en color #00bbb4 */}
            </button>
        </a>
    );
};

export default FloatingButton;
