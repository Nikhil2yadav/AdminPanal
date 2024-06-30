import React, { useState, useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import "./ProductWIse.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt } from '@fortawesome/free-solid-svg-icons';

const ProductWise = () => {
  const [selectedYear, setSelectedYear] = useState('2024'); // State to track the selected year
  const [monthlyData, setMonthlyData] = useState(getInitialMonthlyData(selectedYear)); // Initial monthly data based on selected year

  const chartRef = useRef(null); // Reference to the Chart instance

  useEffect(() => {
    renderChart();
  }, [monthlyData]); // Re-render chart when monthlyData changes

  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
  };

  const handleSubmit = () => {
    setMonthlyData(getInitialMonthlyData(selectedYear));
  };

  const renderChart = () => {
    if (chartRef.current !== null) {
      // If chart instance exists, destroy it before rendering a new one
      chartRef.current.destroy();
    }

    const labels = monthlyData.map(data => data.month);
    const amounts = monthlyData.map(data => data.amount);

    const ctx = document.getElementById('myChart');
    chartRef.current = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Total Orders',
          data: amounts,
          backgroundColor: 'rgba(54, 162, 235, 0.6)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  };

  const calculateTotalAmount = () => {
    const total = monthlyData.reduce((acc, curr) => acc + curr.amount, 0);
    return total;
  };

  function getInitialMonthlyData(year) {
    return [...Array(12)].map((_, index) => ({
      month: `${year}-${index + 1 < 10 ? '0' : ''}${index + 1}`,
      amount: 0
    }));
  }

  return (
    <div className="content-wrapper">
    <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0 text-dark">Reports</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item"><a href="/Dashboard">
              <FontAwesomeIcon icon={faTachometerAlt} className="nav-icon" />
                Home</a></li>
                <li className="breadcrumb-item active">Reports</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div id='text'>
      <label>Year</label>
      <select  value={selectedYear} onChange={handleYearChange}>
        <option value="2023">2023</option>
        <option value="2024">2024</option>
      </select>
      <button className='btn btn-secondary' onClick={handleSubmit}>Submit</button>
      </div>
      
      <br></br>
      <div className="box">
        <div className='box-body'>
          <canvas id="myChart"></canvas>
        </div>
      </div>
      <br></br>
      <div className='card'>
        <div className='card-header'>Total Paid Orders-Report Data</div>
      </div>
      <div className='table-container'>
        <table className="table table-bordered table-striped">
        <thead>
            <tr>
              <th>Month</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {monthlyData.map((data, index) => (
              <tr key={index}>
                <td>{data.month}</td>
                <td>{data.amount}</td>
              </tr>
            ))}
            <tr>
              <td><strong>Total</strong></td>
              <td><strong>{calculateTotalAmount()}</strong></td>
            </tr>
          </tbody>
        </table>
        </div>  
     
    </div>
  );
};

export default ProductWise;
