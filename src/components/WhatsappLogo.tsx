import React from "react";

const WhatsAppLogo = () => {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=972506726345" 
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-50"
    >
      <img
        src="/whatsapp-icon.png"
        alt="WhatsApp Logo"
        className="h-12 w-12"
      />
    </a>
  );
};

export default WhatsAppLogo;
