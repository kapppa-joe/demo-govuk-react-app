import React, { useState, useCallback } from 'react';
import * as GovUK from 'govuk-react';
import { Link } from 'react-router-dom';

import { useForm } from 'react-hook-form';

import {
  validateHairColour,
  validateMultiplePets,
  validateFirstName,
  validateDescription,
  validateDateOfAppointment,
  validateTimeslot,
} from '../components/validators/form_validators.tsx'
import Results from '../components/Results.tsx';

const DateField = ({ input: { onChange, onBlur, ...input }, children, ...props }) => {
  const [value, setValue] = useState(input.value);
  return (
    <GovUK.DateField
      {...props}
      input={{
        onChange: (newValue) => {
          setValue({ ...value, ...newValue });
          onChange({ target: { value: { ...value, ...newValue }, name: input.name } });
        },
        onBlur: (newValue) => onBlur({ target: { value, name: input.name } }),
        ...input,
      }}
    >
      {children}
    </GovUK.DateField>
  );
};

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, submitCount },
  } = useForm({
    reValidateMode: 'onSubmit',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState();
  const handleFormSubmit = useCallback(
    (values) => {
      if (isSubmitting) return;
      setIsSubmitting(true);
      setTimeout(() => {
        // simulate async submission
        setSubmittedData(values);
        setHasSubmitted(true);
        setIsSubmitting(false);
      }, 1000);
    },
    [isSubmitting]
  );

  const errorsToShow = Object.keys(errors);

  // custom code here.
  const show_datepicker = () => {
    console.log("date picker clicked!!")
  }

  return (
    <>
      {!hasSubmitted && (
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <GovUK.LoadingBox loading={isSubmitting}>
            <GovUK.BackLink as={Link} to="/start">
              back
            </GovUK.BackLink>
            {!!errorsToShow?.length && (
              <GovUK.ErrorSummary
                heading="Error summary"
                description="Please address the following issues"
                errors={errorsToShow.map((key) => ({
                  targetName: key,
                  text: errors[key].message,
                }))}
              />
            )}
            <GovUK.Fieldset>
              <GovUK.Fieldset.Legend size="M">About you</GovUK.Fieldset.Legend>
              <GovUK.InputField
                mb={4}
                hint="You can find this on your passport"
                meta={{ touched: submitCount > 0, error: errors?.firstName?.message }}
                input={register('firstName', {
                  validate: validateFirstName,
                })}
              >
                First name
              </GovUK.InputField>
              <GovUK.TextArea
                mb={8}
                hint="Enter as many words as you like"
                meta={{ touched: submitCount > 0, error: errors?.description?.message }}
                input={register('description', {
                  validate: validateDescription,
                })}
              >
                Description of what you want to do with our alpacas
              </GovUK.TextArea>
              <GovUK.FormGroup error={submitCount > 0 && !!errors?.hairColour?.message}>
                <GovUK.Label mb={4}>
                  <GovUK.LabelText>Preferred Alpaca hair colours</GovUK.LabelText>
                  {submitCount > 0 && errors?.hairColour?.message && (
                    <GovUK.ErrorText>{errors?.hairColour.message}</GovUK.ErrorText>
                  )}
                  <GovUK.Checkbox
                    type="checkbox"
                    value="black"
                    {...register('hairColour', {
                      validate: validateHairColour,
                    })}
                  >
                    Black
                  </GovUK.Checkbox>
                  <GovUK.Checkbox
                    type="checkbox"
                    value="brown"
                    {...register('hairColour', {
                      validate: validateHairColour,
                    })}
                  >
                    Brown
                  </GovUK.Checkbox>
                  <GovUK.Checkbox
                    type="checkbox"
                    value="white"
                    {...register('hairColour', {
                      validate: validateHairColour,
                    })}
                  >
                    White
                  </GovUK.Checkbox>
                  <GovUK.Checkbox
                    type="checkbox"
                    value="cream"
                    {...register('hairColour', {
                      validate: validateHairColour,
                    })}
                  >
                    Cream
                  </GovUK.Checkbox>
                  <GovUK.Checkbox
                    type="checkbox"
                    value="rainbow"
                    hint="yes, we do have rainbow colour alpacas. :)"
                    {...register('hairColour', {
                      validate: validateHairColour,
                    })}
                  >
                    Rainbow colour
                  </GovUK.Checkbox>
                </GovUK.Label>
              </GovUK.FormGroup>
            </GovUK.Fieldset>
              
            <GovUK.Fieldset>
              <GovUK.Fieldset.Legend size="M">About your appointment</GovUK.Fieldset.Legend>
              <DateField
                errorText={submitCount > 0 ? errors?.dob?.message : undefined}
                input={register('dob', {
                  validate: validateDateOfAppointment,
                })}
              >
                Which day do you want to visit us on?
              </DateField>
              
              {/* <GovUK.Button type="button" onClick={show_datepicker} margin={{direction: "bottom", size: 6}}>Use a datepicker<input type="date" className="datepicker active"/></GovUK.Button> */}
              
              <GovUK.Select
                mb={8}
                label="What time slot do you what to book?"
                input={register('timeslot', {
                  validate: validateTimeslot,
                })}
                meta={{ error: errors?.timeslot?.message, touched: submitCount > 0 }}
              >
                <option value="">Please select...</option>
                <option value="10:00-11:30">10:00-11:30</option>
                <option value="13:00-14:30">13:00-14:30</option>
                <option value="15:00-16:30">15:00-16:30</option>
              </GovUK.Select>
              <GovUK.MultiChoice
                mb={8}
                label="Do you have children (age below 18) coming with you?"
                meta={{ error: errors?.hasChildrenAccompany?.message, touched: submitCount > 0 }}
              >
                <GovUK.Radio
                  type="radio"
                  inline
                  value="yes"
                  {...register('hasChildrenAccompany', { validate: validateMultiplePets })}
                >
                  Yes
                </GovUK.Radio>
                <GovUK.Radio
                  type="radio"
                  inline
                  value="no"
                  {...register('hasChildrenAccompany', { validate: validateMultiplePets })}
                >
                  No
                </GovUK.Radio>
              </GovUK.MultiChoice>
            </GovUK.Fieldset>
            <GovUK.Button type="submit" disabled={isSubmitting}>
              Submit
            </GovUK.Button>
          </GovUK.LoadingBox>
        </form>
      )}
      {hasSubmitted && (
        <Results backLink="/" onBackClick={() => setHasSubmitted(false)} {...submittedData} />
      )}
    </>
  );
};

export default Form;