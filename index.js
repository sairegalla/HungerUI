import React, { Fragment } from "react";
import ReactDOM, { createRoot }  from "react-dom/client";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";



let App = () => {
    return (<React.Fragment> 
    <Header />
    <Body />
    <Footer />
    </ React.Fragment>) 
}


const Root = ReactDOM.createRoot(document.getElementById("Root"))
Root.render(<App/>)