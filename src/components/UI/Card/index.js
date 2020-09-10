import React from 'react';
import './style.css';
function Card(_props) {
    return (
        <div className="card">
            {_props.children}
        </div>
    )
}

export default Card