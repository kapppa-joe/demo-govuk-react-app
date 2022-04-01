import React from "react";
import * as GovUK from "govuk-react";

const MultiStep1 = ({ data, handleChange, next }) => {
  return (
    <GovUK.FormGroup>
      <GovUK.InputField 
        input={{type: "text", name: "name", value: data.name, onChange:handleChange}}
        mb={6}
      >
        Name:
      </GovUK.InputField>

      <GovUK.InputField
        input={{type: "email", name: "email", value: data.email, onChange:handleChange}}
        mb={6}
      >
        Email:
      </GovUK.InputField>

      <GovUK.Button onClick={next}>Next</GovUK.Button>
      
    </GovUK.FormGroup>
  );
};

export default MultiStep1;
