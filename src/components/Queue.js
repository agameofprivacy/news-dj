import React, {Component} from "react";

class Queue extends Component {

    render(){
        return (
            <div>
                <div className="column custom-vid">
                    <div class="textbox-container">
                        <input className="textbox textbox--borderless textbox--url" placeholder="串場影片之 YouTube 連結..." />
                        <button id="search-vid">搜尋</button>
                    </div>
                    <div className="preview row">
                        <div className="thumbnail" />
                        <div className="texts column">
                            <h5>公視晚間新聞</h5>
                            <h6>公視新聞網</h6>
                            <p>識消乎。龍前小聲。片社演所了小很……日常灣男關轉大來爭到？有為天美面列了該停告友下光，電來推的現門定子父快想由教者快沒度沒一成想係。腦斷了聲舉，著早路方房；明...</p>
                        </div>
                    </div>
                    <button className="button button--confirm">加入清單</button>
                    <ul className="queue">
                        <li className="queue__item row">
                            <div className="queue__item__thumbnail"></div>
                            <div className="texts column">
                                <h5>公視晚間新聞</h5>
                                <p>2019年6月3日 加入</p>
                                <p>識消乎。龍前小聲。片社演所了小很……日常灣男關轉大來爭到？有為天美面列了該停告友下光，電來推的現門定子父快想由教者快沒度沒一成想係。腦斷了聲舉，著早路方房；明...</p>
                            </div>
                        </li>
                        <li className="queue__item row">
                            <div className="queue__item__thumbnail"></div>
                            <div className="texts column">
                                <h5>公視晚間新聞</h5>
                                <p>2019年6月3日 加入</p>
                                <p>識消乎。龍前小聲。片社演所了小很……日常灣男關轉大來爭到？有為天美面列了該停告友下光，電來推的現門定子父快想由教者快沒度沒一成想係。腦斷了聲舉，著早路方房；明...</p>
                            </div>
                        </li>
                        <li className="queue__item row">
                            <div className="queue__item__thumbnail"></div>
                            <div className="texts column">
                                <h5>公視晚間新聞</h5>
                                <p>2019年6月3日 加入</p>
                                <p>識消乎。龍前小聲。片社演所了小很……日常灣男關轉大來爭到？有為天美面列了該停告友下光，電來推的現門定子父快想由教者快沒度沒一成想係。腦斷了聲舉，著早路方房；明...</p>
                            </div>
                        </li>
                        <li className="queue__item row">
                            <div className="queue__item__thumbnail"></div>
                            <div className="texts column">
                                <h5>公視晚間新聞</h5>
                                <p>2019年6月3日 加入</p>
                                <p>識消乎。龍前小聲。片社演所了小很……日常灣男關轉大來爭到？有為天美面列了該停告友下光，電來推的現門定子父快想由教者快沒度沒一成想係。腦斷了聲舉，著早路方房；明...</p>
                            </div>
                        </li>
                        <li className="queue__item row">
                            <div className="queue__item__thumbnail"></div>
                            <div className="texts column">
                                <h5>公視晚間新聞</h5>
                                <p>2019年6月3日 加入</p>
                                <p>識消乎。龍前小聲。片社演所了小很……日常灣男關轉大來爭到？有為天美面列了該停告友下光，電來推的現門定子父快想由教者快沒度沒一成想係。腦斷了聲舉，著早路方房；明...</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Queue;