import React from "react";
import { ContentManager } from "./ContentManager";

const Part2_Manager = () => (
  <ContentManager
    title="Part 2 Sets"
    apiEndpoint="/api/admin/content/part2"
    formFields={[
      { name: "imageDescription", label: "Image Description", type: "text", required: false },
      { name: "question1", label: "Question 1 Text", type: "text" },
      { name: "question2", label: "Question 2 Text", type: "text" },
      { name: "question3", label: "Question 3 Text", type: "text" },
      {
        name: "image",
        label: "Image (Optional)",
        type: "file",
        accept: "image/*",
        required: false,
      },
      { name: "audio", label: "Audio for All Questions", type: "file", accept: "audio/*" },
    ]}
    tableColumns={[
      { key: "id", header: "ID" },
      { key: "imageDescription", header: "Description" },
      { key: "createdAt", header: "Created At" },
    ]}
  />
);

export default Part2_Manager;
