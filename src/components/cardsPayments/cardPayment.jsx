// CreditCardForm.jsx
import React from 'react';
import { Form, Row, Col, Button, Image } from 'react-bootstrap';
import assests from '../../assets/assets';
const CreditCardForm = ({ 
  cardDetails, 
  setCardDetails, 
  selectedMonth, 
  setSelectedMonth, 
  selectedYear, 
  setSelectedYear, 
  handlePayment 
}) => {
  return (
    <Form>
      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm={3}>Card Type</Form.Label>
        <Col sm={9} className="d-flex align-items-center">
          <Image 
            src={assests.creditCardIcon} 
            alt="Visa" 
            width="50px"
            className="me-2" 
          />
          <Image 
            src={assests.masterCardIcon} 
            alt="Mastercard"
            width="50px" 
          />
        </Col>
      </Form.Group>
      
      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm={3}>Card Number</Form.Label>
        <Col sm={9}>
          <Form.Control 
            type="text" 
            placeholder="XXXX XXXX XXXX XXXX" 
            value={cardDetails.number}
            onChange={(e) => setCardDetails({...cardDetails, number: e.target.value})}
          />
        </Col>
      </Form.Group>
      
      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm={3}>Name on Card</Form.Label>
        <Col sm={9}>
          <Form.Control 
            type="text" 
            placeholder="Enter name as on card" 
            value={cardDetails.name}
            onChange={(e) => setCardDetails({...cardDetails, name: e.target.value})}
          />
        </Col>
      </Form.Group>
      
      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm={3}>CVV Number</Form.Label>
        <Col sm={9} className="d-flex align-items-center">
          <Form.Control 
            type="text" 
            placeholder="XXX" 
            maxLength="3"
            className="me-2"
            style={{ width: '100px' }}
            value={cardDetails.cvv}
            onChange={(e) => setCardDetails({...cardDetails, cvv: e.target.value})}
          />
          <small className="text-muted">What is CVV number?</small>
        </Col>
      </Form.Group>
      
      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm={3}>Expiry Date</Form.Label>
        <Col sm={9} className="d-flex">
          <Form.Select 
            className="me-2"
            style={{ width: '120px' }}
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
          >
            <option value="">Month</option>
            {Array.from({ length: 12 }, (_, i) => (
              <option key={i+1} value={i+1}>
                {i + 1}
              </option>
            ))}
          </Form.Select>
          <Form.Select 
            style={{ width: '120px' }}
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
          >
            <option value="">Year</option>
            {Array.from({ length: 10 }, (_, i) => (
              <option key={i} value={new Date().getFullYear() + i}>
                {new Date().getFullYear() + i}
              </option>
            ))}
          </Form.Select>
        </Col>
      </Form.Group>
      
      <div className="d-grid gap-2 col-md-6 mx-auto mt-4">
        <Button 
          variant="success"
          onClick={handlePayment}
        >
          Pay Now
        </Button>
      </div>
    </Form>
  );
};

export default CreditCardForm;