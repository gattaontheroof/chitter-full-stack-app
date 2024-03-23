import React, { useState } from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

function AuthModal({ onLogin, onCancel }) {

    // state
    const [modalState, setModalState] = useState('default');

    // event handlers
    const showLogin = () => setModalState('login');
    const showRegister = () => setModalState('register');

    const renderModalBody = () => {
        switch (modalState) {
          case 'login':
            return <LoginForm onLogin={onLogin} />;
          case 'register':
            return <RegisterForm />;
          default:
            return (
                <div>
                    <div>Please Login to post your peeps</div> 
                    <br/>
                    <div className="center-button">
                    <button type="button" className="btn btn-success" id="login-button" onClick={showLogin}>Login</button>
                    </div>
                    <br/>
                    <div>Don't have an account? <a href="#" onClick={showRegister}>Register</a> 
                    </div>
                </div>
            );
        }
      };

    return (
        <div className="modal" tabIndex="-1" role="dialog" id= "auth-modal" style={{ display: 'block' }}>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">

                <h5 className="modal-title">Hear the latest chatter!</h5>

              </div>
              <div className="modal-body">
                {renderModalBody()}
              </div>
              <div className="modal-footer">
              <div className="close-button" onClick={onCancel}>&times;</div>
              </div>
            </div>
          </div>
        </div>
    );
}

export default AuthModal;
