import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { GoLocation } from "react-icons/go";
import "../App.css"

class Journals extends Component{
    render(){
        return(
            <div className="container">
                <div className="container Card">
                    <div className="text-center image">
                        <img src={this.props.journal.imageUrl} alt=""/>
                    </div>
                    <div className="Image-content">
                        <p className="locations"><GoLocation color="red"/> <span className="location">{this.props.journal.location}</span> <a className="mapLink" href="{this.props.journal.googleMapsUrl}" _blank>View on the google Maps</a></p>
                        <h1 className="cardTitle">{this.props.journal.title}</h1>
                        <p className="date">{this.props.journal.startDate} - {this.props.journal.endDate}</p>
                        <p>{this.props.journal.description}</p>
                    </div>
                </div>
                <hr />
            </div>
        );
    }
}
export default Journals;