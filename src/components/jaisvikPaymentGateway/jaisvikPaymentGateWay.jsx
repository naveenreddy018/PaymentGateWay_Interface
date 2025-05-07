
// MainPaymentGateway.jsx
import React, { useState } from 'react';
import { Container, Row, Col, Card, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import all components
import PaymentHeader from '../paymentHeader/paymentHeader';
import AmountBar from '../amountBar/amountBar';
import PaymentMethodSidebar from '../paymentMethods/PaymnetMethods';
import CreditCardForm from '../cardsPayments/cardPayment';
import UpiPaymentForm from '../upiPayments/upiPayments';
import NetBankingForm from '../netBanking/netBanking';
import PaymentFooter from '../payFooter/payFooter';

const JaisvikPaymentGateway = ({ amount = "106.00", transactionId = "38" }) => {
  // State management
  const [selectedOption, setSelectedOption] = useState('Credit Card');
  const [upiId, setUpiId] = useState('');
  const [userUpi, setUserUpi] = useState('');
  const [bank, setBank] = useState('');
  const [cardDetails, setCardDetails] = useState({ number: '', name: '', expiry: '', cvv: '' });
  const [message, setMessage] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [paymentAmount] = useState(amount);

  // Primary color for consistency
  const primaryColor = '#0078BE';
  
  // Handle payment function
  const handlePayment = () => {
    setShowAlert(true);
    
    switch (selectedOption) {
      case 'UPI':
        if (!upiId) return setMessage('Please enter your UPI ID.');
        return setMessage(`Processing UPI Payment with ID: ${upiId} for ₹${paymentAmount}`);
      case 'Credit Card':
      case 'Debit Card':
        if (!cardDetails.number || !selectedMonth || !selectedYear || !cardDetails.cvv)
          return setMessage('Please fill all card details.');
        return setMessage(`Processing Card Payment of ₹${paymentAmount}...`);
      case 'Net Banking':
        if (!bank) return setMessage('Please select your bank.');
        return setMessage(`Processing Net Banking through ${bank} for ₹${paymentAmount}`);
      default:
        return;
    }
  };

  // Function to render the appropriate payment form
  const renderPaymentForm = () => {
    if (selectedOption === 'UPI') {
      return (
        <UpiPaymentForm 
          upiId={upiId}
          setUpiId={setUpiId}
          userUpi={userUpi}
          setUserUpi={setUserUpi}
          handlePayment={handlePayment}
          paymentAmount={paymentAmount}
        />
      );
    } else if (selectedOption === 'Credit Card' || selectedOption === 'Debit Card') {
      return (
        <CreditCardForm 
          cardDetails={cardDetails}
          setCardDetails={setCardDetails}
          selectedMonth={selectedMonth}
          setSelectedMonth={setSelectedMonth}
          selectedYear={selectedYear}
          setSelectedYear={setSelectedYear}
          handlePayment={handlePayment}
        />
      );
    } else if (selectedOption === 'Net Banking') {
      return (
        <NetBankingForm 
          bank={bank}
          setBank={setBank}
          handlePayment={handlePayment}
        />
      );
    } else {
      return (
        <div className="text-center py-5 text-muted">
          Sign in to your Jaisvik Pay account to proceed
        </div>
      );
    }
  };

  return (
    <Container className="my-4" style={{ maxWidth: '900px' }}>
      <Card className="border shadow-sm">
        {/* Header */}
        <PaymentHeader primaryColor={primaryColor} />
        
        {/* Amount Bar */}
        <AmountBar 
          paymentAmount={paymentAmount} 
          transactionId={transactionId} 
          primaryColor={primaryColor} 
        />
        
        <Row className="g-0">
          {/* Sidebar with payment options */}
          <Col md={3} className="border-end">
            <PaymentMethodSidebar 
              selectedOption={selectedOption} 
              setSelectedOption={setSelectedOption} 
            />
          </Col>
          
          {/* Payment Form Content */}
          <Col md={9}>
            <Card.Body className="p-4">
              <h4>Choose a payment method</h4>
              
              {renderPaymentForm()}
              
              {showAlert && (
                <Alert 
                  variant="primary" 
                  className="mt-4"
                  onClose={() => setShowAlert(false)} 
                  dismissible
                >
                  {message}
                </Alert>
              )}
              
              <div className="text-center mt-5">
                <small className="d-block text-primary mb-2">
                  Note: In the next step you will be redirected to your bank's website to verify yourself.
                </small>
                
                <div>or Go back to <a href="#">www.example.com</a></div>
              </div>
            </Card.Body>
          </Col>
        </Row>
        
        {/* Footer */}
        <PaymentFooter />
      </Card>
    </Container>
  );
};

export default JaisvikPaymentGateway;