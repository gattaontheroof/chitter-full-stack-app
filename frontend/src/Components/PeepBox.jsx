import React from 'react';
import formatDate from '../utils/dateFormatter';

function PeepBox ({content, date}) {
     const formattedDate = formatDate(date);
     const {day, month, shortMonthName, year, hour, minutes} = formattedDate;

    return (
        <div>
            <div className="card col-md-12" >  
                <div className="card-header">
                    {`${day}-${shortMonthName}-${year} ${hour}:${minutes}`}

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