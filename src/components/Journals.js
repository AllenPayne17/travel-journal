import React, { Component } from "react";
import { Card } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../App.css"

class Journals extends Component{
    render(){
        return(
            <div className="journal">
                <Card className="card" style={{flexDirection: "row", border: "none"}}>
                    <Card.Img className="card-img" variant="top" src={this.props.journal.imageUrl} style={{width: "30rem"}} />
                    <Card.Body>
                        <p>{this.props.journal.title}</p>
                        <p>{this.props.journal.location}</p>
                        <p>{this.props.journal.description}</p>
                    </Card.Body>
                </Card>
                <hr />
            </div>
        );
    }
}
export default Journals;