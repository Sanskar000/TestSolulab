import React from "react";
import "./detailsection.css";

export const AdvanceDetailSection = () => {
  const detaildata = [
    {
      label: "Gender",
      value: "Female",
    },
    {
      label: "Birthday",
      value: "Feb 24th, 1977",
    },
    {
      label: "Phone Number",
      value: "(239)555-0108",
    },
    ,
    { label: "Registered Date", value: "Feb 24th, 1997" },

    {
      label: "Street Address",
      value: "JL.Diponegoro",
    },
    {
      label: "City",
      value: "Cilacap",
    },
    {
      label: "Zip",
      value: "655849",
    },
    {
      label: "Memeber Status",
      value: "Active Member",
    },
  ];
  return (
    <div className="row mt-4">
      {detaildata.map((elem) => (
        <div className="col-lg-3">
          <div className="detailinfo">
            <p className="labeltext">{elem.label}</p>
            <p className="valuetext"> {elem.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
