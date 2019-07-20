import React, { Component } from 'react';
import './App.css';
import Bar from './components/Bar';
import Filters from "./components/Filters";
import Gallery from "./components/Gallery";
import Queue from "./components/Queue";
import apiKey from "./credentials";

const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

class App extends Component {

  state = {
    languages: ["zh-tw", "min-tw", "sign", "en-us", "vi", "id", "th"],
    subtitlesOnly: false,
    segueTimeLimit: -1,
    db: undefined,
    programs: [],
  }

  setAppState = form => {
    for (const [key, value] of Object.entries(form)) {
      this.setState({ [key]: value });
    }
  };

  componentDidMount = () => {
    // Initialize Cloud Firestore through Firebase
    let firebaseConfig = {
      apiKey: apiKey,
      authDomain: "better-news-235900.firebaseapp.com",
      databaseURL: "https://better-news-235900.firebaseio.com",
      projectId: "better-news-235900",
      storageBucket: "better-news-235900.appspot.com",
    };
  
    firebase.initializeApp(firebaseConfig);

    var db = firebase.firestore();

    this.setState({db: db}, function(){
      console.log(this.state.db);
    });
  }


  render(){

    const filters = [
      {
        other: [
          {
            key: "以有字幕節目為主",
            value: "subtitlesOnly"
          },
        ]
      },
      {
        languages: [
          {
            key: "華語",
            value: "zh-tw"
          },
          {
            key: "台語",
            value: "min-tw"
          },
          {
            key: "手語",
            value: "sign"
          },
          {
            key: "English",
            value: "en-us"
          },
          {
            key: "ภาษาไทย",
            value: "th"
          },
          {
            key: "Indonesian",
            value: "id"
          },
          {
            key: "tiếng Việt",
            value: "vi"
          }
        ]
      }
    ];
  
    return (
      <div className="App">
        <Bar />
        <div className="container">
          <div className="side">
            <h3 className="side__title">
              串場影片清單
            </h3>
            <Queue setAppState={this.setAppState} />
          </div>          
          <div className="main">
            <Filters setAppState={this.setAppState} languages={this.state.languages} subtitlesOnly={this.state.subtitlesOnly} filters={filters} setFilters={this.setFilters} />
            <Gallery db={this.state.db} setAppState={this.setAppState} programs={this.state.programs.filter(item => ((this.state.subtitlesOnly ? item.hasSubtitles : true) && item.languages.some(r => this.state.languages.includes(r))))} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
