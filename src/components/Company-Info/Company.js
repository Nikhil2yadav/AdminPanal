import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactQuill from 'react-quill'
import "./company.css"
import "react-quill/dist/quill.snow.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faTachometerAlt } from '@fortawesome/free-solid-svg-icons';
export default function Company() {
  const [companyName, setCompanyName] = useState('Humanities');
  const [chargeAmount, setChargeAmount] = useState('');
  const [vatCharge, setVatCharge] = useState('');
  const [address, setAddress] = useState('Peace Avenue 17.street');
  const [phoneNo, setPhoneNo] = useState('80222222');
  const [country, setCountry] = useState('Mongolia');
  const [message, setMessage] = useState('Universidad Catolica Soegijapranata en Indonesia');
  const [selectedHeading, setSelectedHeading] = useState('');
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);
  const [isSmall, setIsSmall] = useState(false);

  const handleBoldClick = () => {
    setIsBold(!isBold);
  };

  const handleItalicClick = () => {
    setIsItalic(!isItalic);
  };

  const handleUnderlineClick = () => {
    setIsUnderline(!isUnderline);
  };

  const handleSmallClick = () => {
    setIsSmall(!isSmall);
  };
  const handleUnorderedList = () => {
    document.execCommand('insertUnorderedList');
  };

  const handleOrderedList = () => {
    document.execCommand('insertOrderedList');
  };

  const handleOutdent = () => {
    document.execCommand('outdent');
  };

  const handleIndent = () => {
    document.execCommand('indent');
  };
  const handleInsertLink = () => {
    const url = prompt('Enter the URL:');
    document.execCommand('createLink', false, url);
  };

  const handleInsertImage = () => {
    const url = prompt('Enter the URL of the image:');
    document.execCommand('insertImage', false, url);
  };


  const handleHeadingChange = (e) => {
    setSelectedHeading(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // You can process the form data here, e.g., send it to a backend server
    console.log({
      companyName,
      chargeAmount,
      vatCharge,
      address,
      phoneNo,
      country,
      message,
      selectedHeading,
      isBold,
      isItalic,
      isUnderline,
      isSmall
    });
  };

  const handlePromptLink = () => {
    const url = prompt("Enter the URL:");
    if (url) {
      setMessage(`${message} [${url}]`);
    }
  };

  const handlePromptImage = () => {
    const imageUrl = prompt("Enter the image URL:");
    if (imageUrl) {
      setMessage(`${message} ![Alt text](${imageUrl})`);
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
              <h1 className="m-0 text-dark">Manage <small>Company</small></h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item"><a href="/Dashboard">
                <FontAwesomeIcon icon={faTachometerAlt} className="nav-icon" />
                Home</a></li>
                <li className="breadcrumb-item active">Company</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div className='card' id='mycard'>
      <h5>Manage Company Information</h5>
        <form onSubmit={handleFormSubmit}>
          <div className="form-group">
            <label>Company Name:</label>
            <input type="text" className="form-control" value={companyName} onChange={(e) => setCompanyName(e.target.value)}  />
          </div>
          <div className="form-group">
            <label>Charge Amount (%):</label>
            <input type="text" placeholder='Enter charge amount%' className="form-control" value={chargeAmount} onChange={(e) => setChargeAmount(e.target.value)} />
          </div>
          <div className="form-group">
            <label>VAT Charge (%):</label>
            <input type="text" placeholder='Enter vat charge %' className="form-control" value={vatCharge} onChange={(e) => setVatCharge(e.target.value)}  />
          </div>
          <div className="form-group">
            <label>Address:</label>
            <input type="text" className="form-control" value={address} onChange={(e) => setAddress(e.target.value)}  />
          </div>
          <div className="form-group">
            <label>Phone No:</label>
            <input type="tel" className="form-control" value={phoneNo} onChange={(e) => setPhoneNo(e.target.value)}  />
          </div>
          <div className="form-group">
            <label>Country:</label>
            <input type="text" className="form-control" value={country} onChange={(e) => setCountry(e.target.value)}  />
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
          <div className="form-group">
            <label>Currency</label>
            <select className="form-control" id="currency" name="currency">
                <option value>~~SELECT~~</option>
                <option value="AED">AED</option>
                <option value="AFN">AFN</option>
                <option value="ALL">ALL</option>
                <option value="ANG">ANG</option>
                <option value="AOA">AOA</option>
                <option value="ARS">ARS</option>
                <option value="AUD">AUD</option>
                <option value="AWG">AWG</option>
                <option value="AZN">AZN</option>
                <option value="BAM">BAM</option>
                <option value="BBD">BBD</option>
                <option value="BDT">BDT</option>
                <option value="BGN">BGN</option>
                <option value="BHD">BHD</option>
                <option value="BIF">BIF</option>
                <option value="BMD">BMD</option>
                <option value="BND">BND</option>
                <option value="BOB">BOB</option>
                <option value="BRL">BRL</option>
                <option value="BSD">BSD</option>
                <option value="BTN">BTN</option>
                <option value="BWP">BWP</option>
                <option value="BYR">BYR</option>
                <option value="BZD">BZD</option>
                <option value="CAD">CAD</option>
                <option value="CDF">CDF</option>
                <option value="CHF">CHF</option>
                <option value="CLP">CLP</option>
                <option value="CNY">CNY</option>
                <option value="COP">COP</option>
                <option value="CRC">CRC</option>
                <option value="CUP">CUP</option>
                <option value="CVE">CVE</option>
                <option value="CZK">CZK</option>
                <option value="DJF">DJF</option>
                <option value="DKK">DKK</option>
                <option value="DOP">DOP</option>
                <option value="DZD">DZD</option>
                <option value="EGP">EGP</option>
                <option value="ETB">ETB</option>
                <option value="EUR">EUR</option>
                <option value="FJD">FJD</option>
                <option value="FKP">FKP</option>
                <option value="GBP">GBP</option>
                <option value="GEL">GEL</option>
                <option value="GHS">GHS</option>
                <option value="GIP">GIP</option>
                <option value="GMD">GMD</option>
                <option value="GNF">GNF</option>
                <option value="GTQ">GTQ</option>
                <option value="GYD">GYD</option>
                <option value="HKD">HKD</option>
                <option value="HNL">HNL</option>
                <option value="HRK">HRK</option>
                <option value="HTG">HTG</option>
                <option value="HUF">HUF</option>
                <option value="IDR">IDR</option>
                <option value="ILS">ILS</option>
                <option value="INR">INR</option>
                <option value="IQD">IQD</option>
                <option value="IRR">IRR</option>
                <option value="ISK">ISK</option>
                <option value="JEP">JEP</option>
                <option value="JMD">JMD</option>
                <option value="JOD">JOD</option>
                <option value="JPY">JPY</option>
                <option value="KES">KES</option>
                <option value="KGS">KGS</option>
                <option value="KHR">KHR</option>
                <option value="KMF">KMF</option>
                <option value="KPW">KPW</option>
                <option value="KRW">KRW</option>
                <option value="KWD">KWD</option>
                <option value="KYD">KYD</option>
                <option value="KZT">KZT</option>
                <option value="LAK">LAK</option>
                <option value="LBP">LBP</option>
                <option value="LKR">LKR</option>
                <option value="LRD">LRD</option>
                <option value="LSL">LSL</option>
                <option value="LTL">LTL</option>
                <option value="LVL">LVL</option>
                <option value="LYD">LYD</option>
                <option value="MAD">MAD</option>
                <option value="MDL">MDL</option>
                <option value="MGA">MGA</option>
                <option value="MKD">MKD</option>
                <option value="MMK">MMK</option>
                <option value="MNT">MNT</option>
                <option value="MOP">MOP</option>
                <option value="MRO">MRO</option>
                <option value="MUR">MUR</option>
                <option value="MVR">MVR</option>
                <option value="MWK">MWK</option>
                <option value="MXN">MXN</option>
                <option value="MYR">MYR</option>
                <option value="MZN">MZN</option>
                <option value="NAD">NAD</option>
                <option value="NGN">NGN</option>
                <option value="NIO">NIO</option>
                <option value="NOK">NOK</option>
                <option value="NPR">NPR</option>
                <option value="NZD">NZD</option>
                <option value="OMR">OMR</option>
                <option value="PAB">PAB</option>
                <option value="PEN">PEN</option>
                <option value="PGK">PGK</option>
                <option value="PHP" selected>PHP</option>
                <option value="PKR">PKR</option>
                <option value="PLN">PLN</option>
                <option value="PYG">PYG</option>
                <option value="QAR">QAR</option>
                <option value="RON">RON</option>
                <option value="RSD">RSD</option>
                <option value="RUB">RUB</option>
                <option value="RWF">RWF</option>
                <option value="SAR">SAR</option>
                <option value="SBD">SBD</option>
                <option value="SCR">SCR</option>
                <option value="SDG">SDG</option>
                <option value="SEK">SEK</option>
                <option value="SGD">SGD</option>
                <option value="SHP">SHP</option>
                <option value="SLL">SLL</option>
                <option value="SOS">SOS</option>
                <option value="SRD">SRD</option>
                <option value="STD">STD</option>
                <option value="SVC">SVC</option>
                <option value="SYP">SYP</option>
                <option value="SZL">SZL</option>
                <option value="THB">THB</option>
                <option value="TJS">TJS</option>
                <option value="TMT">TMT</option>
                <option value="TND">TND</option>
                <option value="TOP">TOP</option>
                <option value="TRY">TRY</option>
                <option value="TTD">TTD</option>
                <option value="TWD">TWD</option>
                <option value="UAH">UAH</option>
                <option value="UGX">UGX</option>
                <option value="USD">USD</option>
                <option value="UYU">UYU</option>
                <option value="UZS">UZS</option>
                <option value="VEF">VEF</option>
                <option value="VND">VND</option>
                <option value="VUV">VUV</option>
                <option value="WST">WST</option>
                <option value="XAF">XAF</option>
                <option value="XCD">XCD</option>
                <option value="XPF">XPF</option>
                <option value="YER">YER</option>
                <option value="ZAR">ZAR</option>
                <option value="ZMK">ZMK</option>
                <option value="ZWL">ZWL</option>
            </select>
          </div>
        

          <button type="submit" className="btn btn-primary">Save Changes</button>
        </form>
      </div>
        
        
        
      </div>
    
  );
}


