import React from 'react';
import whatsapp from "../assets/whatsapp-icon.svg";

const Chatbot = () => {
  return (
    <a href='https://wa.me/' target='_blank' className='fixed bottom-4 md:bottom-6.5 right-4 md:right-6 z-100 cursor-pointer'>
      <img src={whatsapp} alt="" className='w-10 md:w-14' />
    </a>
  )
}

export default Chatbot;