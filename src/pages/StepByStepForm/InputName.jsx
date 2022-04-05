import { useForm } from "react-hook-form";
import * as GovUK from "govuk-react";
import { useNavigate } from "react-router-dom";

const InputName = ({formData, setFormData}) => {
  const {
    register,
    handleSubmit,
    formState: { errors, submitCount },
  } = useForm();

  const navigate = useNavigate();

  const
    fieldName = "firstname",
    fieldNameForUser = "First name",
    heading = "Please input your first name",
    validations = {
      required: "please enter your first name",
      minLength: {
        value: 4,
        message: "you need to enter at least 4 characters",
      }
    }


  const errorMsg = errors[fieldName]?.message;

  return (
    <div>
      <GovUK.Main>
        <GovUK.GridCol setWidth="two-thirds">
        <form
          onSubmit={handleSubmit((newData) => {
            setFormData(formData => ({
              ...formData, ...newData
            }));
            navigate('../appointment_type');
          })}
        >
        <GovUK.Heading>{heading}</GovUK.Heading>
          <GovUK.FormGroup>
            <GovUK.Fieldset>
              <GovUK.InputField
                input={register(fieldName, validations)}
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
        </GovUK.GridCol>
      </GovUK.Main>
    </div>
  );
};

export default InputName;