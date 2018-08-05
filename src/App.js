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
      imgUrl:'',
      box:{}
    }
  }
  //data output example: bounding_box:
// bottom_row:0.86537194
// left_col: 0.21732157
// right_col:0.72114766
// top_row:0.31689075

  calculateFaceLocation = (data) => {
    console.log(data);
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('input-image');
    const width = Number(image.width);
    const height = Number(image.height);
    console.log(width, height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  displayFacebox = (box) => {
    this.setState({box: box})
    console.log(box);
  }

  onInputChange = (event) => {
     this.setState({input : event.target.value});
  }

  onButtonSubmit = (e) => {
    e.preventDefault();
    this.setState({imgUrl : this.state.input});

// initialize with your api key. This will also work in your browser via http://browserify.org/

    app.models
    .predict(
      Clarifai.FACE_DETECT_MODEL,
       this.state.input)
       .then(response => this.displayFacebox(this.calculateFaceLocation(response)))
      // get the boundnig box data from the response
      //console.log(response.outputs[0].data.regions[0].region_info.bounding_box);

    .catch(err => console.log(err));
      // there was an error
  }
  render() {
    return (
      <div className="App">
      <Particles className="particles" params={particlesOptions} />
      <Navigation/>
      <Logo />
      <Rank />
      <ImageLinkForm onButtonSubmit={this.onButtonSubmit} onInputChange={this.onInputChange}/>
      <FaceRecognition box={this.state.box} imgUrl={this.state.imgUrl}/>

      </div>
    );
  }
}

export default App;
