import React, { Component } from "react";

class FilterString extends Component {

    constructor() {
        super();
        this.state = {
            unFilteredArray: ["bacon", "avocado", "cheese", "chocolate",  "toast", "avocado toast", "cheese is delicious", "oh, and cheese"],
            userInput: "",
            filteredArray: []
        }
        this.updateUserInput = this.updateUserInput.bind(this);
    }

    updateUserInput(e) {
        this.setState({
            userInput: e.target.value
        })
    }

    filterArrayOfStrings(str) {
        const stringsArray = this.state.unFilteredArray.slice();
        const filteredStringsArray = stringsArray.filter(e => e.includes(str));
        this.setState({
            filteredArray: filteredStringsArray,
            userInput: ""
        })
    }

    render() {
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className="puzzleText">{JSON.stringify(this.state.unFilteredArray)}</span>
                <input className="inputLine" value={this.state.userInput} onChange={this.updateUserInput}></input>
                <button className="confirmationButton" onClick={()=>this.filterArrayOfStrings(this.state.userInput)}>Filter</button>
                <span className="resultsBox filterStringRB">{JSON.stringify(this.state.filteredArray)}</span>
            </div>
        );
    }

}

export default FilterString;