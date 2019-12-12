import React from 'react';

const Card = (props) => {
    return (
        <div className="card">
            {props.card}
        </div>
    );
};

export default Card;