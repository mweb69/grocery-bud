import React from 'react';
import { useEffect } from 'react';
import './MyAlert.css'

function MyAlert(props) {

    const {variant,message,setItem} = props;

    useEffect(() => {
        setTimeout(() => {
            setItem(false);
        }, 60000);
    }, []);

    return (
        <div className={`alert alert-${variant}`} role="alert">
            {message}
            <div
                className="progress-bar progress-bar-striped progress-bar-animated"
                role="progressbar"
                aria-valuenow="0"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: '100%',height: '30px' }}
            ></div>
        </div>
    );
}

export default MyAlert;
