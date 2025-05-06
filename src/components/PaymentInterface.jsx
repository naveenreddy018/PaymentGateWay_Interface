import React, { useState } from 'react';
import { Grid, TextField, InputAdornment } from '@mui/material';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGooglePay } from "@fortawesome/free-brands-svg-icons";
import Button from 'react-bootstrap/Button';

import {
  Container,
  Card,
  Form,

  Col,
  Row,
  Alert,
} from 'react-bootstrap';
import './Payment.css';
import AmountQr from './qrCode/qrCode';
import PopularBanks from './netBanking/netBanking';

const PaymentOptions = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [upiId, setUpiId] = useState('');
  const [bank, setBank] = useState('');
  const [cardDetails, setCardDetails] = useState({ number: '', expiry: '', cvv: '' });
  const [message, setMessage] = useState('');
  const [userUpi, setuserUpi] = useState('')



  const handlePayment = () => {
    switch (selectedOption) {
      case 'UPI':
        if (!upiId) return setMessage('Please enter your UPI ID.');
        return setMessage(`Processing UPI Payment with ID: ${upiId}`);
      case 'Card':
        if (!cardDetails.number || !cardDetails.expiry || !cardDetails.cvv)
          return setMessage('Please fill all card details.');
        return setMessage('Processing Card Payment...');
      case 'NetBanking':
        if (!bank) return setMessage('Please select your bank.');
        return setMessage(`Processing Net Banking through ${bank}`);
      default:
        return;
    }
  };

  return (
    <Container className="payment-container">
      <Card className="payment-card">
        <h4 className="mb-4 payment-header">Payment Options</h4>
        <Form>
          <Form.Check
            type="radio"
            label="UPI"
            checked={selectedOption === 'UPI'}
            onChange={() => setSelectedOption('UPI')}
            className="payment-option"
          />
          {/* <FontAwesomeIcon icon={faGooglePay} size="2x" /> */}
          {/* <Form.Check
              type="radio"
  
              checked={selectedOption === 'UPI'}
              onChange={() => setSelectedOption('UPI')}
              className="payment-option"
            />
          <FontAwesomeIcon icon={faGooglePay} size="2x" />
          <label htmlFor="upi-option" className="mb-0">UPI</label> */}
          {selectedOption === 'UPI' && (
            <div className="upi-display mt-3">
              <Row className="upi_container">
                <Form.Group as={Col} xs={12} md={6} className="mb-3">
                  <div className='upi-select'>
                    <Form.Check
                      type="radio"
                      label="Your UPI ID"
                      checked={userUpi === 'User-id'}
                      onChange={() => setuserUpi('User-id')}
                      className="payment-option"
                    />

                    <Grid className="enterUpi" container spacing={2}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          variant="outlined"
                          label="Enter UPI ID"
                          id="upi-input"
                          InputProps={{
                            endAdornment: (
                              <InputAdornment
                                position="end"
                                className='verify_status'
                                style={{ cursor: 'pointer', userSelect: 'none' }}
                                onClick={() => { /* handleVerify() */ }}
                              >
                                <span style={{ color: '#042526', fontWeight: 500 }}>
                                  Verify
                                </span>
                              </InputAdornment>
                            ),
                          }}
                        />

                      </Grid>
                    </Grid>


                    <Button variant="primary">Pay Now</Button>

                  </div>
                </Form.Group>

                <div className='scanner-Container'>
                  <Col xs={10} md={4} className="text-center mb-3">
                    <span className='scanHere' >
                      Scan Here
                    </span>
                  </Col>
                  <hr className='scanLine' />
                  <Col xs={10} md={4} className="text-center mb-3">
                    {/* <img
                  src={assests.qrcodeImage}
                  alt="QR Code"
                  className="img-fluid qr-image"
                /> */}

                    <AmountQr />
                  </Col>

                </div>

              </Row>
            </div>
          )}


          <Form.Check
            type="radio"
            label="Credit / Debit / ATM Card"
            className="payment-option"
            checked={selectedOption === 'Card'}
            onChange={() => setSelectedOption('Card')}
          />
          {selectedOption === 'Card' && (
            <div className="payment-input mt-3">
              <Form.Control
                className="mb-2 cardNumber-Container"
                placeholder="Card Number"
                type="text"
                value={cardDetails.number}
                onChange={(e) =>
                  setCardDetails({ ...cardDetails, number: e.target.value })
                }
                required
              />
              <Row >
                <Row>
                  <div className='cardDetailsContainer'>
                    <Grid className="enterUpi" container spacing={2}>
                      <Grid item xs={6} sm={3}>
                        <TextField
                          fullWidth
                          variant="outlined"
                          label="MM/YY"
                          id="upi-input"
                        />

                      </Grid>
                    </Grid>

                    <Grid className="enterUpi" container spacing={2}>
                      <Grid item xs={6} sm={3}>
                        <TextField
                          fullWidth
                          variant="outlined"
                          label="CVV"
                          id="upi-input"
                        />

                      </Grid>
                    </Grid>

                  </div>

                </Row>

              </Row>
              <Button className='cardPay' variant="primary">Pay Now</Button>
            </div>
          )}


          <Form.Check
            type="radio"
            label="Net Banking"
            className="payment-option"
            checked={selectedOption === 'NetBanking'}
            onChange={() => setSelectedOption('NetBanking')}
          />
          {selectedOption === 'NetBanking' && (
            <>
              <PopularBanks selectedBank={bank}
                onChange={setBank} />
              <Form.Select
                className="payment-input mt-2"
                value={bank}
                onChange={(e) => setBank(e.target.value)}
                required
              >
                <option value="">Select Bank</option>
                <option value="HDFC">HDFC</option>
                <option value="SBI">SBI</option>
                <option value="ICICI">ICICI</option>
                <option value="Axis Bank">Axis Bank</option>
                <option value="Kotak Mahindra Bank">Kotak Mahindra Bank</option>
                <option value="Punjab National Bank">Punjab National Bank</option>
                <option value="Bank of Baroda">Bank of Baroda</option>
                <option value="Indian Bank">Indian Bank</option>
                <option value="Bank of India">Bank of India</option>
                <option value="Canara Bank">Canara Bank</option>
                <option value="Union Bank of India">Union Bank of India</option>
                <option value="UCO Bank">UCO Bank</option>
                <option value="Central Bank of India">Central Bank of India</option>
                <option value="Indian Overseas Bank">Indian Overseas Bank</option>
                <option value="Bank of Maharashtra">Bank of Maharashtra</option>
                <option value="IDBI Bank">IDBI Bank</option>
                <option value="IDFC First Bank">IDFC First Bank</option>
                <option value="IndusInd Bank">IndusInd Bank</option>
                <option value="Yes Bank">Yes Bank</option>
                <option value="Federal Bank">Federal Bank</option>
                <option value="RBL Bank">RBL Bank</option>
                <option value="South Indian Bank">South Indian Bank</option>
              </Form.Select>
            </>
          )}

          <div className="text-muted ms-1 mt-2 mb-2">
            This instrument has low success, use UPI or cards for better experience
          </div>

          <Button className="mt-4 w-100" onClick={handlePayment} variant="primary">
            Proceed with {selectedOption}
          </Button>

          {message && <Alert className="payment-alert mt-3" variant="info">{message}</Alert>}
        </Form>
      </Card>
    </Container>
  );
};

export default PaymentOptions;
