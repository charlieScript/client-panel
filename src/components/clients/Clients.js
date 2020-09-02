import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import { compose } from "redux";
import { connect, useSelector } from "react-redux";
import { useFirestoreConnect } from "react-redux-firebase";
import Spinner from '../layout/Spinner';

function Clients(props) {
=======
// import {  } from "redux";
import { useSelector } from "react-redux";
import { useFirestoreConnect } from 'react-redux-firebase';
import Spinner from '../layout/Spinner';

function Clients() {
  useFirestoreConnect(['clients']) // sync clients collection from firebase
>>>>>>> 436fb1a6c6f4f03311079c124e0e2f02e35f6a83
  // const { clients } = props

  // copy clients collection from database
  const clients = useSelector((state) => state.firestore.ordered.clients);
  
  const [totalOwed, setTotalOwed] = useState(null)
<<<<<<< HEAD
  useFirestoreConnect(['clients'])
  const clients = useSelector(state => state.firestore.ordered.clients)
=======

  // onload data change
>>>>>>> 436fb1a6c6f4f03311079c124e0e2f02e35f6a83
  useEffect(() => {
    if (clients) {
      const total = clients.reduce((total, client) =>{
        return total + parseFloat(client.balance.toString())
      }, 0)
      setTotalOwed(total)
    }

  }, [clients])


  if (clients) {
    return (
      <div>
        <div className="row">
          <div className="col-md-6">
            <h2>
              {' '}
              <i className="fa fa-users"></i> Clients
            </h2>
          </div>
          <div className="col-md-6">
            <h5 className="text-right text-secondary">
              Total Owed {' '}
              <span className="text-primary">
                ${parseFloat(totalOwed).toFixed(2)}
              </span>
            </h5>
          </div>
        </div>
        <table className="table table-stripped">
          <thead className="thead-inverse">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Balance</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {clients.map((client) => (
              <tr key={client.id}>
                <td>
                  {client.firstName} {client.lastName}
                </td>
                <td>{client.email}</td>
                <td>${parseFloat(client.balance).toFixed(2)}</td>
                <td>
                  <Link
                    to={`/client/${client.id}`}
                    className="btn btn-secondary btn-sm"
                  >
                    <i className="fa fa-arrow-circle-right"></i> Details
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  } else {
    return <Spinner />;
  }
}

export default Clients;
<<<<<<< HEAD

// export default compose(
//   usefirestoreConnect('clients'),
=======
// export default compose(
//   firestoreConnect([{collection: 'clients'}]),
>>>>>>> 436fb1a6c6f4f03311079c124e0e2f02e35f6a83
//   connect((state, props) => ({
//     clients: state.firestore.ordered.clients
//   }))
// )(Clients)
