import React from 'react';

const BookViewer  = (props) => {
    return ( 
        <div className= "row row-spacer"> 
        <div className= "col-md-4">
            {/*"button to move to previously viewd book"*/}
            <button onClick={props.previousBook}>Previous</button>
        </div>
        <div className= "col-md-4">
        {/*"display book with cover"*/}
        <h1>{props.book.title}</h1>
        <h4>{props.book.author}</h4>
        </div>
        <div className= "col-md-4">
        {/*"button to move to nextbook"*/}
        <button onClick={props.nextBook}>Next</button>
        </div>
    </div>
     );
}
 
export default BookViewer;
