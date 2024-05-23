import React from 'react';
import PeepBox from './PeepBox';

const PeepList = ({peeps}) => {

    const renderedPeeps = peeps.map((peep) => {
        return <PeepBox {...peep}  key={peep._id} />
    });

    return (

     
        <div className="container text-center" id="peep-list-container">
        
            <div className="row">
                <h2>Latest Peeps!</h2>
            </div>
            
            <div className="row">
                {renderedPeeps}
            </div>

        </div>

   

    );
}

export default PeepList;