import React, {Component} from "react";

class Contact extends Component {
    render() {
        return <div classNme="contact">
            <form className="contact__form">
            <h1>Masz pytanie?</h1>
            <input type='text' value="name"/>
            <input type="email" value ="email"/>
            <textarea placeholder="twoja wiadomość"></textarea>
            <input type="text"/>
                <button type="submit">Wyślij</button>

            </form>
            <div className="contact__details">
                <p>Napisz do nas, z przyjemnością odpowiemy na każde pytanie</p>
                <h4>zdalniematuralnie@gmail.com</h4>
                <iframe src="https://www.facebook.com/Zadalnie-Maturalnie-574231399629510/" />
            </div>
        </div>
    }
}
export default Contact;