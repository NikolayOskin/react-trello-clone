import React from 'react';

const CloseButton = (props) => (
    <button type="button"
            onClick={props.onClicked}
            className="button button--close"></button>
);

export default CloseButton;