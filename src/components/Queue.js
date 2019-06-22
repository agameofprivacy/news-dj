import React, {Component} from "react";

class Queue extends Component {

    state = {
        preview: {
            title: "",
            image: "",
            description: "",
            channel: ""
        },
        queue: [],
    }

    componentDidMount = () => {
        window.fbAsyncInit = function() {
          window.FB.init({
            appId      : '585832711939369',
            cookie     : true,  // enable cookies to allow the server to access
                              // the session
            xfbml      : true,  // parse social plugins on this page
            version    : 'v2.1' // use version 2.1
          });
      
          // Now that we've initialized the JavaScript SDK, we call
          // FB.getLoginStatus().  This function gets the state of the
          // person visiting this page and can return one of three states to
          // the callback you provide.  They can be:
          //
          // 1. Logged into your app ('connected')
          // 2. Logged into Facebook, but not your app ('not_authorized')
          // 3. Not logged into Facebook and can't tell if they are logged into
          //    your app or not.
          //
          // These three cases are handled in the callback function.
        }.bind(this);
      
        // Load the SDK asynchronously
        (function(d, s, id) {
          var js, fjs = d.getElementsByTagName(s)[0];
          if (d.getElementById(id)) return;
          js = d.createElement(s); js.id = id;
          js.src = "//connect.facebook.net/en_US/sdk.js";
          fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    }
      

    validURL(str) {
        var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
          '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
          '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
          '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
          '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
          '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
        return !!pattern.test(str);
    }

    addToQueue() {
        this.setState({
            queued: []
        })
    }
      

    customVideoUrlUpdated = (e) => {
        console.log(`valid url: ${this.validURL(e.target.value)}`);
        var value = e.target.value;
        if (this.validURL(value)) {
            window.FB.api(
                "/",
                {
                    id: value,
                    access_token: "585832711939369|NB3IYtyjITLZ_q5TR61QYUzzzRA"
                },
                function (response) {
                    if (response && !response.error) {
                        console.log("response", response);
                        if (typeof(response.title) === "undefined") {
                            window.FB.api(
                                "/",
                                "post",
                                {
                                    id: value,
                                    access_token: "585832711939369|NB3IYtyjITLZ_q5TR61QYUzzzRA"
                                },
                                function (response) {
                                  if (response && !response.error) {
                                    /* handle the result */
                                    // update preview area with new image and description
                                    console.log(response);
                                    this.setState({
                                        preview: {
                                            title: response.title,
                                            image: response.image[0].url,
                                            description: response.description.substr(0, 60),
                                            channel: response.site_name
                                        }
                                    });
                                  }
                                }.bind(this)
                            );
                        } else {
                            this.setState({
                                preview: {
                                    title: response.title,
                                    image: response.image[0].url,
                                    description: response.description.substr(0, 60),
                                    channel: response.site_name
                                }
                            });
                        }                
                    }
                }.bind(this)
            )
        }
    }

    render(){
        return (
            <div>
                <div className="column custom-vid">
                    <div className="textbox-container">
                        <input onChange={this.customVideoUrlUpdated} className="textbox textbox--borderless textbox--url" placeholder="串場影片之 YouTube 連結..." />
                        <button id="search-vid">搜尋</button>
                    </div>
                    {
                        this.state.previewTitle !== "" &&
                        <div className="preview">
                            <div className="row">
                                <div className="thumbnail"><img src={this.state.previewImageUrl} /></div>
                                <div className="texts column">
                                    <h5>{this.state.previewTitle}</h5>
                                    <h6>{this.state.previewChannel}</h6>
                                    <p>{this.state.previewDescription}</p>
                                </div>
                            </div>
                            <button className="button button--confirm">加入清單</button>
                        </div>
                    }
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
                    </ul>
                </div>
            </div>
        )
    }
}

export default Queue;