import React, { Component } from "react";
import PropTypes from "prop-types";
import AccordionContent from "./AccordionContent";
import AccordionTitle from "./AccordionTitle";
import "./styles.css";

class AccordionPanel extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Object).isRequired
  };

  render() {
    const {
      id,
      active,
      exclusive,
      title,
      subtitle,
      content,
      children,
      onChange,
      childContent,
    } = this.props;
    const showContent = exclusive ? (active ? true : exclusive) : active;
    // console.log("showContent", showContent);
    return (

      <div className='accordion-panel'>
        <AccordionTitle id={id} title={title} subtitle={subtitle} active={active} onChange={onChange} />
        {/* <div>{children}</div> */}
        {<AccordionContent active={active} content={content || children} childContent={childContent} />}
      </div>
    );
  }
}

export default AccordionPanel;
