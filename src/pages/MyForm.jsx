import { useForm } from "react-hook-form";
import * as GovUK from "govuk-react";

const MyForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, submitCount },
  } = useForm();

  // TODO: try to extract the details into props and pass in from outside
  // const formInformation = {
  //   fieldName: "firstname",
  //   fieldNameForUser: "Your first name",
  //   inputProps: {
  //     required: "please enter your first name",
  //     minLength: {
  //       value: 4,
  //       message: "you need to enter at least 4 characters",
  //     },
  //     placeholder: "first name",
  //   },
  // };

  const errorMsg = errors["firstname"]?.message;

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
                input={register("firstname", {
                  required: "please enter your first name",
                  minLength: {
                    value: 4,
                    message: "you need to enter at least 4 characters",
                  },
                  placeholder: "first name",
                })}
                mb={4}
                meta={{ error: errorMsg, touched: submitCount > 0 }}
              >
                Your first name
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

export default MyForm;
