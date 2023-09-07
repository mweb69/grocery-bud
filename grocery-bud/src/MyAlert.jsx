import React from 'react';

function MyAlert(props) {
    return (
        <div className={`alert alert-${props.variant}`} role="alert">
            {props.message}
        </div>
    );
}

export default MyAlert;
