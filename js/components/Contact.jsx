import React, {Component} from "react";

class Contact extends Component {
    render() {
        return <div div className="contact">
                    <h1 className="contact__header">Masz pytanie?</h1>
                    <div className="contact__items">
                        <div className="contact__items__form">
                        <form>
                            <input className="contact__items__form__name" type='text' placeholder="Twoje imię" />
                            <input className="contact__items__form__email" type="email" placeholder="Twój e-mail" />
                            <textarea className="contact__items__form__message" placeholder="miejsce na Twoją wiadomość"/>
                            <input className="contact__items__form__question" type="text"/>
                            <button type="submit">Wyślij</button>
                        </form>
                        </div>
                    <div className="contact__items__details">
                        <h3 className="contact__items__details__header">Napisz do nas!</h3>
                        <p className="contact__items__details__content">Z przyjemnością odpowiemy na każde Twoje pytanie.</p>
                        <h4 className="contact__items__details__address"><a href='mailto:zdalniematuralnie@gmail.com'>zdalniematuralnie@gmail.com</a></h4>
                        <div id="fb-root">
                            <div className="fb-page"
                                 data-href="https://www.facebook.com/Zadalnie-Maturalnie-574231399629510/"
                                 data-tabs="timeline" data-width="300" data-height="180" data-small-header="false"
                                 data-adapt-container-width="false" data-hide-cover="false" data-show-facepile="true">
                                <blockquote cite="https://www.facebook.com/Zadalnie-Maturalnie-574231399629510/"
                                            className="fb-xfbml-parse-ignore"><a
                                    href="https://www.facebook.com/Zadalnie-Maturalnie-574231399629510/">Zadalnie
                                    Maturalnie</a></blockquote>
                            </div></div>
                    </div>
                    </div>
            </div>
    }
}
export default Contact;