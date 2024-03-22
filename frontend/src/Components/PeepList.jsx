import React from 'react';
import PeepBox from './PeepBox';

const PeepList = ({peeps}) => {

    const renderedPeeps = peeps.map((peep) => {
        return <PeepBox {...peep}  key={new Date.getDate()} />
    });

    return (
        <div className="container text-center">
            <div className="row row-cols-1 row-cols-md-4 g-4">
                {renderedPeeps}
            </div>
        </div>
    );
}

export default PeepList;