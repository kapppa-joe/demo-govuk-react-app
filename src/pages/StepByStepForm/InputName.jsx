import { useForm } from "react-hook-form";
import * as GovUK from "govuk-react";
import { useNavigate } from "react-router-dom";
import FormPageTemplate from "./FormPageTemplate";

const InputName = ({ setFormData, nextPage, renderElementOnly = false }) => {
  const 
    fieldName = "firstname",
    fieldNameForUser = "First name",
    heading = "Please input your first name",
    validations = {
      required: "please enter your first name",
      minLength: {
        value: 2,
        message: "you need to enter at least 2 characters",
      },
    }

  const {
    register,
    handleSubmit,
    formState: { errors, submitCount },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = handleSubmit((newData) => {
      setFormData((formData) => ({
        ...formData,
        ...newData,
      }));
      navigate(`../${nextPage}`);
    });

  const errorMsg = errors[fieldName]?.message;

  return (
    <FormPageTemplate onSubmit={onSubmit} heading={heading}>
      <GovUK.InputField
        input={register(fieldName, validations)}
        mb={4}
        meta={{ error: errorMsg, touched: submitCount > 0 }}
      >
        {fieldNameForUser}
      </GovUK.InputField>
    </FormPageTemplate>
  );
};

export default InputName;
