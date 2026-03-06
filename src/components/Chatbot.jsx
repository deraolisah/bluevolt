import React, { useEffect, useState } from 'react';
import whatsapp from "../assets/whatsapp-icon.svg";

const Chatbot = () => {
  const [showChatbot, setShowChatbot] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowChatbot(true);
      } else {
        setShowChatbot(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {showChatbot && (
        <a
          href='https://wa.me/13828857447'
          target='_blank'
          rel="noopener noreferrer"
          className='fixed bottom-4 md:bottom-6.5 right-4 md:right-6 z-80 cursor-pointer'
        >
          <img src={whatsapp} alt="WhatsApp Chat" className='w-12 md:w-14' />
        </a>
      )}
    </>
  );
};

export default Chatbot;
