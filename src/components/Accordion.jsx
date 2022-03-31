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
        class="govuk-accordion"
        data-module="govuk-accordion"
        id="accordion-default"
        ref={ref}
      >
        <div class="govuk-accordion__section ">
          <div class="govuk-accordion__section-header">
            <h2 class="govuk-accordion__section-heading">
              <span
                class="govuk-accordion__section-button"
                id="accordion-default-heading-1"
              >
                Alpaca trivia
              </span>
            </h2>
          </div>
          <div
            id="accordion-default-content-1"
            class="govuk-accordion__section-content"
            aria-labelledby="accordion-default-heading-1"
          >
            <p class="govuk-body">
            <small>Do you know why you shouldn't kiss an alpaca?
            <br />...... Because it will trigger the alpaca lips!
            </small>
            </p>
          </div>
        </div>
        <div class="govuk-accordion__section ">
          <div class="govuk-accordion__section-header">
            <h2 class="govuk-accordion__section-heading">
              <span
                class="govuk-accordion__section-button"
                id="accordion-default-heading-2"
              >
                Llama trivia
              </span>
            </h2>
          </div>
          <div
            id="accordion-default-content-2"
            class="govuk-accordion__section-content"
            aria-labelledby="accordion-default-heading-2"
          >
            <p class="govuk-body">
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