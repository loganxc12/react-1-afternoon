import React, { Component } from "react";

class Sum extends Component {

    constructor() {
        super();
        this.state = {
            number1: 0,
            number2: 0,
            sum: null
        }
        this.updateNumber = this.updateNumber.bind(this);
        this.sumNumbers = this.sumNumbers.bind(this);
    }

    updateNumber(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    sumNumbers(num1, num2) {
        this.setState({
            sum: Number(num1) + Number(num2)

        })
    }

    render() {
        console.log(this.state);
        return (
            <div className="puzzleBox sumPB">
                <h4>Sum</h4>
                <input name="number1" className="inputLine" onChange={this.updateNumber}></input>
                <input name="number2" className="inputLine" onChange={this.updateNumber}></input>
                <button className="confirmationButton" onClick={()=>this.sumNumbers(this.state.number1, this.state.number2)}>Add</button>
                <span className="resultsBox">Sum: {this.state.sum}</span>
            </div>
        );
    }

}

export default Sum;