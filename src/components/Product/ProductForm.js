import React, { useState } from 'react';

function ProductForm( {onClose}) {
  const [formData, setFormData] = useState({
    image: '',
    name: '',
    price: '',
    store: '',
    status: 'Available',
    action: 'Active'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setFormData({
        ...formData,
        image: reader.result
      });
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform validation here before submitting the form
    console.log(formData); // For demonstration, replace with your actual form submission logic
  };
const HandleClose=()=>{
  onClose();
}
  return (
    <div className='card'>
      <div className='card-header'>Add New Product</div>
      <div className='card-body'>
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <label>Image:</label>
            <input
              type='file'
              className='form-control-file'
              accept='image/*'
              onChange={handleImageChange}
              required
            />
            {formData.image && (
              <img src={formData.image} alt='Product' style={{ maxWidth: '100px', marginTop: '10px' }} />
            )}
          </div>
          <div className='form-group'>
            <label>Product Name:</label>
            <input
              type='text'
              className='form-control'
              placeholder='Enter product name'
              name='name'
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className='form-group'>
            <label>Price:</label>
            <input
              type='number'
              className='form-control'
              placeholder='Enter price'
              name='price'
              value={formData.price}
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
            <label>Status:</label>
            <select
              className={`form-control ${formData.status === 'Available' ? 'text-success' : 'text-danger'}`}
              name='status'
              value={formData.status}
              onChange={handleChange}
              required
            >
              <option value='Available' className='btn-success'>Available</option>
              <option value='Unavailable' className='btn-danger'>Unavailable</option>
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
              <option value='Active' className='btn-success'>Active</option>
              <option value='Inactive' className='btn-danger'>Inactive</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
          <button type="submit" className="btn btn-danger" onClick={HandleClose}>Submit</button>

        </form>
      </div>
    </div>
  );
}

export default ProductForm;
