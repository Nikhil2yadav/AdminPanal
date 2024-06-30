import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './UserProfile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt } from '@fortawesome/free-solid-svg-icons';
export default class Profile extends Component {
  render() {
    const user = {
        username: 'admin',
        email: 'admin@admin.com',
        firstName: 'John',
        lastName: 'Doe',
        gender: 'Male',
        phone: '0812121212121',
        group: 'Super Administrator'
      };
    return (
      <div className="content-wrapper">
    <div className="content-header">
      <div className="container-fluid">
        <div className="row mb-2">
          <div className="col-sm-6">
            <h1 className="m-0 text-dark">User <small>Profile</small></h1>
          </div>{/* /.col */}
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
              <li className="breadcrumb-item"><a href="/Dashboard">
              <FontAwesomeIcon icon={faTachometerAlt} className="nav-icon" />
              Home</a></li>
              <li className="breadcrumb-item active">Profile</li>
            </ol>
          </div>{/* /.col */}
        </div>{/* /.row */}
      </div>{/* /.container-fluid */}
    </div>
    <section className='content'>
      <div className='container-fluid'>
      <h3>Profile XXX</h3>
      <hr></hr>
      <table className="table">
        <tbody>
          <tr>
            <td>Username:</td>
            <td>{user.username}</td>
          </tr>
          <tr>
            <td>Email:</td>
            <td>{user.email}</td>
          </tr>
          <tr>
            <td>First Name:</td>
            <td>{user.firstName}</td>
          </tr>
          <tr>
            <td>Last Name:</td>
            <td>{user.lastName}</td>
          </tr>
          <tr>
            <td>Gender:</td>
            <td>{user.gender}</td>
          </tr>
          <tr>
            <td>Phone:</td>
            <td>{user.phone}</td>
          </tr>
          <tr>
            <td>Group:</td>
            <td>
              <button className="btn btn-primary">{user.group}</button>
            </td>
          </tr>
        </tbody>
      </table>
      </div>
    </section>
      
      
    </div>
           
      
    )
  }
}
