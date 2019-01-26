import React, { Component } from 'react';

class Sum extends Component {
    constructor(){
        super();

        this.state = {
            number1: 0,
            number2: 0,
            sum: null
        }
    }

    updater1(val){
        this.setState({ number1: parseInt(val, 10) })
    }

    updater2(val){
        this.setState({ number2: parseInt(val, 10) })
    }

    addFunction(num1 , num2){
        var total = num1 + num2;
        this.setState({sum: total});
    }

    render(){
        return(
            <div className={'puzzleBox sumPB'}>
                <h4>Sum</h4>

                <input className={'inputLine'} onChange={(e) => this.updater1(e.target.value)}></input>

                <input className={'inputLine'} onChange={(e) => this.updater2(e.target.value)}></input>

                <button className={'confirmationButton'} onClick={() => this.addFunction(this.state.number1 , this.state.number2)}>Crash those numbers headfirst!</button>

                <span className={'resultsBox'}>Sum: {this.state.sum}</span>
            </div>
        );
    }
 }

 export default Sum;