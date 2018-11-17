import React, { Component } from "react";

class Palindrome extends Component {

    constructor() {
        super();
        this.state = {
            userInput: "",
            palindrome: ""
        }
        this.updateUserInput = this.updateUserInput.bind(this);
        this.solvePalindrome = this.solvePalindrome.bind(this);
    }

    updateUserInput(e) {
        this.setState({
            userInput: e.target.value
        })
    }

    solvePalindrome(str) {
        if (str) {
            var reversedStr = "";
            for (var i = str.length - 1; i >=0; i--) {
                reversedStr += str.charAt(i);
            }
            var isPalindrome = (reversedStr === str);
            this.setState({
                palindrome: isPalindrome,
                userInput: ""
            })
        } else {
            this.setState({
                palindrome: "",
                userInput: ""
            })
        }
    }

    render() {
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Palindrome</h4>
                <input className="inputLine" value={this.state.userInput} onChange={this.updateUserInput}></input>
                <button className="confirmationButton" onClick={()=>this.solvePalindrome(this.state.userInput)}>Check</button>
                <span className="resultsBox">Palindrome: {JSON.stringify(this.state.palindrome)}</span>
            </div>
        );
    }

}

export default Palindrome;