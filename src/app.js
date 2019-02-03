/* global React ReactDOM */

class App extends React.Component {
  handleTitleClick() {
    alert("You clicked this title...");
  }
  render() {
    return React.createElement("div", {}, [
      React.createElement(
        "h1",
        { onClick: this.handleTitleClick },
        "Adopt Me!"
      ),
      React.createElement(Pet, {
        name: "Luna",
        animal: "dog",
        breed: "Havanese"
      }),
      React.createElement(Pet, {
        name: "Doink",
        animal: "cat",
        breed: "?"
      }),
      React.createElement(Pet, {
        name: "Fishy",
        animal: "Fish",
        breed: "Fish"
      })
    ]);
  }
}

ReactDOM.render(
  React.createElement(App, {}, null),
  document.getElementById("root")
);
