import React, { Component } from "react";
import CustomElement from "./CustomElement";
class AccordionContent extends Component {
  render() {
    const { content, childContent } = this.props;
    return (
      <div className='accordion-content'>
        {typeof content === "function" ? (
          // <CustomElement val={content()} />
          content()
        ) : (
            <span>{content}</span>
          )}
        {childContent && childContent()}
      </div>
    );
  }
}

export default AccordionContent;
