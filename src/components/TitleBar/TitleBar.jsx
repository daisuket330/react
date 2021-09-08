import React from "react";
import "./TitleBar.css";
function TitleBar(props){
    return(
        <div classname= "row row-space">
            <div classname= "col-md-12" style={{padding:0}}>
                <div className= "titlebar-nav">
                    <h1>Tkerel Library</h1>
                </div>
                
            </div>
        </div>
    )
}

export default TitleBar;