import React from "react";

function SuccessPage() {
  return (
    <div>
      Register was successfull
      <h5>{localStorage.getItem("id")}</h5>
    </div>
  );
}

export default SuccessPage;
