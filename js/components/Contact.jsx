import React, {Component} from "react";
import Form from "./Form.jsx";
import Details from "./Details.jsx";

class Contact extends Component {
    render() {
        return <div className="contact" id="kontakt">
            <h1 className="contact__header">Masz pytanie?</h1>
            <div className="contact__items">
                <div className="contact__items__form">
                    <Form/>
                </div>
                <Details/>
            </div>
        </div>
    }
}
export default Contact;