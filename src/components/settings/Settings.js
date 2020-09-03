import React from 'react';
import {
  setAllowRegistration,
  setDisableBalanceOnAdd,
  setDisableBalanceOnEdit,
} from '../../actions/settingsActions';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Settings() {
  // dispatches settings actions and state
  const dispatch = useDispatch();
  const settings = useSelector((state) => state.settings);

  // on change on checkbox dispatch action
  const allowRegistrationChange = () => {
    dispatch(setAllowRegistration())
  }
  const disableBalanceOnAddChange = () => {
    dispatch(setDisableBalanceOnAdd());
  };
  const disableBalanceOnEditChange = () => {
    dispatch(setDisableBalanceOnEdit());
  };

  return (
    <div>
      <div className="row">
        <div className="col-md-6">
          <Link to="/" className="btn btn-link">
            <i className="fa fa-arrow-circle-left"></i>
             Back To Dashboard
          </Link>
        </div>
      </div>
      <div className="card">
        <div className="card-header">Edit Settings</div>
        <div className="card-body">
          <form>
            <div className="form-group">
              <label>Allow Registration</label>{' '}
              <input
                type="checkbox"
                name="allowRegistration"
                checked={!!settings.allowRegistration}
                onChange={allowRegistrationChange}
              />
            </div>
            <div className="form-group">
              <label>Disable Balance On Add</label>{' '}
              <input
                type="checkbox"
                name="disableBalanceOnAdd"
                checked={!!settings.disableBalanceOnAdd}
                onChange={disableBalanceOnAddChange}
              />
            </div>
            <div className="form-group">
              <label>Disable Balance On Edit</label>{' '}
              <input
                type="checkbox"
                name="disableBalanceOnEdit"
                checked={!!settings.disableBalanceOnEdit}
                onChange={disableBalanceOnEditChange}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Settings;
