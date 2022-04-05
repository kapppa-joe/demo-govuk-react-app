import React, { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import CheckYourDetails from "./CheckYourDetails";
import InputAppointmentType from "./InputAppointmentType";
import InputDateAndTime from "./InputDateAndTime";
import InputName from "./InputName";

const StepByStepForm = () => {
  const [formData, setFormData] = useState({})

  return (
    <Routes>
      <Route path="/" element={<Navigate to={"name"} />} />
      <Route path="name" element={<InputName formData={formData} setFormData={setFormData} />}/>
      <Route path="appointment_type" element={<InputAppointmentType formData={formData} setFormData={setFormData} />}/>
      <Route path="date_and_time" element={<InputDateAndTime formData={formData} setFormData={setFormData} />}/>
      <Route path="check_your_details" element={<CheckYourDetails formData={formData} setFormData={setFormData} />}/>
    </Routes>
  )
};

export default StepByStepForm;
