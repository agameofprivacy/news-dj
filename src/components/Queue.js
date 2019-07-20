import React, {Component} from "react";
import QueueItem from "./QueueItem";

class Queue extends Component {

    state = {
        customVidUrlIsValid: false,
        url: "",
        preview: undefined,
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

    enqueue = () => {
        let joined = this.state.queue.concat(this.state.preview);
        this.setState({
            queue: joined,
        }, (res) => {
            console.log("queue", this.state.queue);
            this.setState({
                preview: undefined,
                url: ''
            })
        })
    }

    customVideoUrlUpdated = (e) => {
        console.log(`valid url: ${this.validURL(e.target.value)}`);
        var value = e.target.value;
        if (this.validURL(value)) {
            this.setState({customVidUrlIsValid: true, url: value});
        } else {
            this.setState({customVidUrlIsValid: false});
        }
    }

    segueTimeLimitUpdated = (e) => {
        var value = parseInt(e.target.value);
        console.log('selected', value);
        this.props.setAppState({segueTimeLimit: value});
    }

    fetchVideoDetails = () => {
        window.FB.api(
            "/",
            {
                id: this.state.url,
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
                                id: this.state.url,
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
                                        description: response.description,
                                        channel: response.site_name,
                                        videoId: this.state.url.replace("https://www.youtube.com/watch?v=", "").substr(0, 11)
                                    }
                                });
                                this.enqueue();
                              }
                            }.bind(this)
                        );
                    } else {
                        this.setState({
                            preview: {
                                title: response.title,
                                image: response.image[0].url,
                                description: response.description.substr(0, 60),
                                channel: response.site_name,
                                videoId: this.state.url.replace("https://www.youtube.com/watch?v=", "").substr(0, 11)
                            }
                        });
                    }                
                }
            }.bind(this)
        )
    }

    handleItemClick = (e) => {
        console.log(e.target);
    }

    render(){

        let queueItems = [];

        this.state.queue.forEach((vid) => {
            queueItems.push(
                <QueueItem key={vid.videoId} item={vid} handleClick={this.handleItemClick} />
            )
        })
        return (
            <div>
                <div className="column custom-vid">
                    <div className="controls">
                        <div className="textbox-container">
                            <input onChange={this.customVideoUrlUpdated} className="textbox textbox--borderless textbox--url" placeholder="串場影片之 YouTube 連結..." />
                            <button id="search-vid" disabled={!this.state.customVidUrlIsValid} onClick={this.fetchVideoDetails}>加入</button>
                        </div>
                        <div className="row picker-container">
                            <label>每段串場時間：</label>
                            <select className="" onChange={this.segueTimeLimitUpdated}>
                                <option value='-1'>不限</option>
                                <option value='10'>10分</option>
                                <option value='30'>30分</option>
                            </select>
                        </div>
                    </div>
                    <ul className="queue">
                        {queueItems}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Queue;