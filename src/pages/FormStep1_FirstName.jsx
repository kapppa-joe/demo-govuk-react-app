import { useForm } from "react-hook-form";
import * as GovUK from "govuk-react";

const FormStep1 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, submitCount },
  } = useForm();

  const props = {
    fieldName: "firstname",
    fieldNameForUser: "Your first name",
    inputProps: {
      required: "please enter your first name",
      minLength: {
        value: 4,
        message: "you need to enter at least 4 characters",
      },
      placeholder: "first name",
    },
  };

  const {fieldName, fieldNameForUser, inputProps} = props

  const errorMsg = errors[fieldName]?.message;

  return (
    <div>
      <GovUK.Main>
        <form
          onSubmit={handleSubmit((data) => {
            console.log(data);
          })}
        >
          <GovUK.FormGroup>
            <GovUK.Fieldset>
              <GovUK.InputField
                input={register(fieldName, inputProps)}
                mb={4}
                meta={{ error: errorMsg, touched: submitCount > 0 }}
              >
                {fieldNameForUser}
              </GovUK.InputField>
            </GovUK.Fieldset>

            <GovUK.Button type="submit" value="Submit">
              Next
            </GovUK.Button>
          </GovUK.FormGroup>
        </form>
      </GovUK.Main>
    </div>
  );
};

export default FormStep1;
