import React, { useState } from 'react';
import * as GovUK from 'govuk-react';
import { Link } from 'govuk-react';

const CheckYourDetails = ({formData, setFormData}) => {
  const entriesCount = Object.entries(formData).length
  const [expandChange, setExpandChange] = useState(Array(entriesCount).fill(false))
  const toggleNthBox = (index) => {
    setExpandChange(currState => {
      const newState = [...currState]
      newState[index] = !newState[index]
      return newState
    })
  }

  const listItems = Object.entries(formData).map(([key, value], index) => (
    <>
    <div className="govuk-summary-list__row">
      <dt className="govuk-summary-list__key">{key}</dt>
      <dd className="govuk-summary-list__value">{value}</dd>
      <dd className="govuk-summary-list__actions">
        <Link href="#" onClick={() => toggleNthBox(index)}>Change</Link>
        <span class="govuk-visually-hidden"> name</span>
      </dd>
    </div>
    {expandChange[index] && <div>render input field here!</div>}
    </>
  ))


  return (
    <div>
      <GovUK.Heading>Check your details</GovUK.Heading>
      <dl className="govuk-summary-list">
        {listItems}
      </dl>
      <GovUK.Button type="submit">Submit</GovUK.Button>
    </div>
  );
};

export default CheckYourDetails;