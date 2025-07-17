import React, { useState, useEffect, useCallback } from "react";
import { useAuth } from "../context/AuthContext";
import { Uploader } from "./Uploader";

const API_BASE_URL = import.meta.env.VITE_API_URL;

// Reusable form component for simple items (text and single file fields)
const GenericEditorForm = ({ item, formFields, apiEndpoint, token, onSave, onCancel }) => {
  const [textData, setTextData] = useState({});
  const [files, setFiles] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const initialData = {};
    formFields.forEach((field) => {
      if (field.type !== "file") {
        const value = item[field.name];
        if (Array.isArray(value)) {
          initialData[field.name] = value.join("\n");
        } else {
          initialData[field.name] = value || "";
        }
      }
    });
    setTextData(initialData);
  }, [item, formFields]);

  const handleTextChange = (e) => {
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
      const response = await fetch(`${API_BASE_URL}${apiEndpoint}/${item.id}`, {
        method: "POST", // Use POST for FormData
        headers: {
          Authorization: `Bearer ${token}`,
        },
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

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h3>
          Editing Item: <span className="id-column">{item.id}</span>
        </h3>
        <form onSubmit={handleSubmit}>
          {formFields.map((field) => {
            const currentFileUrl = field.dbColumn ? item[field.dbColumn] : null;
            return (
              <div className="input-group" key={field.name}>
                <label htmlFor={`edit-${field.name}`}>{field.label}</label>
                {(() => {
                  switch (field.type) {
                    case "textarea":
                      return (
                        <textarea
                          id={`edit-${field.name}`}
                          name={field.name}
                          value={textData[field.name] || ""}
                          onChange={handleTextChange}
                          rows={field.rows || 4}
                        />
                      );
                    case "file":
                      return (
                        <div>
                          {currentFileUrl && (
                            <div className="file-preview">
                              {field.accept.startsWith("image/") && (
                                <img src={currentFileUrl} alt="Current file preview" />
                              )}
                              {field.accept.startsWith("audio/") && (
                                <audio controls src={currentFileUrl} />
                              )}
                            </div>
                          )}
                          <input
                            type="file"
                            id={`edit-${field.name}`}
                            name={field.name}
                            accept={field.accept}
                            onChange={handleFileChange}
                          />
                          <small>
                            Upload a new file to replace the current one. Leave empty to keep the
                            existing file.
                          </small>
                        </div>
                      );
                    default:
                      return (
                        <input
                          type="text"
                          id={`edit-${field.name}`}
                          name={field.name}
                          value={textData[field.name] || ""}
                          onChange={handleTextChange}
                        />
                      );
                  }
                })()}
              </div>
            );
          })}
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

export const ContentManager = ({
  title,
  apiEndpoint,
  formFields,
  tableColumns,
  EditorComponent,
}) => {
  const { token } = useAuth();
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [editingItem, setEditingItem] = useState(null);
  const [showUploader, setShowUploader] = useState(false);

  const fetchItems = useCallback(async () => {
    setIsLoading(true);
    setError("");
    try {
      const response = await fetch(`${API_BASE_URL}${apiEndpoint}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!response.ok) throw new Error("Failed to fetch content.");
      const data = await response.json();
      setItems(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }, [apiEndpoint, token]);

  useEffect(() => {
    fetchItems();
    setShowUploader(false); // Reset uploader visibility on navigation
    setEditingItem(null); // Reset editor visibility on navigation
  }, [fetchItems]);

  const handleDelete = async (itemId) => {
    if (!window.confirm("Are you sure you want to delete this item?")) return;
    try {
      const response = await fetch(`${API_BASE_URL}${apiEndpoint}/${itemId}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      if (response.status !== 204) {
        const result = await response.json().catch(() => ({ message: "Failed to delete" }));
        throw new Error(result.message);
      }
      setItems(items.filter((item) => item.id !== itemId));
    } catch (err) {
      setError(`Deletion Error: ${err.message}`);
    }
  };

  const handleSave = (updatedItem) => {
    setItems(items.map((item) => (item.id === updatedItem.id ? updatedItem : item)));
    setEditingItem(null);
  };

  // Use the custom EditorComponent if provided, otherwise fall back to the generic one
  const Editor = EditorComponent || GenericEditorForm;

  return (
    <div className="content-manager">
      <h2>{title} Management</h2>
      <div className="content-manager-actions">
        <button className="btn-primary" onClick={() => setShowUploader(!showUploader)}>
          {showUploader ? "Hide Uploader" : "Create New Item"}
        </button>
      </div>

      {showUploader && (
        <Uploader
          title={`Create New ${title} Item`}
          apiEndpoint={apiEndpoint}
          formFields={formFields}
        />
      )}

      <div className="content-table-container">
        <h3>Existing Content</h3>
        {isLoading && <p>Loading content...</p>}
        {error && <p className="error-message">{error}</p>}
        <table className="content-table">
          <thead>
            <tr>
              {tableColumns.map((col) => (
                <th key={col.key}>{col.header}</th>
              ))}
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                {tableColumns.map((col) => (
                  <td key={col.key} className={col.key === "id" ? "id-column" : ""}>
                    {String(item[col.key] || "N/A")}
                  </td>
                ))}
                <td>
                  <div className="action-buttons">
                    <button className="btn-edit" onClick={() => setEditingItem(item)}>
                      Edit
                    </button>
                    <button className="btn-delete" onClick={() => handleDelete(item.id)}>
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {items.length === 0 && !isLoading && <p>No content found.</p>}
      </div>

      {editingItem && (
        <Editor
          item={editingItem}
          formFields={formFields} // Pass formFields for the generic editor to use
          apiEndpoint={apiEndpoint}
          token={token}
          onSave={handleSave}
          onCancel={() => setEditingItem(null)}
        />
      )}
    </div>
  );
};
