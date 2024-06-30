import React, { useState } from 'react';

function Manageorderform({onClose}) {
  const [formData, setFormData] = useState({
    billNo: '',
    store: '',
    datetime: '',
    totalProduct: '',
    totalAmount: '',
    paidStatus: 'Unpaid',
    action: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform validation here before submitting the form
    console.log(formData); // For demonstration, replace with your actual form submission logic
  };
const handleClose=()=>{
  onClose();
}
  return (
    <div className='card'>
      <div className='card-header'>Add New Bill</div>
      <div className='card-body'>
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <label>Bill No:</label>
            <input
              type='text'
              className='form-control'
              placeholder='Enter bill number'
              name='billNo'
              value={formData.billNo}
              onChange={handleChange}
              required
            />
          </div>
          <div className='form-group'>
            <label>Store:</label>
            <input
              type='text'
              className='form-control'
              placeholder='Enter store'
              name='store'
              value={formData.store}
              onChange={handleChange}
              required
            />
          </div>
          <div className='form-group'>
            <label>Date & Time:</label>
            <input
              type='datetime-local'
              className='form-control'
              name='datetime'
              value={formData.datetime}
              onChange={handleChange}
              required
            />
          </div>
          <div className='form-group'>
            <label>Total Products:</label>
            <input
              type='number'
              className='form-control'
              placeholder='Enter total products'
              name='totalProduct'
              value={formData.totalProduct}
              onChange={handleChange}
              required
            />
          </div>
          <div className='form-group'>
            <label>Total Amount:</label>
            <input
              type='number'
              className='form-control'
              placeholder='Enter total amount'
              name='totalAmount'
              value={formData.totalAmount}
              onChange={handleChange}
              required
            />
          </div>
          <div className='form-group'>
            <label>Paid Status:</label>
            <select
              className={`form-control ${formData.paidStatus === 'Paid' ? 'text-success' : 'text-danger'}`}
              name='paidStatus'
              value={formData.paidStatus}
              onChange={handleChange}
              required
            >
              <option value='Unpaid' className='btn-danger'>Unpaid</option>
              <option value='Paid' className='btn-success'>Paid</option>
            </select>
          </div>
          <div className='form-group'>
            <label>Action:</label>
            <select
              className={`form-control ${formData.action === 'Active' ? 'text-success' : 'text-danger'}`}
              name='action'
              value={formData.action}
              onChange={handleChange}
              required
            >
              <option value='Inactive' className='btn-danger'>Inactive</option>
              <option value='Active' className='btn-success'>Active</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
          <button type="submit" className="btn btn-danger" onClick={handleClose}>Submit</button>

        </form>
      </div>
    </div>
  );
}

export default Manageorderform;
