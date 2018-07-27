import React, {Component} from "react";

class Footer extends Component {
    render(){
        return <div className="footer">
            <span className="footer__copyright">&copy; Copyright by Zdalnie Maturalnie</span>
            <span className="footer__created">made with &hearts; by <a href="mailto:eniezgo@gmail.com">evix</a></span>
        </div>
    }
}

export default Footer;