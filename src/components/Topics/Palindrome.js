import React, { Component } from 'react';

class Palindrome extends Component {
    constructor(){
        super();

        this.state = {
            userInput: "",
            palindrome: ''
        }
    }

    handleChange(val){
        this.setState({userInput: val})
    }

    isItBackward(userInput){
        var forward = userInput;
        var backward = userInput;

        backward = backward.split('');
        backward = backward.reverse();
        backward = backward.join('');

        if(backward === forward){
            this.setState({ palindrome: 'True!' })
        }
        else{
            this.setState({ palindrome: 'False!' })
        }
    }

    render(){
        return(
            <div className = 'puzzleBox filterStringPB'>
                <h4>Palindrome</h4>

                <input className = 'inputLine' onChange={(e) => this.handleChange(e.target.value)}></input>

                <button className = 'confirmationButton' onClick={() => this.isItBackward(this.state.userInput)}>Check it!</button>

                <span className = 'resultsBox'>Palindrome: {this.state.palindrome}</span>
            </div>
        );
    }
 }

 export default Palindrome;