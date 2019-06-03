import React from 'react';
import './App.css';
import Bar from './components/Bar';
import Filters from "./components/Filters";
import Gallery from "./components/Gallery";
import Queue from "./components/Queue";

function App() {


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

  var items = [
    {
      name: "公視晚間新聞",
      description: "識消乎。龍前小聲。片社演所了小很……日常灣男關轉大來爭到？有為天美面列了該停告友下光，電來推的現門定子父快想由教者快沒度沒一成想係。腦斷了聲舉，著早路方房；明為事海經是及思人許，兒物利發克建想住：青提則走發來備查過是假過心提的，美主法見我。南基到縣來了次房來愛品石紅。",
      previewUrl: "https://i.ytimg.com/vi/gLSDD3-zeks/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDT1gvuTUeOyGEuu_Ya1A2e4IrT3Q",
      pills: [
        {
          key: "華語",
          value: "chinese"
        },
        {
          key: "字幕",
          value: "subtitles"
        }
      ]
    },
    {
      name: "公視晚間新聞",
      description: "識消乎。龍前小聲。片社演所了小很……日常灣男關轉大來爭到？有為天美面列了該停告友下光，電來推的現門定子父快想由教者快沒度沒一成想係。腦斷了聲舉，著早路方房；明為事海經是及思人許，兒物利發克建想住：青提則走發來備查過是假過心提的，美主法見我。南基到縣來了次房來愛品石紅。",
      previewUrl: "https://i.ytimg.com/vi/gLSDD3-zeks/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDT1gvuTUeOyGEuu_Ya1A2e4IrT3Q",
      pills: [
        {
          key: "華語",
          value: "chinese"
        },
        {
          key: "字幕",
          value: "subtitles"
        }
      ]
    },
    {
      name: "公視晚間新聞",
      description: "識消乎。龍前小聲。片社演所了小很……日常灣男關轉大來爭到？有為天美面列了該停告友下光，電來推的現門定子父快想由教者快沒度沒一成想係。腦斷了聲舉，著早路方房；明為事海經是及思人許，兒物利發克建想住：青提則走發來備查過是假過心提的，美主法見我。南基到縣來了次房來愛品石紅。",
      previewUrl: "https://i.ytimg.com/vi/gLSDD3-zeks/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDT1gvuTUeOyGEuu_Ya1A2e4IrT3Q",
      pills: [
        {
          key: "華語",
          value: "chinese"
        },
        {
          key: "字幕",
          value: "subtitles"
        }
      ]
    },
    {
      name: "公視晚間新聞",
      description: "識消乎。龍前小聲。片社演所了小很……日常灣男關轉大來爭到？有為天美面列了該停告友下光，電來推的現門定子父快想由教者快沒度沒一成想係。腦斷了聲舉，著早路方房；明為事海經是及思人許，兒物利發克建想住：青提則走發來備查過是假過心提的，美主法見我。南基到縣來了次房來愛品石紅。",
      previewUrl: "https://i.ytimg.com/vi/gLSDD3-zeks/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDT1gvuTUeOyGEuu_Ya1A2e4IrT3Q",
      pills: [
        {
          key: "華語",
          value: "chinese"
        },
        {
          key: "字幕",
          value: "subtitles"
        }
      ]
    },
    {
      name: "公視晚間新聞",
      description: "識消乎。龍前小聲。片社演所了小很……日常灣男關轉大來爭到？有為天美面列了該停告友下光，電來推的現門定子父快想由教者快沒度沒一成想係。腦斷了聲舉，著早路方房；明為事海經是及思人許，兒物利發克建想住：青提則走發來備查過是假過心提的，美主法見我。南基到縣來了次房來愛品石紅。",
      previewUrl: "https://i.ytimg.com/vi/gLSDD3-zeks/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDT1gvuTUeOyGEuu_Ya1A2e4IrT3Q",
      pills: [
        {
          key: "華語",
          value: "chinese"
        },
        {
          key: "字幕",
          value: "subtitles"
        }
      ]
    },
    {
      name: "公視晚間新聞",
      description: "識消乎。龍前小聲。片社演所了小很……日常灣男關轉大來爭到？有為天美面列了該停告友下光，電來推的現門定子父快想由教者快沒度沒一成想係。腦斷了聲舉，著早路方房；明為事海經是及思人許，兒物利發克建想住：青提則走發來備查過是假過心提的，美主法見我。南基到縣來了次房來愛品石紅。",
      previewUrl: "https://i.ytimg.com/vi/gLSDD3-zeks/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDT1gvuTUeOyGEuu_Ya1A2e4IrT3Q",
      pills: [
        {
          key: "華語",
          value: "chinese"
        },
        {
          key: "字幕",
          value: "subtitles"
        }
      ]
    },
    {
      name: "公視晚間新聞",
      description: "識消乎。龍前小聲。片社演所了小很……日常灣男關轉大來爭到？有為天美面列了該停告友下光，電來推的現門定子父快想由教者快沒度沒一成想係。腦斷了聲舉，著早路方房；明為事海經是及思人許，兒物利發克建想住：青提則走發來備查過是假過心提的，美主法見我。南基到縣來了次房來愛品石紅。",
      previewUrl: "https://i.ytimg.com/vi/gLSDD3-zeks/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDT1gvuTUeOyGEuu_Ya1A2e4IrT3Q",
      pills: [
        {
          key: "華語",
          value: "chinese"
        },
        {
          key: "字幕",
          value: "subtitles"
        }
      ]
    },
    {
      name: "公視晚間新聞",
      description: "識消乎。龍前小聲。片社演所了小很……日常灣男關轉大來爭到？有為天美面列了該停告友下光，電來推的現門定子父快想由教者快沒度沒一成想係。腦斷了聲舉，著早路方房；明為事海經是及思人許，兒物利發克建想住：青提則走發來備查過是假過心提的，美主法見我。南基到縣來了次房來愛品石紅。",
      previewUrl: "https://i.ytimg.com/vi/gLSDD3-zeks/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDT1gvuTUeOyGEuu_Ya1A2e4IrT3Q",
      pills: [
        {
          key: "華語",
          value: "chinese"
        },
        {
          key: "字幕",
          value: "subtitles"
        }
      ]
    },
    {
      name: "公視晚間新聞",
      description: "識消乎。龍前小聲。片社演所了小很……日常灣男關轉大來爭到？有為天美面列了該停告友下光，電來推的現門定子父快想由教者快沒度沒一成想係。腦斷了聲舉，著早路方房；明為事海經是及思人許，兒物利發克建想住：青提則走發來備查過是假過心提的，美主法見我。南基到縣來了次房來愛品石紅。",
      previewUrl: "https://i.ytimg.com/vi/gLSDD3-zeks/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDT1gvuTUeOyGEuu_Ya1A2e4IrT3Q",
      pills: [
        {
          key: "華語",
          value: "chinese"
        },
        {
          key: "字幕",
          value: "subtitles"
        }
      ]
    },
    {
      name: "公視晚間新聞",
      description: "識消乎。龍前小聲。片社演所了小很……日常灣男關轉大來爭到？有為天美面列了該停告友下光，電來推的現門定子父快想由教者快沒度沒一成想係。腦斷了聲舉，著早路方房；明為事海經是及思人許，兒物利發克建想住：青提則走發來備查過是假過心提的，美主法見我。南基到縣來了次房來愛品石紅。",
      previewUrl: "https://i.ytimg.com/vi/gLSDD3-zeks/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDT1gvuTUeOyGEuu_Ya1A2e4IrT3Q",
      pills: [
        {
          key: "華語",
          value: "chinese"
        },
        {
          key: "字幕",
          value: "subtitles"
        }
      ]
    },
  ];

  return (
    <div className="App">
      <Bar />
      <div className="container">
        <div className="main">
          <Filters filters={filters} />
          <Gallery items={items} />
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

export default App;
