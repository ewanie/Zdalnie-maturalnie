import React, {Component} from "react";
import Slide from "./Slide.jsx";
import RightArrow from "./RightArrow.jsx";
import LeftArrow from "./LeftArrow.jsx";



class Slider extends Component {

    constructor(props) {
        super(props);
        this.state = {
            slideIndex: 0,
            slides:[
                {
                    img: "../images/neonbrand-570373-unsplash_edited.jpg",
                    title: "Lorem ipsum dolor sit amet",
                    content: "Lorem ipsum dolor sit amet purus sem at urna eu nibh. Vestibulum dignissim dolor cursus sed, venenatis nulla massa, dictum. "},
                {
                    img: "../images/nikhita-s-615116-unsplash_edited.jpg",
                    title: "Vivamus est. Vivamus.",
                    content: "Vivamus consequat magna diam, suscipit id, porttitor eros mauris, consequat. Suspendisse commodo pede purus, nec magna."
                },
                {
                    img: "../images/tbel-abuseridze-662841-unsplash_edited.jpg",
                    title: "Phasellus ornare magna.",
                    content: "Lorem ipsum dolor sit amet mi risus libero, id lectus. Vivamus consequat magna diam, suscipit id, porttitor eros mauris, consequat.",
                },
                {
                    img: "../images/tim-gouw-69753-unsplash_edited.jpg",
                    title: "Etiam risus libero, egestas risus.",
                    content: "Lorem ipsum dolor sit amet wisi. Sed ac elit rhoncus aliquam lacinia, risus tortor, fermentum orci ultricies accumsan. In hac."
                },
                {
                    img: "../images/tra-nguyen-459276-unsplash_edited.jpg",
                    title: "Nullam rutrum sit.",
                    content: "Lorem ipsum dolor sit amet erat. Suspendisse commodo pede purus, nec magna. Cum sociis natoque penatibus et malesuada fames ac."
                }
            ]
        };


        this.nextSlide = this.nextSlide.bind(this);
        this.previousSlide = this.previousSlide.bind(this);

    }


    nextSlide() {
        const {slideIndex, slides} = this.state;
        if(slideIndex+1 < slides.length){
            this.setState({ slideIndex: slideIndex + 1 })
        }
    }

    previousSlide() {
        const {slideIndex} = this.state;
        if(slideIndex-1 >= 0) {
            this.setState({slideIndex: slideIndex - 1})
        }
    }



    render() {
        const {slideIndex} = this.state;
        return (<div className="slider">

            {
                this.state.slides.map((slide, index) => <Slide show={slideIndex===index} {...slide} />)
            }

            <LeftArrow previousSlide={this.previousSlide} />
            <RightArrow nextSlide={this.nextSlide} />
        </div>);


    }
}


export default Slider;
