// {PATH_TO_PROJECT}/src/components/Part1_2Uploader.jsx

import React, { useState } from "react";

// You'd get the token from your auth context or localStorage
const AUTH_TOKEN = localStorage.getItem("admin_token");

const Part1_2Uploader = () => {
  const [formData, setFormData] = useState({
    imageDescription: "",
    question1: "What do you see in these pictures?", // Pre-fill the standard question
    question2: "",
    question3: "",
  });
  const [files, setFiles] = useState({});
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleTextChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFiles({ ...files, [e.target.name]: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");

    const uploadData = new FormData();

    // Append text data
    for (const key in formData) {
      uploadData.append(key, formData[key]);
    }

    // Append file data
    for (const key in files) {
      uploadData.append(key, files[key]);
    }

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/admin/content/part1.2`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${AUTH_TOKEN}`,
          // 'Content-Type' is NOT set here; the browser sets it automatically
          // for multipart/form-data with the correct boundary.
        },
        body: uploadData,
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Something went wrong");
      }

      setMessage(`Success! Content added with ID: ${result.data._id}`);
      // Optionally clear the form
      e.target.reset();
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ border: "1px solid #ccc", padding: "20px", margin: "20px 0" }}>
      <h3>Upload Part 1.2 Content</h3>
      <form onSubmit={handleSubmit}>
        {/* Text Inputs */}
        <label>
          Image Description:{" "}
          <input type="text" name="imageDescription" onChange={handleTextChange} required />
        </label>
        <br />
        <br />
        <label>
          Question 1 Text:{" "}
          <input
            type="text"
            name="question1"
            value={formData.question1}
            onChange={handleTextChange}
            required
          />
        </label>
        <br />
        <br />
        <label>
          Question 2 Text:{" "}
          <input type="text" name="question2" onChange={handleTextChange} required />
        </label>
        <br />
        <br />
        <label>
          Question 3 Text:{" "}
          <input type="text" name="question3" onChange={handleTextChange} required />
        </label>
        <br />
        <br />

        {/* File Inputs */}
        <label>
          Image 1: <input type="file" name="image1" onChange={handleFileChange} required />
        </label>
        <br />
        <br />
        <label>
          Image 2: <input type="file" name="image2" onChange={handleFileChange} required />
        </label>
        <br />
        <br />
        <label>
          Audio for Q1:{" "}
          <input type="file" name="audio1" onChange={handleFileChange} accept="audio/*" required />
        </label>
        <br />
        <br />
        <label>
          Audio for Q2:{" "}
          <input type="file" name="audio2" onChange={handleFileChange} accept="audio/*" required />
        </label>
        <br />
        <br />
        <label>
          Audio for Q3:{" "}
          <input type="file" name="audio3" onChange={handleFileChange} accept="audio/*" required />
        </label>
        <br />
        <br />

        <button type="submit" disabled={isLoading}>
          {isLoading ? "Uploading..." : "Upload Content"}
        </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Part1_2Uploader;
