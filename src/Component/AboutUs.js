import React from "react";
import SubNav from './SubNav';
class AboutUs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <div className="container">
                 <SubNav />
            </div>
        );
    }
}

export default AboutUs;