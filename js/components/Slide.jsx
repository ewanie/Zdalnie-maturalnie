import React, {Component} from "react";


class Slide extends Component {
    render() {

        const {img, title, show, content} = this.props;
        return (
            <div className={`slide ${ !show ? "hidden" : "" }`}>
                <div className="slider">
                <img src={img}/>
                <p className="title">{title}</p>
                <p className="content">{content}</p>
                </div>
            </div>
        )
    }
}

export default Slide;