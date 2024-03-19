import React, { useState } from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

function AuthModal({onCancel}) {

    // state
    const [modalState, setModalState] = useState('default');

    // event handlers
    const showLogin = () => setModalState('login');
    const showRegister = () => setModalState('register');

    const renderModalBody = () => {
        switch (modalState) {
          case 'login':
            return <LoginForm />;
          case 'register':
            return <RegisterForm />;
          default:
            return (
                <div>
                    <div>Please Login or Register to continue</div>
                    <button type="button" className="btn btn-success" onClick={showLogin}>Login</button>
                    <button type="button" className="btn btn-warning" onClick={showRegister}>Register</button>
                </div>
            );
        }
      };

    return (
        <div className="modal" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">

                <h5 className="modal-title">Chitter Authentication</h5>

              </div>
              <div className="modal-body">
                {renderModalBody()}
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={onCancel}>Close</button>
              </div>
            </div>
          </div>
        </div>
    );
}

export default AuthModal;
