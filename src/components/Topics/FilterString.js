import React, { Component } from 'react';

class FilterString extends Component {

    constructor(){
        super();

        this.state = {
            friends: ["Mckay","Donovan","Aaron","Abe","Binny","Austin","Alvaro","Sabrina"],
            userInput: "",
            filteredFriends: []
        }
    }

    handleChange(val){
        this.setState({ userInput: val })
    }

    filterFriends(userInput){
        var arr = this.state.friends;
        var filterPals = [];

        for(var i = 0 ; i < arr.length ; i++){
            if(arr[i].includes(userInput)){
                filterPals.push(arr[i]);
            }
        }

        this.setState({ filteredFriends: filterPals});
    }

    render(){
        return(
            <div className = 'puzzleBox filterStringPB'>
                <h4>Filter String</h4>

                <span className = 'puzzleText'>Names: {JSON.stringify(this.state.friends, null, 10)}</span>

                <input className = 'inputLine' onChange={(e) => this.handleChange(e.target.value)}></input>

                <button className = 'confirmationButton' onClick={() => this.filterFriends(this.state.userInput)}>Filter those friends!</button>

                <span className = 'resultsBox filterStringRB'> Filtered: {JSON.stringify(this.state.filteredFriends, null, 10)}</span>
            </div>
        );
    }
 }

 export default FilterString;