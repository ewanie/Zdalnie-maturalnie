import React, {Component} from "react";

class Presentation extends Component {
    render() {
        return <div className="presentation">
                <div className="presentation__header">
                    <h1 className="presentation__header__title">egzaminy ustne</h1>
                    <p className="presentation__header__description">nasze kursy pozwolą Ci zrozumieć jak wyglądają egzaminy ustne, jakie są wymagania i sposób oceniania</p>
                </div>
                <div className="presentation__courses">
                    <div className="presentation__courses__details__title"><p>język polski</p></div>
                    <div className="presentation__courses__details__title"><p>język niemiecki</p></div>
                    <div className="presentation__courses__details__title"><p>język angielski</p></div>
                <div className="presentation__courses__details__description"><p>Lorem ipsum dolor sit amet dolor. Duis elementum vel, dapibus aliquam. Phasellus ipsum primis in faucibus orci quis ipsum</p></div>
                    <div className="presentation__courses__details__description"><p>Lorem ipsum dolor sit amet dolor. Duis elementum vel, dapibus aliquam. Phasellus ipsum primis in faucibus orci quis ipsum</p></div>
                    <div className="presentation__courses__details__description"><p>Lorem ipsum dolor sit amet dolor. Duis elementum vel, dapibus aliquam. Phasellus ipsum primis in faucibus orci quis ipsum</p></div>
                </div>
                </div>
    }
}
export default Presentation;