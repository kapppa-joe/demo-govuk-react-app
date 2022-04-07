import React, { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import slugify from "slugify";

import CheckYourDetails from "./CheckYourDetails";
import InputAppointmentType from "./InputAppointmentType";
import InputDateAndTime from "./InputDateAndTime";
import InputName from "./InputName";

const pages_to_render = [
  { field_name: "Name", element: InputName },
  { field_name: "Appointment Type", element: InputAppointmentType },
  { field_name: "Date and Time", element: InputDateAndTime },
];
const check_your_details = "check_your_details";

const conv_to_endpoint = (field_name) =>
  slugify(field_name, { replacement: "_", lower: true });

const StepByStepForm = () => {
  const [formData, setFormData] = useState({});
  
  const routes_to_render = pages_to_render.map(
    ({ field_name, element }, index) => {
      const endpoint_name = conv_to_endpoint(field_name);
      const Element = element; // make it capital so that JSX got rendered
      const is_last_page = index == pages_to_render.length - 1;
      const path_to_next_page = is_last_page
        ? check_your_details
        : conv_to_endpoint(pages_to_render[index + 1]?.["field_name"]);

      return (
        <Route
          key={endpoint_name}
          path={endpoint_name}
          element={
            <Element setFormData={setFormData} nextPage={path_to_next_page} />
          }
        />
      );
    }
  );

  return (
    <Routes>
      <Route path="/" element={<Navigate to={"name"} />} />
      {routes_to_render}
      <Route
        path="check_your_details"
        element={
          <CheckYourDetails formData={formData} setFormData={setFormData} />
        }
      />
    </Routes>
  );
};

export default StepByStepForm;
