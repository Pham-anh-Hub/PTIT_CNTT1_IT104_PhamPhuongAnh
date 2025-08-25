import React, { Component } from "react";

// import SubjectList from "./components/SubjectList";
// import LoginStatus from "./components/LoginStatus";
// import ClickCounter from "./components/ClickCounter";
// import ButtonComponents from "./components/ButtonComponents/ButtonComponents";
// import UserForm from "./components/UserForm";
// import ChangeTheme from "./components/ChangeTheme";
import MainPage from "./components/ShoppingCart/MainPage";

export default class App extends Component {
  render() {
    return (
      <div>
        {/* <SubjectList />
        <hr />
        <LoginStatus></LoginStatus>
        <hr />
        <ButtonComponents />
        <hr />
        <ClickCounter />
        <hr />
        <UserForm />
        <hr />
        <ChangeTheme /> */}
        <MainPage />
      </div>
    );
  }
}
