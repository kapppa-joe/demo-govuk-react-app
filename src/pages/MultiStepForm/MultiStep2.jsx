import React from 'react';
import * as GovUK from 'govuk-react';

const MultiStep2 = ({data, handleChange, next, back}) => {
    return (
    <GovUK.FormGroup>
      <GovUK.InputField 
        input={{type: "text", name: "street", value: data.street, onChange:handleChange}}
        mb={6}
      >
        Street:
      </GovUK.InputField>

      <GovUK.InputField
        input={{type: "text", name: "city", value: data.city, onChange:handleChange}}
        mb={6}
      >
        City
      </GovUK.InputField>

      <GovUK.InputField
        input={{type: "text", name: "postcode", value: data.postcode, onChange:handleChange}}
        mb={6}
      >
        Postcode
      </GovUK.InputField>

      <GovUK.Button onClick={back} margin={{direction: "right", size: 6}}>Back</GovUK.Button>
      <GovUK.Button onClick={next}>Next</GovUK.Button>
      
    </GovUK.FormGroup>
    );
};

export default MultiStep2;