import React from "react";
import Uploader from "./Uploader"; // Import the generic component

const Part3_Uploader = () => (
  <Uploader
    title="Upload Part 3 Topic"
    apiEndpoint="/api/admin/content/part3" // The API endpoint this form will submit to
    formFields={[
      { name: "topic", label: "Topic Statement", type: "text" },
      { name: "forPoints", label: "FOR Points (one per line)", type: "textarea", rows: 4 },
      { name: "againstPoints", label: "AGAINST Points (one per line)", type: "textarea", rows: 4 },
      // The 'image' is optional for Part 3, so we remove the `required` attribute from the backend
      // and let the frontend submit without it if the user doesn't select one.
      { name: "image", label: "Optional Image", type: "file", accept: "image/*" },
    ]}
  />
);

export default Part3_Uploader;
