import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Initialize navigate function

  const handleLogin = () => {
    // Validate email and password
    if (email === 'admin@admin.com' && password === 'admin123') {
      // Navigate to another page after successful login
      navigate('/Dashboard');
    } else if (email !== 'admin@admin.com') {
      setError('Email does not exist.');
    } else {
      setError('Invalid password.');
    }
  };

  return (
        <Container id='mycontainer'>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <div className="card p-4">
            <h2 className="text-center mb-4">Login</h2>
            <div className='cardbody'>
              <div className='text-center mb-4'>Sign in to start your session</div>
              {error && <div className="error-message">{error}</div>}
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <div className='iconemail'>
                    <FontAwesomeIcon icon={faEnvelope} />
                  </div>
                </Form.Group>
                <br/>
                <Form.Group controlId="formBasicPassword">
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <div className='iconlock'>
                    <FontAwesomeIcon icon={faLock} />
                  </div>
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox" className="d-flex justify-content-between align-items-center">
                  <Form.Check
                    type="checkbox"
                    label="Remember me "
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                  />
                  
                  <div id='btn'>
                    <Button variant="primary" type="button" className="float-right" onClick={handleLogin}>
                      Sign In
                    </Button>
                  </div>
                </Form.Group>
                <div id='btn-admin'>
                  <h4>Login as <FontAwesomeIcon icon={faAngleDown} /></h4>
                  <Button variant="primary" type="button" onClick={() => { setEmail('admin@admin.com'); setPassword('admin123'); }}>
                    Admin
                  </Button>
                </div>
              </Form>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
    
    
  );
};

export default Login;
