import { useForm } from "react-hook-form";
import * as GovUK from "govuk-react";
import { useNavigate } from "react-router-dom";

const InputAppointmentType = ({formData, setFormData}) => {
  const {
    register,
    handleSubmit,
    formState: { errors, submitCount },
  } = useForm();

  const navigate = useNavigate();

  const
    fieldName = "appointmentType",
    fieldNameForUser = "Appointment type",
    heading = "Choose the appointment type",
    validations = {
      required: "please select a choice to continue"
    },
    choices = [
      "Play with an alpaca",
      "Feed an alpaca",
      "Cuddle a baby alpaca",
    ]

  const errorMsg = errors[fieldName]?.message;

  return (
    <div>
      <GovUK.Main>
        <GovUK.GridCol>
        <form
          onSubmit={handleSubmit((newData) => {
            setFormData(formData => ({
              ...formData, ...newData
            }))
            console.log(newData);
            navigate('../date_and_time');
          })}
        >
        <GovUK.Heading>{heading}</GovUK.Heading>
          <GovUK.FormGroup>
            <GovUK.Fieldset>
              <GovUK.Select
                input={{...register(fieldName, validations), defaultValue:""}}
                mb={4}
                meta={{ error: errorMsg, touched: submitCount > 0 }}
                label={fieldNameForUser}
              >
                <option value="" disabled="disabled">
                  Please choose one from below:
                </option>
                {choices.map((choice_name) => (
                  <option value={choice_name}>
                    {choice_name}
                  </option>
                ))}
              </GovUK.Select>
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

export default InputAppointmentType;