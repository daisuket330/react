import React, { Component } from "react";
import './App.css'
import TitleBar from "./TitleBar/TitleBar";
import BookViewer from "./bookviewer/Bookviewer";
import BookCreator from "./BookCreator/BookCreator";
import Footer from "./Footer/Footer";

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
createBook = (newBook) => {
this.books.push(newBook);
this.setState({
    bookNumber: this.books.length - 1
})
}

    render(){
        return (
            <div className="container-fluid">
                <TitleBar />
                <BookViewer book={this.books[this.state.bookNumber]} nextBook={this.goToNextBook} previousBook={this.goToPreviousBook} />
                <BookCreator createNewBook={this.createBook} />
                <Footer />
            </div>  
        )
    }
}

export default App;