import React, { Component } from "react";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import Book from "./Components/Books/Books";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Login from "./Components/UserAuth/Login";
import Registration from "./Components/UserAuth/Registration";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <Banner></Banner>
        <Book></Book>
        <Login></Login>
        <Registration></Registration>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
