import React from "react";
import { AdvanceDetailSection } from "./AdvanceDetailSection";
import TableDetails from "./TableDetails";

const MoreDeatilSection = () => {
  return (
    <div className="moredetailsection">
      <div className="advancedetail">
        {/* // tab detail sectiopn */}
        <AdvanceDetailSection />
      </div>
      {/* // table section */}
      <div className="tabledetail">
        <div className="select_tab wrapper justify-content-start">
          <ul className="d-flex tab-wrapper">
            <li className="selectedList">Upcoming Appointments</li>
            <li>Past Appointment</li>
            <li>Medical Records</li>
          </ul>
        </div>
        <div className="table-wrapper">
          <div className="table_header_btns-wrapper wrapper ">
            <button className="btn">Root Canal Treatment</button>
            <button className="btn table-active">
              Show Previous Treatments
            </button>
          </div>
          <TableDetails />
        </div>
      </div>
    </div>
  );
};
export default MoreDeatilSection;
