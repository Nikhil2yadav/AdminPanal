import React, { useState } from 'react';

function Tableform({ onSubmit, onClose }) {
  const [store, setStore] = useState('HyderabadStore');
  const [tableName, setTableName] = useState('');
  const [capacity, setCapacity] = useState('');
  const [available, setAvailable] = useState('Available');
  const [status, setStatus] = useState('Active');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = {};
    if (!tableName.trim()) {
      errors.tableName = 'Table name is required';
    }
    if (!capacity.trim()) {
      errors.capacity = 'Capacity is required';
    }
    setErrors(errors);

    if (Object.keys(errors).length === 0) {
      const formData = {
        store,
        tableName,
        capacity,
        available,
        status
      };
      onSubmit(formData);
      setTableName('');
      setCapacity('');
      setAvailable('Available');
      setStatus('Active');
      onClose();
    }
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <div className='card'>
      <div className='card-header'>
        <p>Add Table</p>
      </div>
      <div className='card-body'>
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <label>Store</label>
            <select className='form-control' value={store} onChange={(e) => setStore(e.target.value)}>
              <option value="HyderabadStore">Hyderabad Store</option>
              <option value="qwerty">qwerty</option>
              <option value="mumbai">mumbai</option>
            </select>
          </div>
          <div className='form-group'>
            <label>Table Name</label>
            <input type='text' className={`form-control ${errors.tableName && 'is-invalid'}`} placeholder='Enter table name' value={tableName} onChange={(e) => setTableName(e.target.value)} />
            {errors.tableName && <div className='invalid-feedback'>{errors.tableName}</div>}
          </div>
          <div className='form-group'>
            <label>Capacity</label>
            <input type='text' className={`form-control ${errors.capacity && 'is-invalid'}`} placeholder='Enter capacity' value={capacity} onChange={(e) => setCapacity(e.target.value)} />
            {errors.capacity && <div className='invalid-feedback'>{errors.capacity}</div>}
          </div>
          <div className='form-group'>
            <label>Available</label>
            <select className='form-control' value={available} onChange={(e) => setAvailable(e.target.value)}>
              <option value="Available">Available</option>
              <option value="Unavailable">Unavailable</option>
            </select>
          </div>
          <div className='form-group'>
            <label>Status</label>
            <select className='form-control' value={status} onChange={(e) => setStatus(e.target.value)}>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
          <div>
            <button type='button' className='btn btn-secondary' onClick={handleClose}>Close</button>
            <button type='submit' className='btn btn-primary'>Save changes</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Tableform;
