import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Addclient() {

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    balance: ''
  })

  const onchange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div>
      <div className="row">
        <div className="col-md-6 mb-3">
          <Link to="/">
            <i className="fa fa-arrow-circle-left"></i>
              {' '}Back To Dashboard
          </Link>
        </div>
      </div>
      <div className="card">
        <div className="card-header">Add Client</div>
        <div className="card-body">
          <form>
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
          </form>
        </div>
      </div>
    </div>
  );
}

export default Addclient;
