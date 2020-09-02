import React from 'react';
// for authentication
import { useFirebaseConnect, useFirebase } from 'react-redux-firebase';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// actions
import { notifyUser } from '../../actions/notifyActions';
import Alert from '../layout/Alert';

function Login() {
  const dispatch = useDispatch();
  const firebase = useFirebase();
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const inputChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const onsubmit = (e) => {
    const { email, password } = form;
    e.preventDefault();

    firebase
      .login({
        email,
        password,
      })
      .catch((err) =>
        dispatch(notifyUser('Invalid Login Credentials', 'error')),
      );
  };

  // notify state
  const notify = useSelector((state) => state.notify);

  return (
    <div className="row">
      <div className="col-md-6 mx-auto">
        <div className="card">
          <div className="card-body">
            {notify.message ? (
              <Alert
                message={notify.message}
                messageType={notify.messageType}
              />
            ) : null}
            <h1 className="text-center pb-4 pt-3">
              <i className="fa fa-lock"></i> Login
            </h1>
            <form onSubmit={onsubmit}>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  className="form-control"
                  name="email"
                  required
                  value={form.email}
                  onChange={inputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  required
                  value={form.password}
                  onChange={inputChange}
                />
              </div>
              <input type="submit" value="Login" className="btn btn-primary" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
