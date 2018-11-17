import React from "react";

class FilterObject extends React.Component {

    constructor() {
        super();
        this.state = {
            unFilteredArray: [{name: "Logan", age: 25, cool: true}, {name: "Jackson", age: 23, drool: true}],
            userInput: "",
            filteredArray: []
        }
        this.updateUserInput = this.updateUserInput.bind(this);
        this.filterArrayOfObjects = this.filterArrayOfObjects.bind(this);
    }

    updateUserInput(e) {
        this.setState({
            userInput: e.target.value
        })
    }

    filterArrayOfObjects(prop) {
        const arr = this.state.unFilteredArray.slice() 
        const filteredArr = arr.filter(e => e.hasOwnProperty(prop));
        this.setState({
            filteredArray: filteredArr,
            userInput: ""
        })
    }

    render() {
        return (
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText">{JSON.stringify(this.state.unFilteredArray)}</span>
                <input className="inputLine" value={this.state.userInput} onChange={this.updateUserInput}></input>
                <button className="confirmationButton" onClick={() => this.filterArrayOfObjects(this.state.userInput)}>Filter</button>
                <span className="resultsBox filterObjectRB">Filtered: {JSON.stringify(this.state.filteredArray)}</span>
            </div>
        );
    }

}

export default FilterObject;