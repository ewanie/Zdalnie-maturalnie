import React, { Component } from 'react';

const RightArrow = (props) => {
    return (
        <div onClick={props.nextSlide} className="nextArrow">
            <span className="arrow"> &gt; </span>
        </div>
    );
}

export default RightArrow;