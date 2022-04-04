import { useEffect, useRef } from "react"
import { Accordion as GovUK_Accordion } from "govuk-frontend";

const Accordion = () => {
  const ref = useRef(null)

  useEffect(() => {
    new GovUK_Accordion(ref.current).init()
  }, [])

  return (
    <div className="js-enabled">
      <div
        className="govuk-accordion"
        data-module="govuk-accordion"
        id="accordion-default"
        ref={ref}
        key="0"
      >
        <div className="govuk-accordion__section " key="1">
          <div className="govuk-accordion__section-header">
            <h2 className="govuk-accordion__section-heading">
              <span
                className="govuk-accordion__section-button"
                id="accordion-default-heading-1"
                key="1"
              >
                Alpaca trivia
              </span>
            </h2>
          </div>
          <div
            id="accordion-default-content-1"
            className="govuk-accordion__section-content"
            aria-labelledby="accordion-default-heading-1"
          >
            <p className="govuk-body" key="1">
            <small>Do you know why you shouldn't kiss an alpaca?
            <br />...... Because it will trigger the alpaca lips!
            </small>
            </p>
          </div>
        </div>
        <div className="govuk-accordion__section " key="2">
          <div className="govuk-accordion__section-header">
            <h2 className="govuk-accordion__section-heading">
              <span
                className="govuk-accordion__section-button"
                id="accordion-default-heading-2"
              >
                Llama trivia
              </span>
            </h2>
          </div>
          <div
            id="accordion-default-content-2"
            className="govuk-accordion__section-content"
            aria-labelledby="accordion-default-heading-2"
          >
            <p className="govuk-body" key="2">
            <small>Mr. El Parker owns a vegan cafe. Can you guess what is the name?
            <br />...... Deli Llama!!
            </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;