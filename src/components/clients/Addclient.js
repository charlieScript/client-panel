import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
// import { compose } from "redux";
// import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";

function Addclient(props) {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
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

    const { firestore } = props

    if (newClient.balance === '') {
      newClient.balance = 0
    }

    firestore.add({ collection: 'clients'}, newClient)
  }

  return (
    <div>
      <div className="row">
        <div className="col-md-6">
          <Link to="/" className="btn btn-link">
            <i className="fa fa-arrow-circle-left"></i> Back To Dashboard
          </Link>
        </div>
      </div>
      <div className="card">
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
                  type="email"
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
        </div>
      </div>
    </div>
  );
}

export default firestoreConnect()(Addclient);
