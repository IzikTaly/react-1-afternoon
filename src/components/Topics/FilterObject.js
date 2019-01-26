import React, { Component } from 'react';

class FilterObject extends Component {
    constructor(){
        super();

        this.state = {
            dogs: [
                {
                    name: 'Dougie',
                    hair: 'long',
                    legs: 'big',
                    ears: 'cool'
                },
                {
                    name: 'Runbut',
                    smell: 'Bad',
                    biteRating: 90,
                    canFlip: true
                },
                {
                    name: 'Gronsly',
                    hair: 'short',
                    legs: 'short',
                    head: 'fat'
                }

            ],

            userInput: [],
            filteredDogs: []

        }
    }

    handleChange(val){
            this.setState({ userInput: val })
        }

    filterDogs(prop){
            var dogs = this.state.dogs;
            var filterPup = [];

            for(var i = 0 ; i < dogs.length ; i++){
                if(dogs[i].hasOwnProperty(prop)){
                    filterPup.push(dogs[i]);
                }
            }

            this.setState({filteredDogs: filterPup})
        }


    render(){
        return(
            <div className = "puzzleBox filterObjectPB">
                <h4>Filter Object</h4>

                <span className = 'puzzleText'>Original: {JSON.stringify(this.state.dogs, null, 10)}</span>

                <input className = 'inputLine' onChange={(e) => this.handleChange(e.target.value)}></input>

                <button className = 'confirmationButton' onClick={() => this.filterDogs(this.state.userInput)}>Filter!</button>

                <span className = 'resultsBox filterObjectRB'>Filtered: {JSON.stringify(this.state.filteredDogs, null, 10)}</span>
            </div>
        );
    }
 }

 export default FilterObject;