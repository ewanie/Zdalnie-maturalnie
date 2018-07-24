import React, {Component} from "react";

class AboutUs extends Component {
    render() {
        return <div className="about">
            <h1 className="about__header">Kim jesteśmy?</h1>
            <div className="about__details">
                <div className="about__details__lidia"><img /><h3>lidia czerniec</h3><p>Mauris tempus ultricies nulla, ac pharetra magna bibendum a. Praesent id turpis lobortis, vestibulum risus at, pulvinar diam. Sed vel augue in mi aliquam lobortis ac eget dolor. Quisque id dolor tortor.</p></div>
                <div className="about__details__olga"><img /><h3>olga kucińska</h3><p>Fusce et magna interdum, auctor purus eget, dapibus neque. Maecenas tempor tortor vel odio vestibulum rutrum iaculis vitae sapien. Morbi tempus consequat eros ut fermentum. Praesent sit amet magna sapien.</p></div>
                <div className="about__details__agata"><img /><h3>agata szyszko</h3><p>Praesent eu massa ornare, faucibus diam nec, ornare dui. Nunc id mi sit amet libero tristique finibus ac in nisi. Curabitur eu luctus tellus. Aliquam ut dapibus nisi. Sed varius felis , dapibus  auctor.</p></div>
            </div>
        </div>
    }
}


export default AboutUs;