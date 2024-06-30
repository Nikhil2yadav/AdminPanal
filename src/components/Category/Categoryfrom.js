
import React, { useState } from 'react';

const Categoryfrom = ({ onSubmit, onClose }) => {
  const [categoryName, setCategoryName] = useState('');
  const [status, setStatus] = useState('active');

  const handleCategoryNameChange = (e) => {
    setCategoryName(e.target.value);
  };

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ categoryName, status });
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="categoryName">Category Name:</label>
        <input
          type="text"
          className="form-control"
          id="categoryName"
          value={categoryName}
          onChange={handleCategoryNameChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="status">Status:</label>
        <select
          className="form-control"
          id="status"
          value={status}
          onChange={handleStatusChange}
          style={{ color: status === 'active' ? 'green' : 'orange' }}
        >
          <option value="active" style={{ color: 'green' }}>Active</option>
          <option value="inactive" style={{ color: 'orange' }}>Inactive</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
      <button type="button" className='btn btn-danger' onClick={handleClose}>Close</button>
    </form>
  );
};

export default Categoryfrom;

