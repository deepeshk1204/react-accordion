import React, { Component } from "react";
import PropTypes from "prop-types";
import AccordionPanel from "./AccordionPanel";
import AccordionContent from "./AccordionContent";
import AccordionTitle from "./AccordionTitle";

// import AccordionSection from "./AccordionSection";

class Accordion extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Object).isRequired
  };

  state = {
    activeIndex: 0
  };

  componentWillMount() {
    const { exclusive } = this.props;
    if (exclusive) this.setState({ activeIndex: [] });
  }

  changeActiveIndex = index => {
    const { exclusive } = this.props;
    const { activeIndex } = this.state;
    if (exclusive) {
      if (activeIndex.indexOf(parseInt(index, 10)) < 0) {
        activeIndex.push(parseInt(index, 10));
        this.setState({ activeIndex: activeIndex });
      } else {
        const newList = activeIndex.filter(
          item => item !== parseInt(index, 10)
        );
        console.log("newList", newList);
        this.setState({
          activeIndex: newList
        });
      }
    } else {
      this.setState({ activeIndex: index });
    }
  };

  checkActive = id => {
    const { exclusive } = this.props;
    const { activeIndex } = this.state;
    if (exclusive) {
      return activeIndex.indexOf(id) > -1;
    }
    return id === parseInt(activeIndex, 10);
  };

  render() {
    const {
      props: { children, panel, exclusive }
    } = this;
    const { activeIndex } = this.state;
    return (
      <div>
        {panel
          ? panel.map((o, i) => {
            return (
              <AccordionPanel
                id={i}
                active={this.checkActive(i)}
                title={o.title}
                subtitle={o.subtitle}
                content={o.content}
                exclusive={exclusive}
                childContent={o.childContent}
                onChange={this.changeActiveIndex}
              />
            );
          })
          : children}
      </div>
    );
  }
}

Accordion.Content = AccordionContent;
Accordion.Panel = AccordionPanel;
Accordion.Title = AccordionTitle;

export default Accordion;
