import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { isLoaded, useFirebase } from 'react-redux-firebase';

function AppNavbar() {
  const firebase = useFirebase()
  const user = useSelector((state) => state.firebase.auth);

  const logoutClick = () => {
    firebase.logout()
  };

  // checks if the current user is available
  const IsAuthenticated = firebase.auth().currentUser


  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-primary mb-4">
      <div className="container">
        <Link to="/" className="navbar-brand">
          Client panel
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarMain"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarMain">
          <ul className="navbar-nav mr-auto">
            {IsAuthenticated ? (
              <li>
                <Link to="/" className="nav-link">
                  Dashboard
                </Link>
              </li>
            ) : null}
          </ul>
          { IsAuthenticated ? (
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a href="#!" className="nav-link">
                  {user.email}
                </a>
              </li>
              <li className="nav-item">
                <a href="#!" className="nav-link" onClick={logoutClick}>
                  Logout
                </a>
              </li>
            </ul>
          ) : null}
        </div>
      </div>
    </nav>
  );
}

export default AppNavbar;
