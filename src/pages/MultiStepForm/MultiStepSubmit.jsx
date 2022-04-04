import React from 'react';
import * as GovUK from 'govuk-react';

const toCapital = (str) => str.charAt(0).toUpperCase() + str.slice(1)

const MultiStepSubmit = ({data}) => {

  const listItems = Object.entries(data).map(([key, value]) => (
    <div className="govuk-summary-list__row">
      <dt class="govuk-summary-list__key">{toCapital(key)}:</dt>
      <dd class="govuk-summary-list__value">{value}</dd>
      <dd class="govuk-summary-list__actions">Change<span class="govuk-visually-hidden"> name</span></dd>
    </div>
  ))


  return (
    <div>
      <dl className="govuk-summary-list">
        {listItems}
      </dl>
      <GovUK.Button type="submit">Submit</GovUK.Button>
    </div>
  );
};

export default MultiStepSubmit;



{/* <dl class="govuk-summary-list">
  <div class="govuk-summary-list__row">
    <dt class="govuk-summary-list__key">
      Name
    </dt>
    <dd class="govuk-summary-list__value">
      Sarah Philips
    </dd>
    <dd class="govuk-summary-list__actions">
      <a class="govuk-link" href="#">
        Change<span class="govuk-visually-hidden"> name</span>
      </a>
    </dd>
  </div>
  <div class="govuk-summary-list__row">
    <dt class="govuk-summary-list__key">
      Date of birth
    </dt>
    <dd class="govuk-summary-list__value">
      5 January 1978
    </dd>
    <dd class="govuk-summary-list__actions">
      <a class="govuk-link" href="#">
        Change<span class="govuk-visually-hidden"> date of birth</span>
      </a>
    </dd>
  </div>
  <div class="govuk-summary-list__row">
    <dt class="govuk-summary-list__key">
      Address
    </dt>
    <dd class="govuk-summary-list__value">
      72 Guild Street<br>London<br>SE23 6FH
    </dd>
    <dd class="govuk-summary-list__actions">
      <a class="govuk-link" href="#">
        Change<span class="govuk-visually-hidden"> address</span>
      </a>
    </dd>
  </div>
  <div class="govuk-summary-list__row">
    <dt class="govuk-summary-list__key">
      Contact details
    </dt>
    <dd class="govuk-summary-list__value">
      <p class="govuk-body">07700 900457</p>
      <p class="govuk-body">sarah.phillips@example.com</p>
    </dd>
    <dd class="govuk-summary-list__actions">
      <a class="govuk-link" href="#">
        Change<span class="govuk-visually-hidden"> contact details</span>
      </a>
    </dd>
  </div>
</dl> */}