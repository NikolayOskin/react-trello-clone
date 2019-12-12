import React from 'react';

const NewButton = (props) => {
    return (
        <div className="add-new">
            <button className="button button--new" onClick={props.onClicked}>{props.text}</button>
        </div>
    );
};

export default NewButton;