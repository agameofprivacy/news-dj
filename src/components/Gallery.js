import React, {Component} from "react"

String.prototype.trunc = String.prototype.trunc ||
    function(n){
        return (this.length > n) ? this.substr(0, n-1) + '...' : this;
    };

class Gallery extends Component {

    componentDidUpdate = (prevProp, prevState, snapshot) => {
        if (typeof(this.props.db) != 'undefined' && typeof(prevProp.db) == 'undefined') {
            console.log('db loaded', this.props.db);
          this.fetchPrograms();
        }
    }

    fetchPrograms = () => {
        console.log('gallery mounted')
        let db = this.props.db;
        var programsRef = db.collection('programs');
        programsRef.get().then((querySnapshot) => {
            let programs = [];
            querySnapshot.forEach(function(program) {
                // doc.data() is never undefined for query doc snapshots
                console.log(program.id, " => ", program.data());
                let data = program.data();
                let liveTimes = [];

                if (data.hasOwnProperty('liveTimes')){
                    data.liveTimes.forEach((time) => {
                        liveTimes.push({
                            startTime: time.startTime,
                            endTime: time.endTime,
                            title: time.title,
                            timezone: time.timezone,
                        })
                    })
                }
                
                programs.push({
                    name: data.title,
                    previewUrl: data.cover,
                    languages: [data.language],
                    hasSubtitles: data.hasSubtitles,
                    description: '',
                    liveTimes: liveTimes,
                });
            });
            this.props.setAppState({
                programs: programs
            }, () => {
                console.log('loaded programs');
            });
        });
    }


    render(){

        const dict = {
            'zh-tw': "華語",
            'min-tw': "台語",
            'sign': "手語",
            'en-us': "English",
            'th': "ภาษาไทย",
            'id': "Indonesian",
            'vi': "tiếng Việt"
        }

        const items = typeof(this.props.programs) != 'null' ? this.props.programs : [];

        var children = [];

        items.forEach((item, index) => {

            var pills = [];

            item.languages.forEach((language, langIndex) => {
                pills.push(
                    <button key={"lang" + langIndex} className="pill pill--small" value={language}>{dict[language]}</button>
                )
            })
            
            if (item.hasSubtitles) {
                pills.push(
                    <button key={index} className="pill pill--small" value={"subtitles"}>有字幕</button>
                )
            }

            children.push(
                <div key={index} className="gallery__item">
                    <img className="gallery__item__preview" alt={item.name} src={item.previewUrl} />
                    <h3 className="gallery__item__title">{item.name}</h3>
                    <div className="gallery__item__body">
                        {
                            item.liveTimes.map(time => <div key={`${time.title}-${time.startTime}`}>{`${time.title}, ${time.startTime}~${time.endTime}`}</div>)
                        }
                    </div>
                    <div className="pills">
                        {pills}
                    </div>
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