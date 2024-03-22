import React, { useEffect, useState } from 'react';
import Homepage from "./Components/Homepage";
import AuthModal from './Components/AuthModal';
import Navbar from './Components/Navbar';
import NewPeepForm from './Components/NewPeepForm';
import authService from './services/auth.service';

import "./App.css"; 
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";


function App() {

    // hooks
    useEffect(() => {
      updateCurrentUser();
    }, []);

    // state
    const [currentUser, setCurrentUser] = useState(undefined);
    const [showModal, setShowModal] = useState(false);

    // event handlers
    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    const updateCurrentUser = () => {
      const user = authService.getCurrentUser();

      if(user) {
        setCurrentUser(user);
      }
    }

    const login = () => {
      handleClose();        // update modal state
      updateCurrentUser();  // update current user state
    }

    const logout = () => {
      authService.logout();
      setCurrentUser(undefined);
    }
  
  return (

    <div>
      <Navbar currentUser={currentUser} onLoginClick={handleShow} onLogoutClick={logout}/>

      <NewPeepForm currentUser={currentUser}/>

      {showModal && <AuthModal onLogin={login} onCancel={handleClose} />}
      {showModal && <div className="modal-backdrop fade show"></div>}

    </div>


    /*
      <NewPeepBox />
      <Sidenav/>
      <PeepList />
        <Peep />
          <ReplyList /> // stretch
            <Reply />   // stretch

      <CreatePeep />

      <Footer />
    */
  
  );
  
}

export default App;
