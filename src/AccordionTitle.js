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
          <div className="flex-row" id={id}>
            <div className={active ? 'arrow-down' : 'arrow-right'} id={id}></div>
            <div className={active ? 'accordion-border font-title ' : 'font-title accordion-border'} id={id}>
              {children}
            </div>
          </div>
        ) : typeof content === "function" ? (
          title()
        ) : (
              <Fragment>
                <div className="flex-row" id={id}>
                  <div className={active ? 'arrow-down' : 'arrow-right'} id={id}></div>
                  <div className={active ? 'accordion-border font-title ' : 'font-title accordion-border'} id={id}>
                    {title}
                  </div>
                </div>
                <div className={active ? 'accordion-border meta-title ' : 'meta-title accordion-border'} id={id}>{subtitle}</div>
              </Fragment>
            )}
      </div>
    );
  }
}

AccordionTitle.defaultProps = {
  active: false,
  onChange: () => { },
}

export default AccordionTitle;
