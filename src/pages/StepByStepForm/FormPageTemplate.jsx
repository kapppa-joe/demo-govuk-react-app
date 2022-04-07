import * as GovUK from "govuk-react";

const FormPageTemplate = ({children, onSubmit, heading}) => {

  return (
      <GovUK.Main>
        <GovUK.GridCol>
        <form
          onSubmit={onSubmit}
        >
        <GovUK.Heading>{heading}</GovUK.Heading>
          <GovUK.FormGroup>
            <GovUK.Fieldset>
              {children}
            </GovUK.Fieldset>

            <GovUK.Button type="submit" value="Submit">
              Next
            </GovUK.Button>
          </GovUK.FormGroup>
        </form>
        </GovUK.GridCol>
      </GovUK.Main>
  );
};

export default FormPageTemplate;