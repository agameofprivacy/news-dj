import React, {Component} from "react";

class Bar extends Component {

    render() {
        return (
            <div className="bar">
                <div>
                    <h1 className="bar__title">好新聞點播器</h1>
                    <h2 className="bar__subtitle">直播時段放直播，沒有直播放最新，新聞之間穿插客製清單</h2>
                </div>
                <button className="button bar__profile"></button>
            </div>
        )
    }
}

export default Bar;