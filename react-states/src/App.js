import './App.css';
import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    Person: {
      fullName: "Kais Namsi",
      bio: "Hustler",
      imgSrc: "https://media.licdn.com/dms/image/D4D03AQGE-siViJVakw/profile-displayphoto-shrink_800_800/0/1675796264837?e=2147483647&v=beta&t=KEkENuRDnqEzuFdZQ9_y8FaOUcIndKw9SOwHs61K1bQ",
      profession: "Web Developer"
    },
    show: true,
    counter:0
  };

  handleShowPerson = () => {
    this.setState({
      ...this.state,
      show: !this.state.show
    });
  };

  componentDidMount() {
    setInterval(
      () => {
        this.setState({
          ...this.setState,
          counter: this.state.counter +1
      
          })
        },
      1000
    );
  }
  render() {
    return (
      <>
        {this.state.show && (
          <>
            <h1>{this.state.Person.fullName}</h1>
            <h2>{this.state.Person.bio}</h2>
            <img src={this.state.Person.imgSrc} alt="Kais"></img>
            <h2>{this.state.Person.profession}</h2>
            <br></br>
          </>
        )}
{!this.state.show && (
          <>
          <h2>{this.state.counter}</h2>
          </>
        )
        }
        <button onClick={this.handleShowPerson}>click here</button>
        
      </>
    );
  }
}

export default App;
