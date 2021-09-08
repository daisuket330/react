import React, { Component } from "react";
import './App.css'
import TitleBar from "./TitleBar/TitleBar";

class App extends Component {
    constructor(props) {
        super(props);
        this.books =[
            {title: "Scott Pilgram", author: "Brian O'malley"},
            {title: "A Land Remembered", author: "Patrick D. Smith"},
            {title: "FullMetal Alchemist", author: "Hiromu Arakawa"}
        ];
        this.state = {
            bookNumber: 0
        };
    }

goToNextBook = () => {
    let tempBookNumber = this.state.bookNumber;
    tempBookNumber++
    if(tempBookNumber== this.books.length){
        tempBookNumber = 0;
    }
    this.setState({
        bookNumber: tempBookNumber
    })

    
}

goToPreviousBook = () => {
    let tempBookNumber = this.state.bookNumber;
    tempBookNumber--;
    if (tempBookNumber < 0){
        tempBookNumber = this.books.length - 1;
    }
    this.setState({
        bookNumber: tempBookNumber
    });

}

    render(){
        return (
            <div className="container-fluid">
                <TitleBar />
                <div className= "row"> 
                    <div className= "col-md-4">
                        {/*"button to move to previously viewd book"*/}
                        <button onClick={this.goToPreviousBook}>Previous</button>
                    </div>
                    <div className= "col-md-4">
                    {/*"display book with cover"*/}
                    <h1>{this.books[this.state.bookNumber].title}</h1>
                    <h4>{this.books[this.state.bookNumber].author}</h4>
                    </div>
                    <div className= "col-md-4">
                    {/*"button to move to nextbook"*/}
                    <button onClick={this.goToNextBook}>Next</button>
                    </div>
                </div>
                
            </div>  
        )
    }
}

export default App;