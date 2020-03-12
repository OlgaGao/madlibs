import React, { Component } from "react";

import "./styles.css";

var pages = {
  start: {
    content: (getData, setData) => (
      <p>
        What is your name?
        <br />
        <br />
        <input
          type="text"
          value={getData("name")}
          onChange={event => setData("name", event.target.value)}
        />
        <br />
        <br />
        What is your birthday?
        <br />
        <br />
        <input
          type="date"
          value={getData("birthday")}
          onChange={event => setData("birthday", event.target.value)}
        />
        <br />
        <br />
        What is your favourite three numbers?
        <br />
        <br />
        <input
          type="text"
          value={getData("number")}
          onChange={event => setData("number", event.target.value)}
        />
        <br />
        <br />
        What is your favourite food?
        <br />
        <br />
        <input
          type="text"
          value={getData("food")}
          onChange={event => setData("food", event.target.value)}
        />
      </p>
    ),
    buttons: [{ label: "Continue", page: "second" }]
  },
  second: {
    content: (getData, setData) => (
      <p>
        name an adjective
        <br />
        <br />
        <input
          type="text"
          value={getData("adjective")}
          onChange={event => setData("adjective", event.target.value)}
        />
        <br />
        <br />
        Type another adjective?
        <br />
        <br />
        <input
          type="text"
          value={getData("aj2")}
          onChange={event => setData("aj2", event.target.value)}
        />
        <br />
        <br />
        name a type of bird?
        <br />
        <br />
        <input
          type="text"
          value={getData("bird")}
          onChange={event => setData("bird", event.target.value)}
        />
        <br />
        <br />
        Room in a house?
        <br />
        <br />
        <input
          type="text"
          value={getData("room")}
          onChange={event => setData("room", event.target.value)}
        />
      </p>
    ),
    buttons: [{ label: "Continue", page: "third" }]
  },
  third: {
    content: (getData, setData) => (
      <p>
        <h1>
          <strong>You think it's over? Come on!</strong>
        </h1>
        <br />
        <br />
        Give a Verb,but in past tense
        <br />
        <br />
        <input
          type="text"
          value={getData("verbp")}
          onChange={event => setData("verbp", event.target.value)}
        />
        <br />
        <br />
        Not past tense Verb please
        <br />
        <br />
        <input
          type="text"
          value={getData("verb")}
          onChange={event => setData("verb", event.target.value)}
        />
        <br />
        <br />
        What is your relative's name?
        <br />
        <br />
        <input
          type="text"
          value={getData("rela")}
          onChange={event => setData("rela", event.target.value)}
        />
        <br />
        <br />
        Give a noun?
        <br />
        <br />
        <input
          type="text"
          value={getData("noun")}
          onChange={event => setData("noun", event.target.value)}
        />
        <br />
        <br />
        What is your favourite liquid?
        <br />
        <br />
        <input
          type="text"
          value={getData("liquid")}
          onChange={event => setData("liquid", event.target.value)}
        />
        <br />
        <br />
        Challenge here, A verb ending in-ing?
        <br />
        <br />
        <input
          type="text"
          value={getData("verbing")}
          onChange={event => setData("verbing", event.target.value)}
        />
        <br />
        <br />
        What is your favourite part of your body?
        <br />
        <br />
        <input
          type="text"
          value={getData("body")}
          onChange={event => setData("body", event.target.value)}
        />
        <br />
        <br />
        Name a plurar noun?
        <br />
        <br />
        <input
          type="text"
          value={getData("pnoun")}
          onChange={event => setData("pnoun", event.target.value)}
        />
        <br />
        <br />
        Last noun I promise!
        <br />
        <br />
        <input
          type="text"
          value={getData("noun")}
          onChange={event => setData("noun", event.target.value)}
        />
      </p>
    ),
    buttons: [{ label: "Continue", page: "welcome" }]
  },
  welcome: {
    content: (getData, setData) => (
      <p>
        Welcome, <strong>{getData("name")}</strong>,{" "}
        <strong>{getData("birthday")}</strong>! How would you like to get to
        your destination?
      </p>
    ),
    buttons: [
      { label: "Train", page: "onthetrain" },
      { label: "Ship", page: "ontheship" }
    ]
  },

  onthetrain: {
    content: (getData, setName) => (
      <p>
        Welcome aboard the <strong>{getData("number")}</strong> train! Please
        make your way to your seat. We are going to tell a story!
      </p>
    ),
    buttons: [
      { label: "Let's do it", page: "story" },
      { label: "Cool!", page: "story" }
    ]
  },
  ontheship: {
    content: (getData, setName) => (
      <p>
        Welcome to the <strong>{getData("number")}</strong> Ship! Please find
        your seat. Are you ready? We will take off to the funny story kingdom
        very soon!
      </p>
    ),
    buttons: [
      { label: "Yes", page: "food" },
      { label: "No,story please!", page: "story" }
    ]
  },
  food: {
    content: (getData, setName) => (
      <p>
        Get some <strong>{getData("food")}</strong> ! It's all yours!
      </p>
    ),
    buttons: [
      { label: "Thanks", page: "story" },
      { label: "i'm fine", page: "story" }
    ]
  },
  story: {
    content: (getData, setName) => (
      <p>
        It was a <strong>{getData("adjective")} </strong>,cold November day.I
        woke up to the <strong>{getData("aj2")} </strong> smell of{" "}
        <strong>{getData("bird")} </strong> roasting in the{" "}
        <strong>{getData("room")} </strong> downstairs.I{" "}
        <strong>{getData("verbp")} </strong> down the stairs to see if I could
        help <strong>{getData("verb")} </strong> the dinner. My Mom said,"see if{" "}
        <strong>{getData("rela")} </strong> needs a fresh{" "}
        <strong>{getData("noun")} </strong>." So I carried a tray of glasses
        full of <strong>{getData("liquid")} </strong> into the{" "}
        <strong>{getData("verbing")} </strong> room.When I got there,I couldn't
        believe my <strong>{getData("body")} </strong>! There were{" "}
        <strong>{getData("pnoun")} </strong>{" "}
        <strong>{getData("verbing")} </strong> on the{" "}
        <strong>{getData("noun")} </strong>.
      </p>
    ),
    buttons: [
      { label: "Boring!!!", page: "welcome" },
      { label: "hahahaha", page: "welcome" }
    ]
  }
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: "start",
      name: ""
    };
  }

  goToPage(pageName) {
    this.setState({
      page: pageName
    });
  }

  setData(dataName, dataValue) {
    var newState = {};
    newState[dataName] = dataValue;
    this.setState(newState);
  }

  render() {
    var pageData = pages[this.state.page];

    return (
      <div className="App">
        {pageData.content(
          dataName => this.state[dataName] || "",
          (name, value) => this.setData(name, value)
        )}

        {pageData.buttons.map(buttonInfo => (
          <button onClick={() => this.goToPage(buttonInfo.page)}>
            {buttonInfo.label}
          </button>
        ))}
      </div>
    );
  }
}

export default App;
