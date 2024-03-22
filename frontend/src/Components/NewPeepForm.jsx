import React, { useState } from 'react';
import peepService from '../services/peep.service';

const NewPeepForm = () => {

  const [content, setContent] = useState(``);
  const [message, setMessage] = useState(``);

  const onChangeContent = e => {
    const newContent = e.target.value;
    setContent(newContent);
  }

  const handlePost = async e => {
    e.preventDefault();

    const response = await peepService.createPeep(content);

    if(response.message) {
      setContent("");
      // placeholder for getting all peeps
    }

    setMessage(response.error);
  }

  return (

      <div className="center-container" id="post-new-peep" style={{width: '100vw'}}>
        <div className="card w-50" >  
          <div className="card-body">
            <h5 className="card-title">Post a peep...</h5>
          
            


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


          </div>
        </div>
      </div>
  
  );
};

export default NewPeepForm;
