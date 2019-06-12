import React, {Component} from "react";

class Filters extends Component {

    toggleFilterOption = e => {
        console.log("toggle filter", e.target.value);
        if (e.target.value !== "subtitles"){
            var temp = this.props.languages;
            var index = temp.indexOf(e.target.value);
            if (index !== -1) {
                temp.splice(index, 1);
            } else {
                temp.push(e.target.value);
            };
            this.props.setAppState({languages: temp});    
        } else {
            this.props.setAppState({subtitlesOnly: !this.props.subtitlesOnly});
        }
    }

    render(){

        const { filters, languages, subtitlesOnly, setAppState } = this.props;
        const dictionary = {
            "languages": "語言",
            "other": "特殊選項"
        }

        var categories = [];

        

        filters.forEach((filter, filterIndex) => {
            var pills = []
            filter[Object.keys(filter)[0]].forEach((filterOption, index) => {
                var selected = false;
                if (filterIndex === 0 && subtitlesOnly) {
                    selected = true;
                } else if (filterIndex === 1 && languages.includes(filterOption.value)) {
                    selected = true;    
                }
                pills.push(
                    <button key={index} className={"button pill" + (selected ? " pill--selected" : "")} value={filterOption.value} onClick={this.toggleFilterOption}>
                        {filterOption.key}
                    </button>
                )
            })
            categories.push(
                <div key={filterIndex} className="filter">
                    <h3 className="filter__category">{dictionary[Object.keys(filter)[0]]}</h3>
                    <div className="pills pills--bordered">
                        {pills}
                    </div>
                </div>
            )
        })

        return (
            <div className="filters">
                {categories}
            </div>
        )
    }
}

export default Filters;