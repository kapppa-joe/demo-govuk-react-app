import { useForm } from "react-hook-form";
import * as GovUK from "govuk-react";
import { useNavigate } from "react-router-dom";
import FormPageTemplate from "./FormPageTemplate";

const InputDateAndTime = ({ setFormData, nextPage, renderElementOnly = false}) => {
  const 
    fieldName = "dateAndTime",
    fieldNameForUser = "Date and Time",
    heading = "Choose from below available date and timeslot",
    validations = {
      required: "please select a choice to continue",
    },
    options = ["20th Monday 13:00", "21st Monday 14:00", "22nd Monday 15:00"];

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

export default InputDateAndTime;
