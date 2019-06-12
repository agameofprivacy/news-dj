import React, { Component } from 'react';
import './App.css';
import Bar from './components/Bar';
import Filters from "./components/Filters";
import Gallery from "./components/Gallery";
import Queue from "./components/Queue";
import morning from './img/morning.png';
import noon_tw from './img/noon-tw.png';
import evening from './img/evening.png';
import evening_tw from './img/evening-tw.png';
import sign from './img/sign.png';
import english from './img/english.png';
import world from './img/world.png';
import lab from './img/lab.png';
import peopo from './img/peopo.png';
import thai from './img/thai.png';
import vietnamese from './img/vietnamese.png';
import indonesian from './img/indonesian.png';

class App extends Component {

  state = {
    languages: ["chinese", "taiwanese", "sign", "english", "vietnamese", "indonesian", "thai"],
    subtitlesOnly: false,
  }

  setAppState = form => {
    for (const [key, value] of Object.entries(form)) {
      this.setState({ [key]: value });
    }
  };


  render(){

    const filters = [
      {
        other: [
          {
            key: "以有字幕節目為主",
            value: "subtitles"
          },
        ]
      },
      {
        languages: [
          {
            key: "華語",
            value: "chinese"
          },
          {
            key: "台語",
            value: "taiwanese"
          },
          {
            key: "手語",
            value: "sign"
          },
          {
            key: "English",
            value: "english"
          },
          {
            key: "ภาษาไทย",
            value: "thai"
          },
          {
            key: "Indonesian",
            value: "indonesian"
          },
          {
            key: "tiếng Việt",
            value: "vietnamese"
          }
        ]
      }
    ];
  
    const items = [
      {
        name: "公視早安新聞",
        description: "識消乎。龍前小聲。片社演所了小很……日常灣男關轉大來爭到？有為天美面列了該停告友下光，電來推的現門定子父快想由教者快沒度沒一成想係。腦斷了聲舉，著早路方房；明為事海經是及思人許，兒物利發克建想住：青提則走發來備查過是假過心提的，美主法見我。南基到縣來了次房來愛品石紅。",
        previewUrl: morning,
        languages: ["chinese"],
        subtitles: true,
      },
      {
        name: "公視中晝新聞",
        description: "識消乎。龍前小聲。片社演所了小很……日常灣男關轉大來爭到？有為天美面列了該停告友下光，電來推的現門定子父快想由教者快沒度沒一成想係。腦斷了聲舉，著早路方房；明為事海經是及思人許，兒物利發克建想住：青提則走發來備查過是假過心提的，美主法見我。南基到縣來了次房來愛品石紅。",
        previewUrl: noon_tw,
        languages: ["taiwanese"],
        subtitles: true,
      },
      {
        name: "公視晚間新聞",
        description: "識消乎。龍前小聲。片社演所了小很……日常灣男關轉大來爭到？有為天美面列了該停告友下光，電來推的現門定子父快想由教者快沒度沒一成想係。腦斷了聲舉，著早路方房；明為事海經是及思人許，兒物利發克建想住：青提則走發來備查過是假過心提的，美主法見我。南基到縣來了次房來愛品石紅。",
        previewUrl: evening,
        languages: ["chinese"],
        subtitles: true,
      },
      {
        name: "公視暗時新聞",
        description: "識消乎。龍前小聲。片社演所了小很……日常灣男關轉大來爭到？有為天美面列了該停告友下光，電來推的現門定子父快想由教者快沒度沒一成想係。腦斷了聲舉，著早路方房；明為事海經是及思人許，兒物利發克建想住：青提則走發來備查過是假過心提的，美主法見我。南基到縣來了次房來愛品石紅。",
        previewUrl: evening_tw,
        languages: ["taiwanese"],
        subtitles: true,
      },
      {
        name: "公視手語新聞",
        description: "識消乎。龍前小聲。片社演所了小很……日常灣男關轉大來爭到？有為天美面列了該停告友下光，電來推的現門定子父快想由教者快沒度沒一成想係。腦斷了聲舉，著早路方房；明為事海經是及思人許，兒物利發克建想住：青提則走發來備查過是假過心提的，美主法見我。南基到縣來了次房來愛品石紅。",
        previewUrl: sign,
        languages: ["sign"],
        subtitles: true,
      },
      {
        name: "公視英語新聞",
        description: "識消乎。龍前小聲。片社演所了小很……日常灣男關轉大來爭到？有為天美面列了該停告友下光，電來推的現門定子父快想由教者快沒度沒一成想係。腦斷了聲舉，著早路方房；明為事海經是及思人許，兒物利發克建想住：青提則走發來備查過是假過心提的，美主法見我。南基到縣來了次房來愛品石紅。",
        previewUrl: english,
        languages: ["english"],
        subtitles: true,
      },
      {
        name: "公視印尼語新聞",
        description: "識消乎。龍前小聲。片社演所了小很……日常灣男關轉大來爭到？有為天美面列了該停告友下光，電來推的現門定子父快想由教者快沒度沒一成想係。腦斷了聲舉，著早路方房；明為事海經是及思人許，兒物利發克建想住：青提則走發來備查過是假過心提的，美主法見我。南基到縣來了次房來愛品石紅。",
        previewUrl: indonesian,
        languages: ["indonesian"],
        subtitles: true,
  
      },
      {
        name: "公視泰語新聞",
        description: "識消乎。龍前小聲。片社演所了小很……日常灣男關轉大來爭到？有為天美面列了該停告友下光，電來推的現門定子父快想由教者快沒度沒一成想係。腦斷了聲舉，著早路方房；明為事海經是及思人許，兒物利發克建想住：青提則走發來備查過是假過心提的，美主法見我。南基到縣來了次房來愛品石紅。",
        previewUrl: thai,
        languages: ["thai"],
        subtitles: true,
      },
      {
        name: "公視越南語新聞",
        description: "識消乎。龍前小聲。片社演所了小很……日常灣男關轉大來爭到？有為天美面列了該停告友下光，電來推的現門定子父快想由教者快沒度沒一成想係。腦斷了聲舉，著早路方房；明為事海經是及思人許，兒物利發克建想住：青提則走發來備查過是假過心提的，美主法見我。南基到縣來了次房來愛品石紅。",
        previewUrl: vietnamese,
        languages: ["vietnamese"],
        subtitles: true,
      },
      {
        name: "公視新聞全球話",
        description: "識消乎。龍前小聲。片社演所了小很……日常灣男關轉大來爭到？有為天美面列了該停告友下光，電來推的現門定子父快想由教者快沒度沒一成想係。腦斷了聲舉，著早路方房；明為事海經是及思人許，兒物利發克建想住：青提則走發來備查過是假過心提的，美主法見我。南基到縣來了次房來愛品石紅。",
        previewUrl: world,
        languages: ["chinese"],
        subtitles: false,
      },
      {
        name: "公視公民新聞報",
        description: "識消乎。龍前小聲。片社演所了小很……日常灣男關轉大來爭到？有為天美面列了該停告友下光，電來推的現門定子父快想由教者快沒度沒一成想係。腦斷了聲舉，著早路方房；明為事海經是及思人許，兒物利發克建想住：青提則走發來備查過是假過心提的，美主法見我。南基到縣來了次房來愛品石紅。",
        previewUrl: peopo,
        languages: ["chinese"],
        subtitles: true,
      },
      {
        name: "公視新聞實驗室",
        description: "識消乎。龍前小聲。片社演所了小很……日常灣男關轉大來爭到？有為天美面列了該停告友下光，電來推的現門定子父快想由教者快沒度沒一成想係。腦斷了聲舉，著早路方房；明為事海經是及思人許，兒物利發克建想住：青提則走發來備查過是假過心提的，美主法見我。南基到縣來了次房來愛品石紅。",
        previewUrl: lab,
        languages: ["chinese"],
        subtitles: true,
      }
    ];
  
    return (
      <div className="App">
        <Bar />
        <div className="container">
          <div className="main">
            <Filters setAppState={this.setAppState} languages={this.state.languages} subtitlesOnly={this.state.subtitlesOnly} filters={filters} setFilters={this.setFilters} />
            <Gallery items={items.filter(item => ((this.state.subtitlesOnly ? item.subtitles : true) && item.languages.some(r => this.state.languages.includes(r))))} />
          </div>
          <div className="side">
            <h3 className="side__title">
              串場影片清單
            </h3>
            <Queue />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
