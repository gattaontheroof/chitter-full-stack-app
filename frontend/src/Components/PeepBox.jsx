import React from 'react';

const PeepBox = ({content, date}) => {
     
    return (
        <div className="col-lg-3 col-md-6 col-sm-6 col-12" id="peep-box"> 
        <div className="card" id="peep-card">
           
        <h5 className="card-header">{`${date}`}</h5>
            <div className="card-body">
                <h3 className="card-text">{content}</h3>
            </div>
        </div>
    </div>
    );
};

export default PeepBox;