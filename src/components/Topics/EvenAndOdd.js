import React from "react"; //import React object from node_modules/react

class EvenAndOdd extends React.Component { //Create subclass called EvenAndOdd that extends the the base class React.Component
    constructor() { //Initialize object's properties
        super(); //Call parent class' constructor = "First set up class we're extending, then we'll set up this subclass."
        this.state = { //Heart of React component. Object that determines how our component renders and behaves. Where we store 
                      //data that we expect to change.
            evenArray: [],
            oddArray: [],
            userInput: ""
        }
        this.updateUserInput = this.updateUserInput.bind(this);
        this.solveEvenAndOdd = this.solveEvenAndOdd.bind(this);
    }

    updateUserInput(e) {
        this.setState({
            userInput: e.target.value
        })
    }

    solveEvenAndOdd(str) {
        const stringArray = str.split(",");
        const evens = [];
        const odds = [];
        stringArray.forEach(el => {
            if (el) {
                if (el % 2 === 0) {
                    evens.push(Number(el));
                } else {
                    odds.push(Number(el));
                }
            }
        });
        this.setState({
            evenArray: evens,
            oddArray: odds,
            userInput: ""
        })
    }

    render() {
        /* Why do I need an anonymous arrow function inside button event handler?  */
        /* Why do I need to use JSON.stringify to get the array fo show up? */
        return (
            <div className="puzzleBox evenAndOddPB">
                <h4>Evens And Odds</h4>
                <input className="inputLine" value={this.state.userInput} onChange={this.updateUserInput}></input>
                <button className="confirmationButton" onClick={() => this.solveEvenAndOdd(this.state.userInput)}>Split</button> 
                <span className="resultsBox">Evens: {JSON.stringify(this.state.evenArray)}</span>
                <span className="resultsBox">Odds: {JSON.stringify(this.state.oddArray)}</span>
            </div>
        );
    }

}

export default EvenAndOdd;

