import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";

const API_BASE_URL = import.meta.env.VITE_API_URL;

const Part2_Editor = ({ item, onSave, onCancel }) => {
  const { token } = useAuth();
  const [textData, setTextData] = useState({});
  const [files, setFiles] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (item) {
      setTextData({
        imageDescription: item.imageDescription || "",
        question1: item.questions[0]?.text || "",
        question2: item.questions[1]?.text || "",
        question3: item.questions[2]?.text || "",
      });
    }
  }, [item]);

  const handleChange = (e) => {
    setTextData({ ...textData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setFiles({ ...files, [e.target.name]: e.target.files[0] });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");

    const payload = new FormData();
    Object.keys(textData).forEach((key) => payload.append(key, textData[key]));
    Object.keys(files).forEach((key) => payload.append(key, files[key]));

    try {
      const response = await fetch(`${API_BASE_URL}/api/admin/content/part2/${item.id}`, {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: payload,
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.message || "Update failed");
      onSave(result);
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  if (!item) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h3>
          Editing Part 2 Set: <span className="id-column">{item.id}</span>
        </h3>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Image (Optional)</label>
            {item.imageUrl && (
              <div className="file-preview">
                <img src={item.imageUrl} alt="Current" />
              </div>
            )}
            <input type="file" name="image" accept="image/*" onChange={handleFileChange} />
            <small>Upload to replace the current image.</small>
          </div>
          <div className="input-group">
            <label>Audio for All Questions</label>
            {item.questions[0]?.audioUrl && (
              <div className="file-preview">
                <audio controls src={item.questions[0].audioUrl} />
              </div>
            )}
            <input type="file" name="audio" accept="audio/*" onChange={handleFileChange} />
            <small>Upload to replace the current audio.</small>
          </div>
          <div className="input-group">
            <label>Image Description</label>
            <input
              type="text"
              name="imageDescription"
              value={textData.imageDescription}
              onChange={handleChange}
            />
          </div>
          <div className="input-group">
            <label>Question 1 Text</label>
            <input
              type="text"
              name="question1"
              value={textData.question1}
              onChange={handleChange}
            />
          </div>
          <div className="input-group">
            <label>Question 2 Text</label>
            <input
              type="text"
              name="question2"
              value={textData.question2}
              onChange={handleChange}
            />
          </div>
          <div className="input-group">
            <label>Question 3 Text</label>
            <input
              type="text"
              name="question3"
              value={textData.question3}
              onChange={handleChange}
            />
          </div>

          {message && <p className="error-message">{message}</p>}
          <div className="modal-actions">
            <button type="button" className="btn-secondary" onClick={onCancel} disabled={isLoading}>
              Cancel
            </button>
            <button type="submit" className="btn-primary" disabled={isLoading}>
              {isLoading ? "Saving..." : "Save Changes"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Part2_Editor;
