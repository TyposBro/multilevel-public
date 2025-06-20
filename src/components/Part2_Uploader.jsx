import React from "react";
import Uploader from "./Uploader"; // Import the generic component

const Part2_Uploader = () => (
  <Uploader
    title="Upload Part 2 Set"
    apiEndpoint="/api/admin/content/part2" // The API endpoint this form will submit to
    formFields={[
      {
        name: "imageDescription",
        label: "Image Description (for internal reference)",
        type: "text",
      },
      { name: "question1", label: "Question 1 Text", type: "text" },
      { name: "question2", label: "Question 2 Text", type: "text" },
      { name: "question3", label: "Question 3 Text", type: "text" },
      { name: "image", label: "Image", type: "file", accept: "image/*" },
      // Note: The audio file contains the reading of all 3 questions together
      { name: "audio", label: "Audio for All 3 Questions", type: "file", accept: "audio/*" },
    ]}
  />
);

export default Part2_Uploader;
