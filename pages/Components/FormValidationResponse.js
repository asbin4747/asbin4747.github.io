import React, { useState } from "react";

export default function FormValidationResponse({
  success,
  failedResponse,
  errors,
}) {
  console.log("Error from formvalidation", errors);
  return (
    <>
      {success && (
        <div className="flex text-blue-600 pt-3">
          Thank you for connecting. I will be in touch!
        </div>
      )}

      {failedResponse && (
        <div className="flex text-blue-600 pt-3">
          <div>Sorry, Something wrong with our server. Please try again!</div>;
        </div>
      )}

      {errors && (
        <div className="flex text-red-600">
          {errors.errors.name} {"."} {errors.errors.email}. 
        </div>
      )}
    </>
  );
}
