import React from 'react';

const PeepBox = ({content, date}) => {
     
    return (
        <div>
            <div className="card col-md-12" >  
                <div className="card-header">
                    {date}
                </div>
                <div className="card-body">
                    <blockquote className="blockquote mb-0">
                        <p className="card-text">{content}</p>
                        <footer className="blockquote-footer">
                            Kermit The Frog
                        </footer>
                    </blockquote>
                </div>
            </div>
            <br />
        </div> 
    );
};

export default PeepBox;