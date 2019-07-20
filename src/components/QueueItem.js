
import React, {Component} from "react";

class QueueItem extends Component {

  render() {
    const { item, handleClick } = this.props;
    return (
      <li value={item.videoId} className="queue__item row" onClick={handleClick}>
        <div className="queue__item__thumbnail">
          <img alt='影片預覽圖片' src={!item.hasOwnProperty("image") || item.image === "" ? '' : item.image} />
        </div>
        <div className="texts column">
            <h5>{item.title}</h5>
            <p>{item.channel}</p>
            <p>{item.description}</p>
        </div>
      </li>
)
  }
}

export default QueueItem;