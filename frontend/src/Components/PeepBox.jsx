import React from 'react';
import formatDate from '../utils/dateFormatter';

function PeepBox ({content, date, user}) {
    const formattedDate = formatDate(date);
    const {day, month, shortMonthName, year, hour, minutes} = formattedDate;


    const formattedDateTime = ` . ${day}-${shortMonthName}-${year}, ${hour}:${minutes}`;

    return (
        <div>
            <div className="card col-md-12" >  
                <div className="card-header">
                    <span className="text-success">{` @${user.username} `}</span>
                    {formattedDateTime}
                </div>
                <div className="card-body">
                    <blockquote className="blockquote mb-0">
                        <p className="card-text">{content}</p>
                        <footer className="blockquote-footer">
                            {user.name}
                        </footer>
                    </blockquote>
                </div>
            </div>
            <br />
        </div> 
    );
};

export default PeepBox;