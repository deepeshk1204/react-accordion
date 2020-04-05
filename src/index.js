import React, { Component } from "react";
import ReactDOM from "react-dom";
import Accordion from "./Accordion";
import AccordionPanel from "./AccordionPanel";
import AccordionTitle from "./AccordionTitle";
import "./styles.css";

class App extends Component {
  state = {
    name: "Deepesh"
  };

  // <Accordion>
  //   <AccordionPanel label='' id=''>
  //     <AccordionTitle />
  //     <AccorianSubContent />
  //     <AccordionContent />
  //   </AccordionPanel>
  // </Accordion>

  onChange = index => {
    console.log("index", index);
  };

  panel = [
    { title: "one", content: () => <div>HTML content</div> },
    { title: "two", content: "Hello" }
  ];

  subPanel = [
    { title: "inside 1", content: () => <div>Child 1</div> },
    { title: "inside 2", content: () => <div>Child 2</div> }
  ];

  render() {
    this.panel[1].childContent = () => (
      <Accordion exclusive={false} panel={this.subPanel} />
    );
    return (
      <div className='example'>
        <h1>Accordion Demo</h1>
        <Accordion>
          <Accordion.Title id={1}>
            <h3>One</h3>
          </Accordion.Title>
          <Accordion.Content>
            <div>HTML content</div>
          </Accordion.Content>
        </Accordion>
        <Accordion exclusive={true} panel={this.panel} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
