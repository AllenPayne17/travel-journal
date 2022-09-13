import React, { Component } from "react";
import Journals from "./Journals"
import "../App.css"

class Hero extends Component{
    render() {

        console.log(this.props)

        return(
            <section className="hero">
                <div className="journals">
                    {this.props.data.map(journal => < Journals key={journal.id} journal={journal} />)}
                </div>
            </section>
        );
    }
}
export default Hero;