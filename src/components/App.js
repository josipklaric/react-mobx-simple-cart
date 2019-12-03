import React from "react";
import Cart from "./Cart";
import { inject, observer } from "mobx-react";
import Header from "./Header";
import MainBar from "./MainBar";
import MainContent from "./MainContent";
import Footer from "./Footer";

class App extends React.Component {

    render() {
        return (
            <React.Fragment>
                <Header/>
                <MainContent/>
                <Footer/>
            </React.Fragment>
        );
    }
}

export default App;