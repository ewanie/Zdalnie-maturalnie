import React, {Component} from "react";

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
            num1: Math.floor(Math.random() * 10) + 1,
            num2: Math.floor(Math.random() * 10) + 1,
            result: '',
        }
    }

    nameChange = (event) => {
        this.setState({
            name: event.target.value,
        })
    };

    emailChange = (event) => {
        this.setState({
            email: event.target.value,

        })
    };

    messageChange = (event) => {
        this.setState({
            message: event.target.value,

        })
    };

    multiplyChange =(event) => {
        this.setState({
            result: event.target.value,

        })
    };

    onSubmit = (event) => {
        event.preventDefault();
        if(this.state.result == (this.state.num1 + this.state.num2)) {

            Email.send("eniezgo@gmail.com",
                "eniezgo@gmail.com",
                "Zapytanie",
                this.state.message,
                "smtp.elasticemail.com",
                "eniezgo@gmail.com",
                "efb242c2-1400-4c2b-afb1-5b4c71a3a558");

            alert('dziękujemy za wiadomość!');

        } else {
            alert('popraw wynik!');
        }
    };

    render() {
        return <form>
            <input className="contact__items__form__name"
                   type='text' placeholder="Twoje imię" value={this.state.name} onChange={this.nameChange}
                   />
            <input className="contact__items__form__email"
                   type="email" placeholder="Twój e-mail" value={this.state.email} onChange={this.emailChange}/>
            <textarea className="contact__items__form__message"
                      placeholder="miejsce na Twoją wiadomość" value={this.state.message} onChange={this.messageChange}/>
            <span className="contact__items__form__question" >{this.state.num1} + {this.state.num2} =</span>
            <input className="contact__items__form__answer" type="text" value={this.state.result} onChange={this.multiplyChange}/>
            <button type="submit" onClick={ (event) => { this.onSubmit(event); }}>Wyślij</button>
        </form>
    }
}


export default Form;