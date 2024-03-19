import React, { useState } from 'react';
import Homepage from "./Components/Homepage";
import AuthModal from './Components/AuthModal';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css"; 

function App() {

    // state
    const [showModal, setShowModal] = useState(false);

    // event handlers
    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);
  
  return (

    <div>
      <button type="button" className="btn btn-primary" onClick={handleShow}>
        Login
      </button>
  
      {showModal && <AuthModal onCancel={handleClose} />}
      {showModal && <div className="modal-backdrop fade show"></div>}

    </div>

    /*
      <Header />
      
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
