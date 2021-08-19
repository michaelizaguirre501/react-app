//import react and reactDOM libraries
import React from "react";
import ReactDOM from "react-dom";

if (module.hot) {
  module.hot.accept();
}
//create a react component
const App = () => {
  const buttonText = { text: "Click me!" };

  return (
    <div>
      <label className="label" htmlFor="name">
        Enter name:
      </label>
      <input id="name" type="text" />
      <button style={{ color: "white", backgroundColor: "blue" }}>
        {buttonText.text}
      </button>
    </div>
  );
};
//Take the react component and show on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
