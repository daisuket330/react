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

    render(){
        return (
            <div className="container-fluid">
                <TitleBar />
                <div className= "row"> 
                    <div className= "col-md-4">
                        {/*"button to move to previously viewd book"*/}
                    </div>
                    <div className= "col-md-4">
                    {/*"display book with cover"*/}
                    <h1>{this.books[this.state.bookNumber].title}</h1>
                    <h4>{this.books[this.state.bookNumber].author}</h4>
                    </div>
                    <div className= "col-md-4">
                    {/*"button to move to previously viewd book"*/}
                    </div>
                </div>
                
            </div>  
        )
    }
}

export default App;