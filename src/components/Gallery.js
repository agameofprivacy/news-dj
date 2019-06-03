import React, {Component} from "react"

String.prototype.trunc = String.prototype.trunc ||
      function(n){
          return (this.length > n) ? this.substr(0, n-1) + '...' : this;
      };

class Gallery extends Component {

    render(){

        const { items } = this.props;

        var children = [];

        items.forEach((item, index) => {

            var pills = [];
            item.pills.forEach((pill) => {
                pills.push(
                    <button className="pill pill--small" value={pill.value}>{pill.key}</button>
                )
            })

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