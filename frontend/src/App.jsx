import React, { useState } from 'react';
import Homepage from "./Components/Homepage";
import AuthModal from './Components/AuthModal';
import Navbar from './Components/Navbar';
import Header from './Components/Header';

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
      <Navbar onLoginClick={handleShow}/>
      <Header/>
      {showModal && <AuthModal onCancel={handleClose} />}
      {showModal && <div className="modal-backdrop fade show"></div>}

    </div>


    /*
      <Header />
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
