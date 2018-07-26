import React, {Component} from "react";
import Slider from "./Slider.jsx"



class Blog extends Component {
    render() {
        return <div id="blog" className="blog">
            <h1 className="blog__header"><a href="http://zdalniematuralnie.wordpess.com">Odwiedź naszego bloga!</a></h1>
            <div className="blog__content">
            <Slider/>
            </div>
        </div>

    }
}

export default Blog;