
import React, {Component} from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero'

class App extends Component{

  state = {
    data: [
        {
            id: 0,
            title: "Mount Fuji",
            location: "Japan",
            googleMapsUrl: "https://goo.gl/maps/1DGM5WrWnATgkSNB8",
            startDate: "12 Jan, 2021",
            endDate: "24 Jan, 2021",
            description: "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
            imageUrl: "images/australia.png"
        },
        {
            id: 1,
            title: "Mount Fuji",
            location: "Japan",
            googleMapsUrl: "",
            startDate: "12 Jan, 2021",
            endDate: "24 Jan, 2021",
            description: "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
            imageUrl: "images/japan.png"
        },{
            id: 2,
            title: "Mount Fuji",
            location: "Japan",
            googleMapsUrl: "https://goo.gl/maps/1DGM5WrWnATgkSNB8",
            startDate: "12 Jan, 2021",
            endDate: "24 Jan, 2021",
            description: "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
            imageUrl: "images/norway.png"
        }
        
    ]
}

  render(){
    return (
      <div className="App">
        <Header />
        <Hero data={this.state.data} />
      </div>
    );
  }
}

export default App;
