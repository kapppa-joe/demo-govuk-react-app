import React from 'react';
import * as GovUK from 'govuk-react';

const MultiStep3 = ({data, handleChange, next, back}) => {
    return (
    <GovUK.FormGroup>
      <GovUK.InputField 
        input={{type: "textarea", name: "comments", value: data.comments, onChange:handleChange}}
        mb={6}
      >
        Street:
      </GovUK.InputField>

      <GovUK.Button onClick={back} margin={{direction: "right", size: 6}}>Back</GovUK.Button>
      <GovUK.Button onClick={next}>Next</GovUK.Button>
      
    </GovUK.FormGroup>

    );
};

export default MultiStep3;