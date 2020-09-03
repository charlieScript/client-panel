import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useFirestoreConnect, useFirestore } from 'react-redux-firebase';
import Spinner from '../layout/Spinner';
import { createRef } from 'react';

function EditClient(props) {
  const firestore = useFirestore();
  // to update we set the input values to the one gotten from the client as (defaultValue) then we create a refrence thr each to update the values 🥺
  const settings = useSelector(state => state.settings)
  const { disableBalanceOnEdit } = settings;

  // REFS
  const firstNameInput = createRef();
  const lastNameInput = createRef();
  const emailInput = createRef();
  const phoneInput = createRef();
  const balanceInput = createRef();

  useFirestoreConnect([
    {
      collection: 'clients',
      storeAs: 'client',
      doc: props.match.params.id,
    },
  ]);

  const client = useSelector(
    ({ firestore: { ordered } }) => ordered.client && ordered.client[0],
  );

  const onsubmit = (e) => {
    e.preventDefault();

    const updateClient = {
      firstName: firstNameInput.current.value,
      lastName: lastNameInput.current.value,
      email: emailInput.current.value,
      phone: phoneInput.current.value,
      balance:
        balanceInput.current.value === '' ? 0 : balanceInput.current.value,
    };

    // update in firestore
    firestore
      .update({ collection: 'clients', doc: client.id }, updateClient)
      .then(props.history.push('/'));
  };

  if (client) {
    return (
      <div>
        <div className="row">
          <div className="col-md-6 mb-3">
            <Link to="/">
              <i className="fa fa-arrow-circle-left"></i> Back To Dashboard
            </Link>
          </div>
        </div>
        <div className="card">
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
                  ref={firstNameInput}
                  defaultValue={client.firstName}
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
                  ref={lastNameInput}
                  defaultValue={client.lastName}
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
                  ref={emailInput}
                  defaultValue={client.email}
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
                  ref={phoneInput}
                  defaultValue={client.phone}
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
                  ref={balanceInput}
                  defaultValue={client.balance}
                  disabled={disableBalanceOnEdit}
                />
              </div>
              <input
                type="submit"
                value="Submit"
                className="btn btn-primary btn-block"
              />
            </form>
          </div>
        </div>
      </div>
    );
  } else {
    return <Spinner />;
  }
}

export default EditClient;
