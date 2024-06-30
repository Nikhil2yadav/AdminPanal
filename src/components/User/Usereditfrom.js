
import React, { useState } from 'react';

function UserEditForm({ onClose }) {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    name: '',
    phone: '',
    group: 'Manager' // default value
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleClose = () => {
    onClose(); // Call the onClose function passed as a prop
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform validation here before submitting the form
    console.log(formData); // For demonstration, replace with your actual form submission logic
  };

  return (
    <div className='card'>
      <div className='card-header'>Edit Users</div>
      <div className='card-body'>
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <label>Username:</label>
            <input
              type='text'
              className='form-control'
              placeholder='Enter username'
              name='username'
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className='form-group'>
            <label>Email:</label>
            <input
              type='email'
              className='form-control'
              placeholder='Enter email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className='form-group'>
            <label>Name:</label>
            <input
              type='text'
              className='form-control'
              placeholder='Enter name'
              name='name'
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className='form-group'>
            <label>Phone:</label>
            <input
              type='text'
              className='form-control'
              placeholder='Enter Phone'
              name='phone'
              value={formData.phone}
              onChange={handleChange}
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" // Example pattern for phone number (###-###-####)
              title="Phone number format: ###-###-####"
              required
            />
          </div>
          <div className='form-group'>
            <label>Group:</label>
            <select
              className='form-control'
              name='group'
              value={formData.group}
              onChange={handleChange}
            >
              <option value='Manager'>Manager</option>
              <option value='Sales'>Sales</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
          <button type="button" className='btn btn-danger' onClick={handleClose}>Close</button>
        </form>
      </div>
    </div>
  );
}

export default UserEditForm;
