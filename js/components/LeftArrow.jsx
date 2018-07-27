import React, { Component } from 'react';

const LeftArrow = (props) => {
    return (
        <div onClick={props.previousSlide} className="backArrow">
            <span> &lt; </span>
        </div>
    );
}

export default LeftArrow;