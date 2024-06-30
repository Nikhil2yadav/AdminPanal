import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Form, Button } from 'react-bootstrap';
import './User.css';
import Select from 'react-select';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt } from '@fortawesome/free-solid-svg-icons';
const option=[
  {value:"Manager",label:"Manager"},
  {value:"Sales",label:"Sales"},
  {value:"Kasir",label:"Kasir"},
  {value:"Staff",label:"Staff"},
  {value:"Members",label:"Members"},
  
]
export default function User() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        firstName: '',
        lastName: '',
        phone: '',
        gender: ''
      });
    
      const [password, setPassword] = useState('');
      const [confirmPassword, setConfirmPassword] = useState('');
      const [errors, setErrors] = useState({});
      const[selectedOption,setSelectedoption]=useState([])
      const handleChnage=(selectedOption)=>{
      setSelectedoption(selectedOption);
      }
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        const { password, confirmPassword } = formData;
        const newErrors = {};
        
        if (!formData.username) {
          newErrors.username = 'The Username field is required';
        }
        
        if (!formData.email) {
          newErrors.email = ' The Email field is required';
        }
    
        if (!password) {
          newErrors.password = 'The Password field is required';
        }
    
        if (password !== confirmPassword) {
          newErrors.confirmPassword = "The Passwords don't match With Confirm Password";
        }
        
        if (!formData.firstName) {
          newErrors.firstName = 'The First name field is required';
        }
        if (!formData.lastName) {
          newErrors.lastName = 'The Last name field is required';
        }
        if (!formData.phone) {
          newErrors.phone = 'The Phone no field is required';
        }
        if (!formData.group || formData.group === 'Select Groups') {
          newErrors.group = 'Please select a group';
        }
    
        if (!formData.store || formData.store === 'Select Store') {
          newErrors.store = 'Please select a store';
        }
    
        if (!formData.gender) {
          newErrors.gender = 'The Gender field is required';
        }
    
        if (Object.keys(newErrors).length > 0) {
          setErrors(newErrors);
          return;
        }
    
        // Logic to save changes goes here
        toast.success('Changes saved successfully');
    
        // Reset form fields and errors after submission
        setFormData({
          username: '',
          group: '',
          store: '',
          email: '',
          firstName: '',
          lastName: '',
          phone: '',
          gender: ''
        });
        setPassword('');
        setConfirmPassword('');
        setErrors({});
      };
  return (
    <div className="content-wrapper">
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0 text-dark">Manage <small>Users</small></h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item"><a href="/Dashboard">
              <FontAwesomeIcon icon={faTachometerAlt} className="nav-icon" />
                Home</a></li>
                <li className="breadcrumb-item active">Users</li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <div className='card-header'>
          <h4>Add User</h4>
          {errors.group && <div className="error-message">{errors.group}</div>}
          {errors.store && <div className="error-message">{errors.store}</div>}
          {errors.username && <div className="error-message">{errors.username}</div>}
          {errors.email && <div className="error-message">{errors.email}</div>}
          {errors.password && <div className="error-message">{errors.password}</div>}
          {errors.confirmPassword && <div className="error-message">{errors.confirmPassword}</div>}
          {errors.firstName && <div className="error-message">{errors.firstName}</div>}
          {errors.lastName && <div className="error-message">{errors.lastName}</div>}
          {errors.phone && <div className="error-message">{errors.phone}</div>}
          {errors.gender && <div className="error-message">{errors.gender}</div>}
        </div>
      
        <div className="card-body">
          <div className="form-container">
            <form onSubmit={handleSubmit}>
              <Form.Group controlId="formGroups">
              <div className='form-group'>
              <h5>Groups</h5>
              <Select
        options={option}
        value={selectedOption}
        onChange={handleChnage}
        
      />
              </div>
                <Form.Label>Store</Form.Label>
                <Form.Control as="select">
                  <option>Select Store</option>
                  <option>Mumbai</option>
                  <option>qwerty</option>
                  <option>Hyderabad Store</option>
                  <option>Coimbatore Store</option>
                  
                </Form.Control>
              </Form.Group>
              
              <Form.Group controlId="formUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="Username"
                />
              </Form.Group>

              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                />
              </Form.Group>

              <div className="form-group">
                 <label htmlFor="password">Password</label>
                 <input
                   placeholder='Password'
                   type="password"
                   className="form-control"
                   id="password"
                   value={password}
                   onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm password</label>
                <input
                  placeholder='Confirm Password'
                  type="password"
                  className="form-control"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="firstName">First name</label>
                <input type="text" className="form-control" id="firstName" placeholder='First name' />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last name</label>
                <input type="text" className="form-control" id="lastName" placeholder='Last name' />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input type="tel" className="form-control" id="phone" placeholder='Phone' />
              </div>
              <div id='gender'>
                <label htmlFor="gender">Gender</label>
                <br />
                <input type="radio" name="gender" id="male" />
                <label htmlFor="male">Male</label>
                <input type="radio" name="gender" id="female" />
                <label htmlFor="female">Female</label>
              </div>

              <Button variant="primary" type="submit">Save Changes</Button>
              <Button variant="secondary" className='btn-buttons'>Back</Button>
            </form>
            <ToastContainer className="toast-container" />
          </div>
        </div>
      </div>
    </div>
  )
}
