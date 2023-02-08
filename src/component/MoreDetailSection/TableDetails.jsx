import React from "react";
import SelectedNote from "../../asset/images/selectednote.svg";

const TableDetails = () => {
  return (
    <div className="main_table">
      {Array(2)
        .fill(0)
        .map(() => (
          <div className="row main_row mb-2">
            <div className="col-lg-3 border-right">
              <div className="">
                <p className="tabledate">26 Nov ‘19</p>
                <p className="tableinfo">09.00 - 10.00</p>
              </div>
            </div>
            <div className="col-lg-4 treatment_div border-right">
              <p>Treatment</p>
              <p>Open Access</p>
            </div>
            <div className="col-lg-5 wrapper justify-content-around">
              <div>
                <p className="tableinfo">Dentist</p>
                <p>Drg. Adam H.</p>
              </div>
              <div>
                <p className="tableinfo">Nurse</p>
                <p>Jessicamila</p>
              </div>
              <div>
                <img src={SelectedNote}></img>
                <p className="selectednote">Note</p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default TableDetails;
