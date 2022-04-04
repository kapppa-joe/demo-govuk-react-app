import React, { useState } from "react";
import * as GovUK from "govuk-react";
import MultiStep1 from "./MultiStep1";
import MultiStep2 from "./MultiStep2";
import MultiStep3 from "./MultiStep3";
import MultiStepSubmit from "./MultiStepSubmit";

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    street: "",
    city: "",
    postcode: "",
    comments: "",
  });

  const handleChange = (event) => {
    console.log(event.target.name);
    setFormData((formData) => ({
      ...formData,
      [event.target.name]: event.target.value,
    }));
  };
  const next = () => {
    setCurrentStep((currentStep) => currentStep + 1);
  };
  const back = () => {
    setCurrentStep((currentStep) => currentStep - 1);
  };

  const selectPageToShow = (currentStep) => {
    switch (currentStep) {
      case 1:
        return (
          <MultiStep1 data={formData} handleChange={handleChange} next={next} />
        );
      case 2:
        return (
          <MultiStep2 data={formData} handleChange={handleChange} next={next} back={back} />
        )
      case 3:
        return (
          <MultiStep3 data={formData} handleChange={handleChange} next={next} back={back} />
        )
      case 4:
        return (
          <MultiStepSubmit data={formData} />
        )
      default:
        return <div>this page is under construction</div>
    }
  };

  return (
    <GovUK.Main>
      <GovUK.Heading size="L">Step{currentStep}</GovUK.Heading>
      {selectPageToShow(currentStep)}
      <GovUK.SectionBreak margin={4} />
    </GovUK.Main>
  );
};

export default MultiStepForm;
