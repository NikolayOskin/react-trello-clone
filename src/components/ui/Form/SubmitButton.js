import React from 'react';

const SubmitButton = (props) => (
        <button type="button"
                onClick={props.onSubmited}
                className="button button--submit">
            {props.text}
        </button>
);

export default SubmitButton;