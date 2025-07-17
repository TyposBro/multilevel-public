import React from "react";
import { ContentManager } from "./ContentManager";

const Part3_Manager = () => (
  <ContentManager
    title="Part 3 Topics"
    apiEndpoint="/api/admin/content/part3"
    formFields={[
      { name: "topic", label: "Topic Statement", type: "text" },
      { name: "forPoints", label: "FOR Points (one per line)", type: "textarea", rows: 4 },
      { name: "againstPoints", label: "AGAINST Points (one per line)", type: "textarea", rows: 4 },
      {
        name: "image",
        label: "Topic Image (Optional)",
        type: "file",
        accept: "image/*",
        required: false,
        dbColumn: "imageUrl",
      },
    ]}
    tableColumns={[
      { key: "id", header: "ID" },
      { key: "topic", header: "Topic" },
      { key: "createdAt", header: "Created At" },
    ]}
  />
);

export default Part3_Manager;
