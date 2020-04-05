import React, { Component, Fragment } from "react";
import './styles.css';

class AccordionTitle extends Component {
  render() {
    const { title, subtitle, id, active, onChange, children } = this.props;
    return (
      <div
        className='accordion-title'
        onClick={e => {
          e.persist();
          e.preventDefault();
          if (e.target.id !== "") onChange(e.target.id);
        }}
      >
        {children ? (
          children
        ) : typeof content === "function" ? (
          title()
        ) : (
              <Fragment>
                <div className="flex-row" id={id}>
                  <div className={active ? 'arrow-right' : 'arrow-down'} id={id}></div>
                  <div className={active ? 'accordion-border font-title padding-1-3' : 'font-title accordion-border'} id={id}>
                    {title}
                  </div>
                </div>
                <div className={active ? 'accordion-border meta-title padding-1-3' : 'meta-title accordion-border'} id={id}>{subtitle}</div>
              </Fragment>
            )}
      </div>
    );
  }
}

export default AccordionTitle;
