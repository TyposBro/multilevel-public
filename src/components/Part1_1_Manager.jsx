import React from "react";
import { ContentManager } from "./ContentManager";

const Part1_1_Manager = () => (
  <ContentManager
    title="Part 1.1 Questions"
    apiEndpoint="/api/admin/content/part1.1"
    formFields={[
      { name: "questionText", label: "Question Text", type: "text" },
      { name: "audio", label: "Question Audio", type: "file", accept: "audio/*" },
    ]}
    tableColumns={[
      { key: "id", header: "ID" },
      { key: "questionText", header: "Question" },
      { key: "createdAt", header: "Created At" },
    ]}
  />
);

export default Part1_1_Manager;
