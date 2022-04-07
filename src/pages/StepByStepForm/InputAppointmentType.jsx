import { useForm } from "react-hook-form";
import * as GovUK from "govuk-react";
import { useNavigate } from "react-router-dom";
import FormPageTemplate from "./FormPageTemplate";

const InputAppointmentType = ({ setFormData, nextPage, renderElementOnly = false }) => {
  const 
    fieldName = "appointmentType",
    fieldNameForUser = "Appointment type",
    heading = "Choose the appointment type",
    validations = {
      required: "please select a choice to continue",
    },
    options = ["Play with an alpaca", "Feed an alpaca", "Cuddle a baby alpaca"];

  const {
    register,
    handleSubmit,
    formState: { errors, submitCount },
  } = useForm();
  const navigate = useNavigate();

  const errorMsg = errors[fieldName]?.message;

  const FormElement = () => (
    <GovUK.Select
      input={{ ...register(fieldName, validations), defaultValue: "" }}
      mb={4}
      meta={{ error: errorMsg, touched: submitCount > 0 }}
      label={fieldNameForUser}
    >
      <option value="" disabled="disabled">
        Please choose one from below:
      </option>
      {options.map((choice_name) => (
        <option value={choice_name}>{choice_name}</option>
      ))}
    </GovUK.Select>
  );

  if (renderElementOnly) {
    return <FormElement />;
  }

  // below are only needed when rendering full page

  const onSubmit = handleSubmit((newData) => {
    setFormData((formData) => ({
      ...formData,
      ...newData,
    }));
    navigate(`../${nextPage}`);
  });

  return (
    <FormPageTemplate onSubmit={onSubmit} heading={heading}>
      <FormElement />
    </FormPageTemplate>
  );
};

export default InputAppointmentType;
