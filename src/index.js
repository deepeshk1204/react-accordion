import React, { Component } from "react";
import ReactDOM from "react-dom";
import Accordion from "./Accordion";
import AccordionPanel from "./AccordionPanel";
import AccordionTitle from "./AccordionTitle";
import "./styles.css";

class App extends Component {
  state = {
    selectedItem: 1,
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
    { title: "one", subtitle: 'This is meta data', content: () => <div>HTML content</div> },
    { title: "two", content: "Hello" }
  ];

  subPanel = [
    { title: "inside 1", content: () => <div>Child 1</div> },
    { title: "inside 2", content: () => <div>Child 2</div> }
  ];

  render() {
    const { selectedItem } = this.state;
    this.panel[1].childContent = () => (
      <Accordion exclusive={false} panel={this.subPanel} />
    );
    return (
      <div className='example'>
        <h1>Accordion 1</h1>
        <Accordion>
          <Accordion.Title id={1} active={selectedItem === 1} onChange={() => this.setState({ selectedItem: 1 })} >
            One
          </Accordion.Title>
          <Accordion.Content id={1} active={selectedItem === 1}>
            <div>HTML content 1</div>
          </Accordion.Content>
          <Accordion.Title id={2} active={selectedItem === 2} onChange={() => this.setState({ selectedItem: 2 })} >
            Two
          </Accordion.Title>
          <Accordion.Content id={2} active={selectedItem === 2}>
            <div>HTML content 2</div>
          </Accordion.Content>
        </Accordion>
        <h1>Accordion 2</h1>
        <Accordion exclusive={true} panel={this.panel} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
