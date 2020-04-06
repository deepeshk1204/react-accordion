import React, { Component, Fragment } from "react";
import CustomElement from "./CustomElement";
class AccordionContent extends Component {
  render() {
    const { content, childContent, active, children } = this.props;
    return (
      <Fragment>
        {active && (
          <div className='accordion-content'>
            {typeof content === "function" ? (
              // <CustomElement val={content()} />
              content()
            ) : (
                <span>{content}</span>
              )}
            {childContent && childContent()}
            {children && children}
          </div>
        )}
      </Fragment>
    );
  }
}


export default AccordionContent;
