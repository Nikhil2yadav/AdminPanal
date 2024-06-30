import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Select from 'react-select';
import ReactQuill from 'react-quill'
import "./AddProduct.css"
import "react-quill/dist/quill.snow.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt } from '@fortawesome/free-solid-svg-icons';
const option = [
  { value: "Computer", label: "Computer" },
];

const options = [
  { value: "Coimbatore Store", label: "Coimbatore Store" },
  { value: "Hyderabad Store", label: "Hyderabad Store" },
  { value: "qwerty", label: "qwerty" },
  { value: "Mumbai", label: "Mumbai" }
];

const AddProduct = () => {
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [categories, setCategories] = useState(['Computer']); // Initial category selected
  const [selectedCategory, setSelectedCategory] = useState('');
  const [store, setStore] = useState('');
  const [isActive, setIsActive] = useState(false);
  const [selectedOption, setSelectedoption] = useState([]);
  const [selectedOptions, setSelectedoptions] = useState([]);
  const [productNameError, setProductNameError] = useState('');
  const [priceError, setPriceError] = useState('');

  const handleChnages = (selectedOptions) => {
    setSelectedoptions(selectedOptions);
  }

  const handleChnage = (selectedOption) => {
    setSelectedoption(selectedOption);
  }

  const handleSaveChanges = () => {
    let hasError = false;

    if (productName.trim() === '') {
      setProductNameError('The Product name field is required');
      hasError = true;
    } else {
      setProductNameError('The Price field is required');
    }

    if (price.trim() === '') {
      setPriceError('Please enter price.');
      hasError = true;
    } else {
      setPriceError('');
    }

    if (hasError) {
      return;
    }

   
  };
  const module={
    toolbar:[
      [{header:[1,2,3,4,5,6,false], }],
      ["bold","italic","underline","strike","blockquote"],
      [
        {list:"ordered"},
        {list:"bullet"},
        {indent:"-1"},
        {indent:"+1"}
      ],
      ["link","image"]
    ]
  }
  const [value,setvalue]=useState("");
  return (
    <div className="content-wrapper">
    <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0 text-dark">Manage <small>Prdoucts</small></h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item"><a href="/Dashboard">
              <FontAwesomeIcon icon={faTachometerAlt} className="nav-icon" />
                Home</a></li>
                <li className="breadcrumb-item active">Product</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <section className="content">
        <div className="row">
          <div className="col-md-12 col-xs-12">
            <div id="messages" />
            <div className="card">
              <div className="card-header">
                <h5 className="">Add Product</h5>
            
                {productNameError && <div>{productNameError}</div>}
                {priceError && <div>{priceError}</div>}
                <strong htmlFor="product_image">Image</strong>
                    <i> This section is disabled</i>
              </div>
              <form role="form" action method="post" encType="multipart/form-data">
                <div className="card-body">
                  
                  <div className="form-group">
                    <strong htmlFor="product_name">Product name</strong>
                    <input type="text" className="form-control" id="product_name" name="product_name" placeholder="Enter product name" value={productName} onChange={(e) => setProductName(e.target.value)} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="price">Price</label>
                    <input type="text" className="form-control" id="price" name="price" placeholder="Enter price" autoComplete="off" value={price} onChange={(e) => setPrice(e.target.value)} />
                  </div>
                  <div className="form-group" id='Mybox'>
            <label>Message</label>
            <br></br>
            <div className='row'>
        <div className='editor'>
          <ReactQuill theme='snow' value={value} 
            onChange={setvalue}
            className='editor-text'
            
            modules={module}
            />
        </div>
        
      </div>
            
          </div>
          <br></br>
          <br></br>
                  <div className="form-group" id='mybox'>
                    <h5>Select</h5>
                    <Select
                      options={option}
                      value={selectedOption}
                      onChange={handleChnage}
                      isMulti={true}
                    />
                  </div>
                  <div className="form-group">
                    <h5>Store</h5>
                    <Select
                      options={options}
                      value={selectedOptions}
                      onChange={handleChnages}
                      isMulti={true}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="active">Active</label>
                    <select className="form-control" id="active" name="active" value={isActive ? 'Yes' : 'No'} onChange={(e) => setIsActive(e.target.value === 'Yes')}>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>
                </div>
                <div className="card-footer">
                  <button type="button" className="btn btn-primary" onClick={handleSaveChanges}>Save Changes</button>
                  <a href="" className="btn btn-warning ml-2">Back</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AddProduct;
