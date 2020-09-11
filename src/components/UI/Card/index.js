import React from 'react';
import './style.css';

const Card=(_props)=> {
    return (
        <div className="card" style={{width:_props.width ? _props.width:'100%'}}>
            {_props.children}
        </div>
    )
}

export default Card