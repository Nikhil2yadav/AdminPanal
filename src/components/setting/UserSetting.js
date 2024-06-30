import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from 'react-bootstrap';
import "./UserSetting.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt } from '@fortawesome/free-solid-svg-icons';

const UserSetting = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  useEffect(() => {
    toast("Leave the password field empty if you don't want to change", {
      toastId: 'password-info',
      className: "tostify-info",
      autoClose: false,
    });
  }, []);

  const handleSaveChanges = () => {
    if (password !== confirmPassword) {
      toast.error("Passwords don't match");
    } else {
      // Logic to save changes goes here
      toast.success('Changes saved successfully');
    }
  };

  return (
    <div className="content-wrapper">
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0 text-dark">User <small>Setting</small></h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item"><a href="/Dashboard">
              <FontAwesomeIcon icon={faTachometerAlt} className="nav-icon" />
                Home</a></li>
                <li className="breadcrumb-item active">Setting</li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <div className='card-header'>
          <h4>Update Information</h4>
        </div>
        <div className="card-body">
          <div className="form-container">
            <form>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input type="text" className="form-control" id="username" value="admin" readOnly />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" className="form-control" id="email" value="admin@admin.com" readOnly />
              </div>
              <div className="form-group">
                <label htmlFor="firstName">First name</label>
                <input type="text" className="form-control" id="firstName" value="john" readOnly />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last name</label>
                <input type="text" className="form-control" id="lastName" value="doe" readOnly />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input type="tel" className="form-control" id="phone" value="0812121212121" readOnly />
              </div>
              <div id='gender'>
                <label htmlFor="gender">Gender</label>
                <br />
                <input type="radio" name="gender" id="male" />
                <label htmlFor="male">Male</label>
                <input type="radio" name="gender" id="female" />
                <label htmlFor="female">Female</label>
              </div>
              <br />
              <br />
              <br />
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
              <div className="">
                <Button variant="primary" onClick={handleSaveChanges}>Save Changes</Button>
                <Button variant="secondary" className='btn-buttons'>Back</Button>
              </div>
            </form>
            <ToastContainer className="toast-container" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSetting;
