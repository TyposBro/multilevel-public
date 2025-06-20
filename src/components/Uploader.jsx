import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";

// This helper function reduces code duplication in the uploader components
export const Uploader = ({ title, formFields, apiEndpoint }) => {
  const { token } = useAuth();
  const [textData, setTextData] = useState(
    formFields.reduce((acc, field) => {
      if (field.type === "text" || field.type === "textarea") {
        acc[field.name] = "";
      }
      return acc;
    }, {})
  );
  const [files, setFiles] = useState({});
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

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
      setTextData({});
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
            {field.type === "textarea" ? (
              <textarea
                id={field.name}
                name={field.name}
                onChange={handleTextChange}
                rows={field.rows || 3}
                required
              />
            ) : (
              <input
                type={field.type}
                id={field.name}
                name={field.name}
                onChange={field.type === "file" ? handleFileChange : handleTextChange}
                accept={field.accept}
                required
              />
            )}
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
