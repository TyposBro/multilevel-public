import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";

// This helper function reduces code duplication in the uploader components
export const Uploader = ({ title, formFields, apiEndpoint }) => {
  const { token } = useAuth();

  // Helper to create initial state from form fields
  const createInitialState = () => {
    return formFields.reduce((acc, field) => {
      if (field.type === "text" || field.type === "textarea" || field.type === "select") {
        acc[field.name] = "";
      }
      return acc;
    }, {});
  };

  const [textData, setTextData] = useState(createInitialState());
  const [files, setFiles] = useState({});
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Reset form when formFields prop changes (navigating between uploaders)
  useEffect(() => {
    setTextData(createInitialState());
    setFiles({});
    setMessage("");
  }, [formFields]);

  const handleTextChange = (e) => {
    setTextData({ ...textData, [e.target.name]: e.target.value });
  };
  const handleFileChange = (e) => {
    setFiles({ ...files, [e.target.name]: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");
    const uploadData = new FormData();

    Object.keys(textData).forEach((key) => uploadData.append(key, textData[key]));
    Object.keys(files).forEach((key) => uploadData.append(key, files[key]));

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}${apiEndpoint}`, {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: uploadData,
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.message || "Upload failed");
      setMessage(`Success! Content added.`);
      e.target.reset();
      setTextData(createInitialState());
      setFiles({});
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="uploader-container">
      <h2>{title}</h2>
      <form onSubmit={handleSubmit} className="uploader-form">
        {formFields.map((field) => (
          <div className="input-group" key={field.name}>
            <label htmlFor={field.name}>{field.label}</label>
            {(() => {
              // --- START OF MODIFIED LOGIC ---
              const isRequired = field.required !== false; // Default to true

              switch (field.type) {
                case "textarea":
                  return (
                    <textarea
                      id={field.name}
                      name={field.name}
                      value={textData[field.name] || ""}
                      onChange={handleTextChange}
                      rows={field.rows || 3}
                      required={isRequired}
                    />
                  );
                case "select":
                  return (
                    <select
                      id={field.name}
                      name={field.name}
                      value={textData[field.name] || ""}
                      onChange={handleTextChange}
                      required={isRequired}
                    >
                      <option value="" disabled>
                        -- Select an option --
                      </option>
                      {field.options.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  );
                default: // 'text', 'file', etc.
                  return (
                    <input
                      type={field.type}
                      id={field.name}
                      name={field.name}
                      value={field.type === "file" ? undefined : textData[field.name] || ""}
                      onChange={field.type === "file" ? handleFileChange : handleTextChange}
                      accept={field.accept}
                      required={isRequired}
                    />
                  );
              }
              // --- END OF MODIFIED LOGIC ---
            })()}
          </div>
        ))}
        <button type="submit" className="btn-primary" disabled={isLoading}>
          {isLoading ? "Uploading..." : "Upload"}
        </button>
      </form>
      {message && (
        <p className={message.startsWith("Error") ? "error-message" : "success-message"}>
          {message}
        </p>
      )}
    </div>
  );
};

export default Uploader;
