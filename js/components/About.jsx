import React, {Component} from "react";
import WhyUs from "./WhyUs.jsx";
import AboutUs from "./AboutUs.jsx";

class About extends Component {
    render() {
        return <div id="about">
            <WhyUs />
            <AboutUs />
            </div>
    }
}

export default About;