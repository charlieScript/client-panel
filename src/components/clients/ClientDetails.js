import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useFirestoreConnect, useFirestore } from 'react-redux-firebase';
import Spinner from '../layout/Spinner';
import classnames from 'classnames';
import { useState } from 'react';

function ClientDetails(props) {
  const firestore = useFirestore();
  const [showBal, setShowBal] = useState(false);
  const [balUpdateAmount, setBalUpdateAmount] = useState('');
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

  const onchange = (e) => {
    setBalUpdateAmount(e.target.value);
  };

  // update firestore
  const balSubmit = (e) => {
    e.preventDefault();

    const clientUpdate = {
      balance: parseFloat(balUpdateAmount),
    };

    // update in firestore
    firestore.update({ collection: 'clients', doc: client.id }, clientUpdate);
  };

  // balance form
  const deleteClient = () => {
    firestore
      .delete({ collection: 'clients', doc: client.id })
      .then(() => props.history.push('/'));
  };

  if (client) {
    return (
      <div>
        <div className="row">
          <div className="col-md-6">
            <Link to="/" className="bnt btn-link">
              <i className="fa fa-arrow-circle-left"></i>
              Back To Dashboard
            </Link>
          </div>
          <div className="col-md-6">
            <div className="btn-group float-right">
              <Link to={`/client/edit/${client.id}`} className="btn btn-dark">
                Edit
              </Link>
              <button className="btn btn-danger" onClick={deleteClient}>
                Delete
              </button>
            </div>
          </div>
        </div>
        <hr />
        <div className="card">
          <h3 className="card-header">
            {client.firstName} {client.lastName}
          </h3>
          <div className="card-body">
            <div className="row">
              <div className="col-md-8 col-sm-6">
                <h4>
                  Client ID: <span className="text-secondary">{client.id}</span>
                </h4>
              </div>
              <div className="col-md-4 col-sm-6">
                <h3 className="pull-right">
                  Balance:{' '}
                  <span
                    className={classnames({
                      'text-danger': parseFloat(client.balance) > 0,
                      'text-success': parseFloat(client.balance) === 0,
                    })}
                  >
                    ${parseFloat(client.balance)}
                  </span>
                  {/* <span>
                    <a href="#!" onClick={() => setShowBal(!showBal)}>
                      <i className="fa fa-pencil-alt"></i>
                    </a>
                  </span> */}
                  <span>
                    <a href="#!" onClick={() => setShowBal(!showBal)}>
                      <i className="fa fa-pencil"></i>
                    </a>
                  </span>
                </h3>
                {/* @todo - balance form */}
                {showBal && (
                  <form onSubmit={balSubmit}>
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        name="balUpdateAmount"
                        placeholder="Add new Amount"
                        value={balUpdateAmount}
                        onChange={onchange}
                      />
                      <div className="input-group-append">
                        <input
                          type="submit"
                          value="Update"
                          className="btn btn-outline-dark"
                        />
                      </div>
                    </div>
                  </form>
                )}
              </div>
            </div>

            <hr />
            <ul className="list-group">
              <li className="list-group-item">Contact Email: {client.email}</li>
              <li className="list-group-item">Contact Phone {client.phone}</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    return <Spinner />;
  }
}

export default ClientDetails;
