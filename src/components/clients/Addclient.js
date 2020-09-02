<<<<<<< HEAD
import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
// import { compose } from "redux";
// import { connect } from "react-redux";
import { useFirestore } from "react-redux-firebase";

function Addclient(props) {
  const firestore = useFirestore()
=======
import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useFirestore } from 'react-redux-firebase';

function Addclient(props) {
  const firestore = useFirestore();

>>>>>>> 436fb1a6c6f4f03311079c124e0e2f02e35f6a83
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
<<<<<<< HEAD
    balance: ''
  })

  onchange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  onsubmit = e => {
    e.preventDefault()

    const newClient = form

    // const { firestore } = props

    if (newClient.balance === '') {
      newClient.balance = 0
    }

    firestore.add({ collection: 'clients'}, newClient)
  }
=======
    balance: '',
  });

  const onchange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const onsubmit = (e) => {
    e.preventDefault();

    const newClent = form;

    // if no balance
    if (newClent.balance === '') {
      newClent.balance = 0;
    }

    // after hiding to collection redirect
    firestore
      .add({ collection: 'clients' }, newClent)
      .then(() => props.history.push('/'));
  };
>>>>>>> 436fb1a6c6f4f03311079c124e0e2f02e35f6a83

  return (
    <div>
      <div className="row">
<<<<<<< HEAD
        <div className="col-md-6">
          <Link to="/" className="btn btn-link">
=======
        <div className="col-md-6 mb-3">
          <Link to="/">
>>>>>>> 436fb1a6c6f4f03311079c124e0e2f02e35f6a83
            <i className="fa fa-arrow-circle-left"></i> Back To Dashboard
          </Link>
        </div>
      </div>
      <div className="card">
<<<<<<< HEAD
        <div className="card-header">
          <div className="card-body">
            <form onSubmit={onsubmit}>
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="firstName"
                  minLength="2"
                  required
                  onChange={onchange}
                  value={form.firstName}
                />
              </div>
              <div className="form-group">
                <label htmlFor="firstName">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="lastName"
                  minLength="2"
                  required
                  onChange={onchange}
                  value={form.lastName}
                />
              </div>
              <div className="form-group">
                <label htmlFor="firstName">email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  minLength="2"
                  required
                  onChange={onchange}
                  value={form.email}
                />
              </div>
              <div className="form-group">
                <label htmlFor="firstName">Phone Number</label>
                <input
                  type="text"
                  className="form-control"
                  name="phone"
                  minLength="10"
                  required
                  onChange={onchange}
                  value={form.phone}
                />
              </div>
              <div className="form-group">
                <label htmlFor="firstName">Balance</label>
                <input
                  type="balance"
                  className="form-control"
                  name="balance"
                  minLength="2"
                  required
                  onChange={onchange}
                  value={form.balance}
                />
              </div>

              <input type="submit" value="Submit " className="btn btn-primary btn-block"/>
            </form>
          </div>
=======
        <div className="card-header">Add Client</div>
        <div className="card-body">
          <form onSubmit={onsubmit}>
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                name="firstName"
                className="form-control"
                minLength="2"
                required
                value={form.firstName}
                onChange={onchange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                name="lastName"
                className="form-control"
                minLength="2"
                required
                value={form.lastName}
                onChange={onchange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                className="form-control"
                minLength="2"
                required
                value={form.email}
                onChange={onchange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="text"
                name="phone"
                className="form-control"
                minLength="2"
                required
                value={form.phone}
                onChange={onchange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="firstName">Balance</label>
              <input
                type="number"
                name="balance"
                className="form-control"
                minLength="2"
                required
                value={form.balance}
                onChange={onchange}
              />
            </div>
            <input
              type="submit"
              value="Submit"
              className="btn btn-primary btn-block"
            />
          </form>
>>>>>>> 436fb1a6c6f4f03311079c124e0e2f02e35f6a83
        </div>
      </div>
    </div>
  );
}

<<<<<<< HEAD
// export default firestoreConnect()(Addclient);
=======
>>>>>>> 436fb1a6c6f4f03311079c124e0e2f02e35f6a83
export default Addclient;
