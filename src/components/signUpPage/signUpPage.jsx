import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, InputGroup } from 'react-bootstrap';
import { FaGoogle, FaFacebook, FaEye, FaEyeSlash, FaCreditCard } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

const JasvikPay = () => {
  const [showLogin, setShowLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const toggleForm = () => {
    setShowLogin(!showLogin);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Container
      fluid
      style={{
        minHeight: '100vh',   // Ensures the container takes the full height of the viewport
        overflow: 'auto',     // Ensures content is scrollable
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Row className="flex-grow-1">
        <Col
          md={5}
          className="d-flex flex-column justify-content-center align-items-center p-4 bg-primary text-white"
        >
          <div className="logo-area mb-4 d-flex align-items-center">
            <div className="logo-icon bg-white text-primary rounded d-flex justify-content-center align-items-center me-2" style={{ width: '48px', height: '48px' }}>
              <FaCreditCard size={24} />
            </div>
            <h2 className="mb-0 fw-bold">Jasvik Pay</h2>
          </div>

          <div className="text-center mb-5">
            <h3 className="mb-3">Secure Your Financial Future</h3>
            <p className="opacity-75">
              We at Jasvik Pay are committed to providing fast, secure, and reliable payment solutions for all your needs.
            </p>
          </div>

          <div className="illustration-container rounded-circle d-flex justify-content-center align-items-center mb-4" style={{ width: '160px', height: '160px', backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
            <FaCreditCard size={80} className="text-white opacity-75" />
          </div>
        </Col>

        <Col
          md={7}
          className="d-flex align-items-center justify-content-center p-4 bg-light"
          style={{
            overflowY: 'auto',  // This allows vertical scrolling within this column when content overflows
            paddingBottom: '50px', // Add some extra space for the bottom content
          }}
        >
          <Card className="form-card border-0 shadow-sm" style={{ maxWidth: '450px', width: '100%' }}>
            <Card.Body className="p-4">
              {showLogin ? (
                <>
                  <div className="text-center mb-4">
                    <h2 className="fw-bold">Log In</h2>
                  </div>

                  <div className="social-buttons d-flex justify-content-between mb-4">
                    <Button variant="outline-secondary" className="w-100 me-2 d-flex align-items-center justify-content-center">
                      <FaGoogle className="me-2" /> Google
                    </Button>
                    <Button variant="outline-secondary" className="w-100 ms-2 d-flex align-items-center justify-content-center">
                      <FaFacebook className="me-2" /> Facebook
                    </Button>
                  </div>

                  <div className="divider text-center mb-4" style={{ position: 'relative', textAlign: 'center', margin: '15px 0' }}>
                    <span className="divider-text" style={{ position: 'relative', display: 'inline-block', padding: '0 15px', backgroundColor: '#fff', zIndex: 2, color: '#6c757d' }}>
                      OR
                    </span>
                  </div>

                  <Form>
                    <Form.Group className="mb-3">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="your@email.com"
                        className="py-2"
                        style={{
                          padding: '0.5rem',
                        }}
                      />
                    </Form.Group>

                    <Form.Group className="mb-4">
                      <Form.Label>Password</Form.Label>
                      <InputGroup>
                        <Form.Control
                          type={showPassword ? 'text' : 'password'}
                          placeholder="••••••••"
                          className="py-2"
                        />
                        <Button
                          variant="outline-secondary"
                          onClick={togglePasswordVisibility}
                          style={{
                            backgroundColor: 'transparent',
                            borderColor: '#dee2e6',
                          }}
                        >
                          {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </Button>
                      </InputGroup>
                    </Form.Group>

                    <Button
                      variant="primary"
                      type="submit"
                      className="w-100 py-2 mb-3"
                      style={{
                        backgroundColor: '#3f51b5',
                        borderColor: '#3f51b5',
                      }}
                    >
                      Log In
                    </Button>
                  </Form>

                  <div className="text-center">
                    <p>
                      Don't have an account?{' '}
                      <Button variant="link" className="p-0" onClick={toggleForm} style={{ textDecoration: 'none' }}>
                        Sign Up
                      </Button>
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div className="text-center mb-4">
                    <h2 className="fw-bold">Create Account</h2>
                  </div>

                  <div className="social-buttons d-flex justify-content-between mb-4">
                    <Button variant="outline-secondary" className="w-100 me-2 d-flex align-items-center justify-content-center">
                      <FaGoogle className="me-2" /> Google
                    </Button>
                    <Button variant="outline-secondary" className="w-100 ms-2 d-flex align-items-center justify-content-center">
                      <FaFacebook className="me-2" /> Facebook
                    </Button>
                  </div>

                  <div className="divider text-center mb-4" style={{ position: 'relative', textAlign: 'center', margin: '15px 0' }}>
                    <span className="divider-text" style={{ position: 'relative', display: 'inline-block', padding: '0 15px', backgroundColor: '#fff', zIndex: 2, color: '#6c757d' }}>
                      OR
                    </span>
                  </div>

                  <Form>
                    <Form.Group className="mb-3">
                      <Form.Label>Full Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="John Doe"
                        className="py-2"
                        style={{
                          padding: '0.5rem',
                        }}
                      />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="your@email.com"
                        className="py-2"
                        style={{
                          padding: '0.5rem',
                        }}
                      />
                    </Form.Group>

                    <Form.Group className="mb-4">
                      <Form.Label>Password</Form.Label>
                      <InputGroup>
                        <Form.Control
                          type={showPassword ? 'text' : 'password'}
                          placeholder="••••••••"
                          className="py-2"
                        />
                        <Button
                          variant="outline-secondary"
                          onClick={togglePasswordVisibility}
                          style={{
                            backgroundColor: 'transparent',
                            borderColor: '#dee2e6',
                          }}
                        >
                          {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </Button>
                      </InputGroup>
                    </Form.Group>

                    <Button
                      variant="primary"
                      type="submit"
                      className="w-100 py-2 mb-3"
                      style={{
                        backgroundColor: '#3f51b5',
                        borderColor: '#3f51b5',
                      }}
                    >
                      Create Account
                    </Button>
                  </Form>

                  <div className="text-center">
                    <p>
                      Already have an account?{' '}
                      <Button variant="link" className="p-0" onClick={toggleForm} style={{ textDecoration: 'none' }}>
                        Log In
                      </Button>
                    </p>
                  </div>
                </>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default JasvikPay;
