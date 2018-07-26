import React, { Component } from 'react';

const LeftArrow = (props) => {
    return (
        <div onClick={props.previousSlide} className="backArrow">
            <span className="arrow"> &lt; </span>
        </div>
    );
}

export default LeftArrow;