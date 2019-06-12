import React, {Component} from "react"

String.prototype.trunc = String.prototype.trunc ||
      function(n){
          return (this.length > n) ? this.substr(0, n-1) + '...' : this;
      };

class Gallery extends Component {

    render(){

        const dict = {
            chinese: "華語",
            taiwanese: "台語",
            sign: "手語",
            english: "English",
            thai: "ภาษาไทย",
            indonesian: "Indonesian",
            vietnamese: "tiếng Việt"
        }

        const { items } = this.props;

        var children = [];

        items.forEach((item, index) => {

            var pills = [];
            item.languages.forEach((language, langIndex) => {
                pills.push(
                    <button key={"lang" + langIndex} className="pill pill--small" value={language}>{dict[language]}</button>
                )
            })
            if (item.subtitles) {
                pills.push(
                    <button key={index} className="pill pill--small" value={"subtitles"}>有字幕</button>
                )
            }

            children.push(
                <div key={index} className="gallery__item">
                    <img className="gallery__item__preview" alt={item.name} src={item.previewUrl} />
                    <div className="pills">
                        {pills}
                    </div>
                    <h3 className="gallery__item__title">{item.name}</h3>
                    <p className="gallery__item__body">{item.description.trunc(80)}</p>
                </div>
            )
        })

        return (
            <div className="gallery">
                {children}
            </div>
        )
    }
}

export default Gallery;