import React, { useState, useEffect, useCallback } from "react";
import { useAuth } from "../context/AuthContext";
import { Uploader } from "./Uploader";

const API_BASE_URL = import.meta.env.VITE_API_URL;

// Reusable form component for editing items
const EditorForm = ({ item, formFields, apiEndpoint, token, onSave, onCancel }) => {
  const [formData, setFormData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Populate form with item data, handling JSON fields
    const initialData = {};
    formFields.forEach((field) => {
      const value = item[field.name];
      if (Array.isArray(value)) {
        initialData[field.name] = value.join("\n");
      } else {
        initialData[field.name] = value || "";
      }
    });
    setFormData(initialData);
  }, [item, formFields]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");

    // Prepare data, converting multiline text back to arrays if needed
    const payload = { ...formData };
    formFields.forEach((field) => {
      if (field.type === "textarea" && Array.isArray(item[field.name])) {
        payload[field.name] = formData[field.name].split("\n").filter((line) => line.trim() !== "");
      }
    });

    try {
      const response = await fetch(`${API_BASE_URL}${apiEndpoint}/${item.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.message || "Update failed");
      onSave(result); // Pass updated item back to parent
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h3>Editing Item: {item.id}</h3>
        <form onSubmit={handleSubmit}>
          {formFields
            .filter((field) => field.type !== "file") // Don't show file inputs in edit form
            .map((field) => (
              <div className="input-group" key={field.name}>
                <label htmlFor={`edit-${field.name}`}>{field.label}</label>
                {field.type === "textarea" ? (
                  <textarea
                    id={`edit-${field.name}`}
                    name={field.name}
                    value={formData[field.name] || ""}
                    onChange={handleChange}
                    rows={field.rows || 4}
                  />
                ) : (
                  <input
                    type="text"
                    id={`edit-${field.name}`}
                    name={field.name}
                    value={formData[field.name] || ""}
                    onChange={handleChange}
                  />
                )}
              </div>
            ))}
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

export const ContentManager = ({ title, apiEndpoint, formFields, tableColumns }) => {
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
  }, [fetchItems]);

  const handleDelete = async (itemId) => {
    if (!window.confirm("Are you sure you want to delete this item?")) return;
    try {
      const response = await fetch(`${API_BASE_URL}${apiEndpoint}/${itemId}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!response.ok) {
        const result = await response.json();
        throw new Error(result.message || "Failed to delete.");
      }
      setItems(items.filter((item) => item.id !== itemId)); // Optimistic update
    } catch (err) {
      setError(`Deletion Error: ${err.message}`);
    }
  };

  const handleSave = (updatedItem) => {
    setItems(items.map((item) => (item.id === updatedItem.id ? updatedItem : item)));
    setEditingItem(null);
  };

  return (
    <div className="content-manager">
      <h2>{title}</h2>

      <div className="content-manager-actions">
        <button className="btn-primary" onClick={() => setShowUploader(!showUploader)}>
          {showUploader ? "Hide Uploader" : "Create New Item"}
        </button>
      </div>

      {showUploader && (
        <Uploader title={`New ${title} Item`} apiEndpoint={apiEndpoint} formFields={formFields} />
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
                  <td key={col.key}>{item[col.key] || "N/A"}</td>
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
        <EditorForm
          item={editingItem}
          formFields={formFields}
          apiEndpoint={apiEndpoint}
          token={token}
          onSave={handleSave}
          onCancel={() => setEditingItem(null)}
        />
      )}
    </div>
  );
};
