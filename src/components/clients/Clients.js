import React from 'react';
import { Link } from 'react-router-dom';

function Clients() {
  const clients = [
    {
      id: '222',
      firstName: 'Kelvin',
      lastName: 'Kelvin',
      email: 'm@m.com',
      phone: '333-333-333',
      balance: '40',
    },
    {
      id: '222',
      firstName: 'Kelvin',
      lastName: 'Kelvin',
      email: 'm@m.com',
      phone: '333-333-333',
      balance: '40123',
    },
  ];

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
          <div className="col-md-6" />
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
    return <h1>...loading</h1>;
  }
}

export default Clients;
