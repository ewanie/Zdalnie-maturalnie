import React, {Component} from "react";

const data = [
    {
        img: "../images/przedmiotymaturanle.png",
        title: "przedmioty maturalne online",
        description: 'Wybierz przedmiot, ucz się go gdzie i kiedy chcesz. Na komputerze i urządzeniach mobilnych.'
    },
    {
        img: "../images/arkusze_small.png",
        title: "Arkusze maturalne zadania i testy",
        description: 'Z nami zobaczysz jak rozwiązywać różne zadania i jak formułować odpowiedzi.'
    },
    {
        img: "../images/wsparcie.png",
        title: 'wsparcie',
        description: 'Masz nasze wsparcie nie tylko w planowaniu nauki, ale również w rozwiązywaniu wątpliwości dotyczących zagmatwanych procedur maturalnych'
    },
    {
        img: '../images/innowacyjnosc.png',
        title: 'innowacyjność',
        description: "Treści przekażemy Ci w atrakcyjny sposób, łącząc różne metody nauczania."
    },
    {
        img: "../images/prostota.png",
        title: 'prostota nauczania',
        description: 'W prosty i przejrzysty sposób tłumaczymy wszystkie zagadnienia.'
    },
    {
        img: "../images/doswiadczenie.png",
        title: "doświadczenie",
        description: "Wiemy jak tworzyć dobe kursy online. Z pomocą doświadczonych nauczycieli dostaniesz materiały najwyższej jakości."
    },
    {
        img: "../images/motywacja.png",
        title: 'motywacja',
        description: "Pomożemy Ci wytrwać w realizacji Twoich celów."
    }
];


class WhyUs extends Component {
    render() {
        return <div className="why">
            <h1 className="why__main">Dlaczego my?</h1>
            <div className="why__details">
            {
                data.map((data, index) =>
                    <div key={index} className="why__details__item">
                        <img className="why__details__item__image" src={data.img}/>
                        <h3 className="why__details__item__title">{data.title}</h3>
                        <p className="why__details__item__description">{data.description}</p>
                    </div>
              )
            }
            </div>
        </div>
    }
}


export default WhyUs;