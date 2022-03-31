import React from "react";
import { Breadcrumbs } from "govuk-react";

const DefaultBreadCrumbs = () => {
  return (
    <Breadcrumbs>
      <Breadcrumbs.Link href="#">Home</Breadcrumbs.Link>
      <Breadcrumbs.Link href="#">
        Animals Appointment
      </Breadcrumbs.Link>
      Alpaca Appointment Service
    </Breadcrumbs>
  );
};

export default DefaultBreadCrumbs;
