import React, { Component } from 'react';

const RightArrow = (props) => {
    return (
        <div onClick={props.nextSlide} className="nextArrow">
            <span> &gt; </span>
        </div>
    );
}

export default RightArrow;