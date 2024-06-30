import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faUsers, faStore, faFileAlt, faListAlt, faList, faUser, faBoxes, faShoppingCart, faCog, faSignOutAlt, faBars, faFile } from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink } from 'react-router-dom';

export default class Sidedbar extends Component {
  render() {
    return (
      <div>
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
          <a href="/" className="brand-link">
            <span className="brand-text font-weight-light">Admin</span>
          </a>
          
          <div className="sidebar">
            <nav className="mt-2">
              <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                <li className="nav-item has-treeview menu-open">
                  <Link to="/Dashboard" className='nav-link active'>
                  <FontAwesomeIcon icon={faTachometerAlt} className="nav-icon" />
                    <p>Dashboard</p>
                  </Link>
                </li>
                <li className="nav-item has-treeview">
                  <a href="" className="nav-link">
                    <FontAwesomeIcon icon={faUsers} className="nav-icon" />
                    <p>
                      Users
                      
                      <i className="fas fa-angle-left right" />
                    </p>
                  </a>
                  <ul className="nav nav-treeview">
                    <li className="nav-item">
                      <a href="/Adduser" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                        <p>Add User</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="/Manageuser" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                        <p>Manage Users</p>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item has-treeview">
                  <a href="" className="nav-link">
                    <FontAwesomeIcon icon={faUsers} className="nav-icon" />
                    <p>
                      Groups
                      <i className="fas fa-angle-left right" />
                    </p>
                  </a>
                  <ul className="nav nav-treeview">
                    <li className="nav-item">
                      <a href="" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                        <p>Add Group</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="/Managegroup" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                        <p>Manage Groups</p>
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="nav-item has-treeview">
                  <a href="/Store" className="nav-link">
                    <FontAwesomeIcon icon={faStore} className="nav-icon" />
                    <p>Stores</p>
                  </a>
                </li>
                <li className="nav-item has-treeview">
                  <a href="/Table" className="nav-link">
                    <FontAwesomeIcon icon={faFileAlt} className="nav-icon" />
                    <p>Tables</p>
                  </a>
                </li>
                <li className="nav-item has-treeview">
                  <a href="/Category" className="nav-link">
                    <FontAwesomeIcon icon={faListAlt} className="nav-icon" />
                    <p>Category</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="" className="nav-link">
                    <FontAwesomeIcon icon={faBoxes} className="nav-icon" />
                    <p>
                      Products
                      <i className="fas fa-angle-left right" />

                    </p>
                  </a>
                  <ul className="nav nav-treeview">
                    <li className="nav-item">
                      <a href="/AddProduct" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                        <p>Add Product</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="/Manageproduct" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                        <p>Manage Products</p>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a href="" className="nav-link ">
                    <FontAwesomeIcon icon={faShoppingCart} className="nav-icon" />
                    <p>
                      Orders
                      <i className="fas fa-angle-left right" />
                    
                    </p>
                  </a>
                  <ul className="nav nav-treeview">
                    <li className="nav-item">
                      <a href="/AddOrder" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                        <p>Add Order</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="/Manageorder" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                        <p>Manage Orders</p>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item has-treeview">
                  <a href="#" className="nav-link">
                    <FontAwesomeIcon icon={faFileAlt} className="nav-icon" />
                    <p>
                      Reports
                      <i className="fas fa-angle-left right" />
                      
                    </p>
                  </a>
                  <ul className="nav nav-treeview">
                    <li className="nav-item">
                      <a href="/Totalpaidorder" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                        <p>Product Wise</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="/StoreWise" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                        <p>Total Store Wise</p>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a href="/Company-info" className="nav-link">
                    <FontAwesomeIcon icon={faFileAlt} className="nav-icon" />
                    <p>Company Info</p>
                  </a>
                </li>
                <li className="nav-item ">
                <a href='/User-profile' className="nav-link">
                <FontAwesomeIcon icon={faFileAlt} className="nav-icon" />
                    <p>Profile</p>
                </a>
                  
                </li>
                <li className="nav-item">
                  <a href="/Setting" className="nav-link">
                    <FontAwesomeIcon icon={faCog} className="nav-icon" />
                    <p>Settings</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/" className="nav-link">
                    <FontAwesomeIcon icon={faSignOutAlt} className="nav-icon" />
                    <p>Logout</p>
                  </a>
                </li>
              </ul>
            </nav>
            {/* /.sidebar-menu */}
          </div>
          {/* /.sidebar */}
        </aside>
      </div>
    );
  }
}
