import React, { useState } from 'react';
import peepService from '../services/peep.service';

const NewPeepForm = ({ currentUser, onPeepCreated }) => {

  const [content, setContent] = useState(``);
  const [message, setMessage] = useState(``);

  const [showPeepForm, setShowPeepForm] = useState(true);

  const onChangeContent = e => {
    const newContent = e.target.value;
    setContent(newContent);
  }

  const handlePost = async e => {
    e.preventDefault();

    const response = await peepService.createPeep(content);

    if(!response.error) {
      setContent("");
      onPeepCreated();
    }

    setMessage(response.error);
  }
  
  return (
    showPeepForm && (
      <div className="center-container" id="post-new-peep">
        <div className="card w-50" >  
          <div className="card-body">
          <h5 className="card-title center-text">Post a peep...</h5>
           
            {currentUser ? (
              <form onSubmit={handlePost}>
                <div className="form-group">
                  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={content} onChange={onChangeContent}/>
                </div>

                <br/>
                <div className="form-group">
                  <button type="submit" className="btn btn-success">
                    Post
                  </button>
                </div>

                {message && (
                  <div className="form-group">
                    <br/>
                    <div className="alert alert-danger" role="alert">
                      {message}
                    </div>
                  </div>
                )}
              </form>
            ) : (
              <h5 className="center-text">Please Login to post a Peep!</h5>
            )} 

          </div>
        </div>
      </div>
    )
  );
};

export default NewPeepForm;