// Addorder.js
import React, { useState } from 'react';
import './Addorder.css';
import Select from 'react-select';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt } from '@fortawesome/free-solid-svg-icons';

const option=[
    {value:"",label:""},
    {value:"Laptop",label:"Laptop",rate:"15000.00"},
    {value:"Phone",label:"Phone",rate:"1500.00"},
    {value:"Apples",label:"Apples",rate:"50.00"},
    {value:"Cheese",label:"Cheese",rate:"200.00"},
    {value:"Sd",label:"Sd",rate:"45.00"},
    {value:"Tee",label:"Tee",rate:"20.00"},
    {value:"Ciaociao",label:"Ciaociao" ,rate:"12.00"},
    {value:"Jghjghj",label:"Jghjghj",rate:"23.00"},
    {value:"Dsfsdf",label:"Dsfsdf",rate:"1502665465.00"},
    {value:"Del",label:"Del",rate:"200.00"},
    {value:"Redmi 7a",label:"Redmi 7a",rate:"2500.00"},
    {value:"Sprite",label:"Sprite",rate:"30.00"},
    {value:"Test",label:"Test",rate:"10.00"},
    {value:"gvcv",label:"gcvc",rate:"8998.00"},
    {value:"e",label:"e",rate:"2.00"},
    {value:"Bis",label:"Bis",rate:"20.00"},
    {value:"F",label:"F",rate:"200.00"},
    {value:"kkkkkk",label:"kkkkkk",rate:"100.00"},
    {value:"Apple Soup",label:"Apple Soup",rate:"440.00"},
    {value:"elma",label:"elma",rate:"1.00"},
    {value:"Testis",label:"Testis",rate:"12000.00"},
    {value:"Caano Xilwo",label:"Caano Xilwo",rate:"17.00"},
    {value:"abc",label:"abc",rate:"1213.00"},
    {value:"Sliced Bread",label:"Sliced Bread",rate:"1000.00"},
    {value:"320 8 0503 Sensor Card",label:"320 8 0503 Sensor Card",rate:"5000.00"},
    {value:"realme c53",label:"realme c53",rate:"350.00"},
    {value:"Nan",label:"Nan",rate:"20.00"},
];

function Addorder() {
    const [rowCount, setRowCount] = useState(1);
    const [selectoption, setSelectOption] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);

    const handleChnage = (selectoption, index) => {
        setSelectOption((prevOptions) => {
            const newOptions = [...prevOptions];
            newOptions[index] = selectoption;
            return newOptions;
        });
        updateRateAndAmount(selectoption, index);
    };

    const updateRateAndAmount = (selectoption, index) => {
        const rate = selectoption?.rate || 0;
        const qty = parseFloat(document.getElementById(`qty_${index}`).value || 0);
        const amount = qty * rate;
        document.getElementById(`rate_${index}`).value = rate;
        document.getElementById(`amount_${index}`).value = amount;
        calculateTotalAmount();
    };
    
    const calculateTotalAmount = () => {
        let total = 0;
        for (let i = 0; i < rowCount; i++) {
            const amount = parseFloat(document.getElementById(`amount_${i}`).value || 0);
            total += amount;
        }
        const discount = parseFloat(document.getElementById('discount').value || 0);
    const netAmount = total - discount;
    setTotalAmount(netAmount);
    };

    const handleQtyChange = (index) => {
        const qty = parseFloat(document.getElementById(`qty_${index}`).value || 0);
        const rate = parseFloat(document.getElementById(`rate_${index}`).value || 0);
        const amount = qty * rate;
        document.getElementById(`amount_${index}`).value = amount;
        calculateTotalAmount();
    };

    const addRow = () => {
        setRowCount(rowCount + 1);
    };

    const removeRow = () => {
        if (rowCount > 1) {
            setRowCount(rowCount - 1);
        }
    };

    var showdate = new Date();
    var displaytodaydate = showdate.getDate() + '/' + showdate.getMonth() + '/' + showdate.getFullYear();
    var displaytime = showdate.getHours() + ':' + showdate.getMinutes();

    return (
        <div className='content-wrapper'>
         <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0 text-dark">Manage <small>Order</small></h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item"><a href="/Dashboard">
                <FontAwesomeIcon icon={faTachometerAlt} className="nav-icon" />
                Home</a></li>
                <li className="breadcrumb-item active">Orders</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
            <div className='card'>
            <div className='card-header'>
                <h3><small>Add Order</small></h3>
            </div>
            <div className='card-body'>
                <form>
                <div id='date'>
                        <p>Date: {displaytodaydate}</p>
                        <p>Time: {displaytime}</p>
                    </div>
                    <br />
                    <br />
                    <br />
                    <div>
                        <label>Store</label>
                        <select id='myselect'>
                            <option></option>
                            <option>Mumbai</option>
                            <option>Qwerty</option>
                            <option>Hyderabad</option>
                            <option>Coimbatore Store</option>
                        </select>
                    </div>
                    <div>
                        <label>Table</label>
                        <select id="myselect">
                            <option></option>
                        </select>
                    </div>
                    <br></br>
                    <table className='table table-bordered' id='table'>
                        <thead>
                            <tr>
                                <th id='Myproduct'>Product</th>
                                <th id='Myqty'>Qty</th>
                                <th id='MyRate'>Rate</th>
                                <th id='MyAmount'>Amount</th>
                                <th><button type="button" className="btn btn-light" onClick={addRow}>+</button></th>
                            </tr>
                        </thead>
                        <tbody>
                            {[...Array(rowCount)].map((_, index) => (
                                <tr key={index}>
                                    <td>
                                    <Select
                                        options={option}
                                        value={selectoption[index]}
                                        onChange={(selectoption)=>handleChnage(selectoption,index)}
                                        
                                        id='product'
                                    />   
                                    </td>
                                    <td>
                                        <input type="text" name={`qty_${index}`} id={`qty_${index}`} className="form-control" required onChange={()=>handleQtyChange(index)} />
                                    </td>
                                    <td>
                                        <input type="text" name={`rate_${index}`} id={`rate_${index}`} className="form-control" disabled autoComplete="off" />
                                    </td>
                                    <td>
                                        <input type="text" name={`amount_${index}`} id={`amount_${index}`} className="form-control" disabled autoComplete="off" />
                                    </td>
                                    <td>
                                        <button type="button" className="btn btn-light" onClick={removeRow}>X</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div id='myboxsamout'>
                        <div className="form-group">
                            <label id='lblgross'>Gross Amount:</label>
                            <input type="text" className="" id="gross_amount" name="gross_amount" value={totalAmount} disabled autoComplete="off" />
                        </div>
                        <div className="form-group">
                            <label id='lbldiscount'>Discount:</label>
                            <input type="text" className="" id="discount" name="discount" placeholder="Discount" autoComplete="off" onChange={calculateTotalAmount} />
                        </div>
                        <div className="form-group">
                            <label id="lblnet_amount">Net Amount</label>
                            <input type="text" className="" id="net_amount" name="net_amount" value={totalAmount} disabled autoComplete="off" />
                        </div>
                    </div>
                </form>
            </div>
            <div className="card-footer">
                <input type="hidden" name="service_charge_rate" autoComplete="off" />
                <input type="hidden" name="vat_charge_rate" autoComplete="off" />
                <button type="submit" className="btn btn-primary">Create Order</button>
                <a href="" className="btn btn-warning">Back</a>
            </div>
        </div>
        </div>
        
    );
}

export default Addorder;


