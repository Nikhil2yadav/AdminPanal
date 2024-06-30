
import React, { useState } from 'react';
import './ManageUserPage.css'; // Import custom CSS file
import { FaEdit, FaTrash, FaSortAlphaDown, FaSortAlphaUp } from 'react-icons/fa'; // Import icons from React Icons library
import { ToastContainer, toast } from 'react-toastify';
import Popup from '../Controls/Popup';
import 'react-toastify/dist/ReactToastify.css';
import UserEditForm from './Usereditfrom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt } from '@fortawesome/free-solid-svg-icons';
const ManageUserPage = () => {
  const [usersData, setUsersData] = useState([
    // Add more sample user data here...
  ]);
  const [entries, setEntries] = useState(10);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [sortColumn, setSortColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState('asc');
  const [openPopup, setOpenPopup] = useState(false);
  const [editUser, setEditUser] = useState(null);

  const handleEntriesChange = (e) => {
    setEntries(parseInt(e.target.value));
    setCurrentPage(1);
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const totalPages = Math.ceil(usersData.length / entries);
  const startIndex = (currentPage - 1) * entries;
  const endIndex = Math.min(startIndex + entries, usersData.length);
  const paginatedData = usersData.slice(startIndex, endIndex);

  const filteredData = paginatedData.filter(user =>
    user.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.phone.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.group.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedData = sortColumn ? filteredData.sort((a, b) => {
    const compareResult = a[sortColumn].localeCompare(b[sortColumn]);
    return sortDirection === 'asc' ? compareResult : -compareResult;
  }) : filteredData;

  const deleteUser = (id) => {
    const confirmed = window.confirm('Are you sure you want to delete this user?');
    if (confirmed) {
      setUsersData(usersData.filter(user => user.id !== id));
      toast.success('User deleted successfully', {
        className: "toastifyconatiner",
        autoClose: false
      });
    }
  };

  const startEditUser = (user) => {
    setEditUser(user);
    setOpenPopup(true); // Open the popup for editing
  };

  const handleSort = (column) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortDirection('asc');
    }
  };
  const handleClose = () => {
    setOpenPopup(false); // Update state to hide the popup
  };

  return (
    <div className='content-wrapper'>
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0 text-dark">Manage <small>Users</small></h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item"><a href="/Dashboard">
              <FontAwesomeIcon icon={faTachometerAlt} className="nav-icon" />
                Home</a></li>
                <li className="breadcrumb-item active">Users</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <a className="btn btn-primary" href='/Adduser' id='adduser'>Add User</a>

      <div className="card">
        <h5 className="card-header">Manage Users</h5>
        <div className='card-body'>
          <div>
            <label>Show</label>
            <select className="" value={entries} onChange={handleEntriesChange}>
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
            <label>entries</label>
          </div>
          <div id='txtsearch'>
            <label id='lblsearch'>Search :</label>
            <input type="text" placeholder="Search..." value={searchQuery} onChange={handleSearch} />
          </div>

          <table className='table-bordered table table-striped' id='table'>
            <thead>
              <tr>
                <th onClick={() => handleSort('username')} id='Myusername'>
                  Username
                  {sortColumn === 'username' && (sortDirection === 'asc' ? <FaSortAlphaDown /> : <FaSortAlphaUp />)}
                </th>
                <th onClick={() => handleSort('email')} id='Myemail'>
                  Email
                  {sortColumn === 'email' && (sortDirection === 'asc' ? <FaSortAlphaDown /> : <FaSortAlphaUp />)}
                </th>
                <th onClick={() => handleSort('name')} id='Myname'>
                  Name
                  {sortColumn === 'name' && (sortDirection === 'asc' ? <FaSortAlphaDown /> : <FaSortAlphaUp />)}
                </th>
                <th onClick={() => handleSort('phone')} id='Myphone'>
                  Phone
                  {sortColumn === 'phone' && (sortDirection === 'asc' ? <FaSortAlphaDown /> : <FaSortAlphaUp />)}
                </th>
                <th onClick={() => handleSort('group')} id='Mygroup'>
                  Group
                  {sortColumn === 'group' && (sortDirection === 'asc' ? <FaSortAlphaDown /> : <FaSortAlphaUp />)}
                </th>
                <th id='Myaction'>Action</th>
              </tr>
            </thead>
            <tbody>
              {sortedData.map((user, index) => (
                <tr key={user.id} className={index % 2 === 0 ? 'even' : 'odd'}>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.name}</td>
                  <td>{user.phone}</td>
                  <td>{user.group}</td>
                  <td>
                    <button className="btn" onClick={() => startEditUser(user)}><FaEdit /></button>
                    <button className="btn" onClick={() => deleteUser(user.id)}><FaTrash /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div>
            <p className="mb-0">Total Entries: {usersData.length}</p>
          </div>

          <div className="d-flex justify-content-between align-items-center mb-3" id='btnofnext'>
            <button className="btn btn-secondary" disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}>Previous</button>
            <span>{`Page ${currentPage} of ${totalPages}`}</span>
            <button className="btn btn-secondary" disabled={currentPage === totalPages} onClick={() => setCurrentPage(currentPage + 1)}>Next</button>
          </div>
        </div>
        <ToastContainer />
      </div>

      <Popup
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
      >
        <UserEditForm onClose={handleClose}/>
      </Popup>
    </div>
  );
};

export default ManageUserPage;
