import React from "react";
import { Uploader } from "./Uploader";

export const WordBankUploader = () => (
  <Uploader
    title="Upload New Word to Word Bank"
    // Use an appropriate admin endpoint. This should be a protected route on your backend.
    apiEndpoint="/api/admin/wordbank/add"
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
      {
        name: "example1",
        label: "Example Sentence 1 (Optional)",
        type: "textarea",
        required: false, // Mark as optional
      },
      {
        name: "example1Translation",
        label: "Translation for Example 1 (Optional)",
        type: "textarea",
        required: false, // Mark as optional
      },
      {
        name: "example2",
        label: "Example Sentence 2 (Optional)",
        type: "textarea",
        required: false, // Mark as optional
      },
      {
        name: "example2Translation",
        label: "Translation for Example 2 (Optional)",
        type: "textarea",
        required: false, // Mark as optional
      },
    ]}
  />
);

export default WordBankUploader;
