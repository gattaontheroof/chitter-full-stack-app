import React, { useState } from 'react';
import Homepage from "./Components/Homepage";
import AuthModal from './Components/AuthModal';
import Navbar from './Components/Navbar';
import NewPeepForm from './Components/NewPeepForm';
import "./App.css"; 
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";


function App() {

    // state
    const [showModal, setShowModal] = useState(false);

    // event handlers
    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);
  
  return (

    <div>
      <Navbar onLoginClick={handleShow}/>
      <NewPeepForm/>
      {showModal && <AuthModal onCancel={handleClose} />}
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
