import React, {Component} from "react";
import { Link } from "react-router-dom";


class Learn extends Component {
    render() {
        return <div className="learn">
                <Link className="learn__oralExam" to="/ustne">ustne</Link>
            <h1> Ustne</h1>
            <p>przygotowanie od podstaw</p>
                <Link className="learn__math" to="/matematyka">matematyka</Link>
            <h1> Matematyka</h1>
            <p>ucz się matematyki online!</p>
        </div>
    }


}

export default Learn;