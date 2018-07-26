import React, {Component} from "react";
import { Link } from "react-router-dom";


class Learn extends Component {
    render() {
        return <div id="przedmioty" className="learn">
            <div className="learn__oralExam">
                <Link className="learn__oralExam__link" to="/ustne"><h1> Ustne</h1></Link>
                <p>przygotowanie od podstaw</p>
            </div>
            <div className="learn__math">
                <Link className="learn__math__link" to="/matematyka"><h1> Matematyka</h1></Link>
                <p>ucz się matematyki online!</p>
            </div>
            </div>
    }


}

export default Learn;