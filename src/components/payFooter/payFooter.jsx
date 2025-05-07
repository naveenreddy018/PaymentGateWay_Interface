
// PaymentFooter.jsx
import React from 'react';
import { Card, Image } from 'react-bootstrap';
import assests from '../../assets/assets';

const PaymentFooter = () => {
  const securityBadges = ['Verified by Visa', 'MasterCard SecureCode', 'Norton Secured', 'PCI', 'RuPay'];
  
  return (
    <Card.Footer className="bg-light p-3">
      <small className="d-block text-center mb-3">
        <strong>Note:</strong> Making Payment on Jaisvik is 100% safe. Your transaction is processed through a secure https internet connection based on secure socket layer technology.
      </small>
      
      <div className="d-flex justify-content-center gap-3">
        {securityBadges.map((badge) => (
          <img 
            key={badge}
            src={assests.creditCardIcon}
            alt={badge} 
            height="35" 
            className="opacity-75" 
          />
        ))}
      </div>
    </Card.Footer>
  );
};

export default PaymentFooter;   