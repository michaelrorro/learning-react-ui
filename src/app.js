import React from "react";
import { render } from "react-dom";
import { Pet } from "./Pet";

class App extends React.Component {
  handleTitleClick() {
    alert("You clicked this title...");
  }
  render() {
    return (
      <div>
        <h1 onClick={this.handleTitleClick}>Adopt Me!</h1>
        <Pet name="Luna" animal="dog" breed="Havanese" />
        <Pet name="Doink" animal="cat" breed="Mixed" />
        <Pet name="Fishy" animal="Fish" breed="Angel Fish" />
      </div>
    );
  }
}

render(React.createElement(App, {}, null), document.getElementById("root"));
