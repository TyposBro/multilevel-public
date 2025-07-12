import React from "react";
import { Uploader } from "./Uploader";

const Part1_2_Uploader = () => (
  <Uploader
    title="Upload Part 1.2 Set"
    apiEndpoint="/api/admin/content/part1.2"
    formFields={[
      {
        name: "imageDescription",
        label: "Image Description (for internal reference)",
        type: "text",
      },
      {
        name: "question1",
        label: "Question 1 Text",
        type: "text",
        // The original component had a pre-filled value.
        // The generic uploader doesn't support this out-of-the-box,
        // but this is a cleaner implementation.
        // Users will need to type it, or the Uploader can be enhanced later.
      },
      { name: "question2", label: "Question 2 Text", type: "text" },
      { name: "question3", label: "Question 3 Text", type: "text" },
      { name: "image1", label: "Image 1", type: "file", accept: "image/*" },
      { name: "image2", label: "Image 2", type: "file", accept: "image/*" },
      { name: "audio1", label: "Audio for Q1", type: "file", accept: "audio/*" },
      { name: "audio2", label: "Audio for Q2", type: "file", accept: "audio/*" },
      { name: "audio3", label: "Audio for Q3", type: "file", accept: "audio/*" },
    ]}
  />
);

export default Part1_2_Uploader;
