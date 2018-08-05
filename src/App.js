import React, { Component } from 'react';
import './index.css';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';

//Clarifi API 
const app = new Clarifai.App({
  apiKey: '4b6c03412295418a8e960eb209bf6e55'
 });

 //particles.js setting from their documentation
const particlesOptions = { 
    particles: {
        number: {
          value:30,
          density:{
          enable: true,
          value_area:800
        }
      }
    }
  }

class App extends Component {
  constructor(){
    super();
    this.state={
      input:'',
      imgUrl:''
    }
  }

  onInputChange = (event) => {
     this.setState({input : event.target.value});
  }

  onButtonSubmit = (e) => {
    e.preventDefault();
    this.setState({imgUrl : this.state.input});

// initialize with your api key. This will also work in your browser via http://browserify.org/

    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input).then(
    function(response) {
      // get the boundnig box data from the response
      console.log(response.outputs[0].data.regions[0].region_info.bounding_box);
    },
    function(err) {
      // there was an error
    }
  );
  }
  render() {
    return (
      <div className="App">
      <Particles className="particles" params={particlesOptions} />
      <Navigation/>
      <Logo />
      <Rank />
      <ImageLinkForm onButtonSubmit={this.onButtonSubmit} onInputChange={this.onInputChange}/>
      <FaceRecognition imgUrl={this.state.imgUrl}/>

      </div>
    );
  }
}

export default App;
