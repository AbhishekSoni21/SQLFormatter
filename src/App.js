import React, { Component } from "react";
import sqlFormatter from "sql-formatter";
import "./App.css";

class App extends Component {
  handleFormat = () => {
    let language = document.getElementById("language");
    let input = document.getElementById("input");
    let output = document.getElementById("output");
    input.addEventListener("input", format);
    language.addEventListener("change", format);
    function format() {
      console.time("formatting");
      output.value = sqlFormatter.format(input.value, {
        language: language.options[language.selectedIndex].value
      });
      console.timeEnd("formatting");
    }
    format();
  };
  render() {
    return (
      <div className="App">
        <h1>Sql Formatter</h1>
        <div class="select-wrapper">
          Format
          <select id="language">
            <option value="sql">SQL</option>
            <option value="n1ql">N1QL</option>
            <option value="db2">DB2</option>
          </select>
        </div>
        <main>
          <section class="input">
            <textarea
              id="input"
              autofocus="true"
              wrap="off"
              onKeyDown={() => this.handleFormat()}
            >
              SELECT * FROM DUAL;
            </textarea>
          </section>
          <section class="output">
            <textarea id="output" readonly="true" wrap="off">
              SELECT * FROM DUAL
            </textarea>
          </section>
        </main>
      </div>
    );
  }
}

export default App;
