import React from "react";
import { ContentManager } from "./ContentManager";
import Part1_2_Editor from "./Part1_2_Editor"; // Import the specialized editor

const Part1_2_Manager = () => (
  <ContentManager
    title="Part 1.2 Sets"
    apiEndpoint="/api/admin/content/part1.2"
    formFields={[
      // This is now only used for the "Create New" form via the Uploader
      { name: "imageDescription", label: "Image Description", type: "text" },
      { name: "question1", label: "Question 1 Text", type: "text" },
      { name: "question2", label: "Question 2 Text", type: "text" },
      { name: "question3", label: "Question 3 Text", type: "text" },
      { name: "image1", label: "Image 1", type: "file", accept: "image/" },
      { name: "image2", label: "Image 2", type: "file", accept: "image/" },
      { name: "audio1", label: "Audio for Q1", type: "file", accept: "audio/" },
      { name: "audio2", label: "Audio for Q2", type: "file", accept: "audio/" },
      { name: "audio3", label: "Audio for Q3", type: "file", accept: "audio/*" },
    ]}
    tableColumns={[
      { key: "id", header: "ID" },
      { key: "imageDescription", header: "Description" },
      { key: "createdAt", header: "Created At" },
    ]}
    EditorComponent={Part1_2_Editor} // Pass the specialized component as a prop
  />
);

export default Part1_2_Manager;
