import React, {Component} from "react";



const data = [
    {
        img: "../images/przedmiotymaturanle.png",
        title: "przedmioty maturalne online",
        description: ''
    },
    {
        img: "../images/arkusze.png",
        title: "Arkusze maturalne zadania i testy",
        description: ''
    },
    {
        img: "../images/prostota.png",
        title: 'prostota nauczania',
        description: ''
    },
    {
        img: "../images/wsparcie.png",
        title: 'wsparcie',
        description: ''
    },
    {
        img: "../images/motywacja.png",
        title: 'motywacja',
        description: ""
    },
    {
        img: '../images/innowacyjnosc.png',
        title: 'innowacyjność',
        description: ""
    },
    {
      img: "../images/doswiadczenie.png",
      title: "doświadczenie",
      description: ""
    }
];


class WhyUs extends Component {
    render() {
        return <div className="why">
            <h1 className="why__main">Dlaczego my?</h1>
            {
                data.map((data, index) => <div key={data.index} className="why__details"><img className="why__etails__image" src={data.img}/><h3 className="why__details__title">{data.title}</h3><p className="why__details__description">{data.description}</p></div>
              )
            }
        </div>
    }
}


export default WhyUs;