import React from "react";
import ReactDOM, { createRoot }  from "react-dom/client";



let App = () => {
    return(<div>this is food ordering app</div> )
}


const Root = ReactDOM.createRoot(document.getElementById("Root"))
Root.render(<App/>)