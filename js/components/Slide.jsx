import React, {Component} from "react";


class Slide extends Component {
    render() {

        const {img, title, show, content} = this.props;
        return (
            <div className={`slide ${ !show ? "hidden" : "" }`}>
                <img src={img}/>
                <p>{title}</p>
                <p className="content">{content}</p>
            </div>
        )
    }
}

export default Slide;