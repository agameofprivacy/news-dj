import React, {Component} from "react";

class Filters extends Component {

    render(){

        const { filters } = this.props;
        const dictionary = {
            "languages": "語言",
            "other": "特殊選項"
        }

        var categories = [];

        filters.forEach((filter, index) => {
            var pills = []
            filter[Object.keys(filter)[0]].forEach((filterOption, index) => {
                pills.push(
                    <button key={index} className="button pill" value={filterOption.value}>
                        {filterOption.key}
                    </button>
                )
            })
            categories.push(
                <div key={index} className="filter">
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