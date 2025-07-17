import React from "react";
import { ContentManager } from "./ContentManager";

const WordBankManager = () => (
  <ContentManager
    title="Word Bank"
    apiEndpoint="/api/admin/wordbank" // Corrected endpoint for CRUD
    formFields={[
      { name: "word", label: "Word", type: "text" },
      { name: "translation", label: "Translation", type: "text" },
      {
        name: "cefrLevel",
        label: "CEFR Level",
        type: "select",
        options: ["A1", "A2", "B1", "B2", "C1", "C2"],
      },
      { name: "topic", label: "Topic", type: "text" },
      { name: "example1", label: "Example 1", type: "textarea", required: false },
      {
        name: "example1Translation",
        label: "Example 1 Translation",
        type: "textarea",
        required: false,
      },
      { name: "example2", label: "Example 2", type: "textarea", required: false },
      {
        name: "example2Translation",
        label: "Example 2 Translation",
        type: "textarea",
        required: false,
      },
    ]}
    tableColumns={[
      { key: "word", header: "Word" },
      { key: "translation", header: "Translation" },
      { key: "cefrLevel", header: "Level" },
      { key: "topic", header: "Topic" },
    ]}
  />
);

export default WordBankManager;
