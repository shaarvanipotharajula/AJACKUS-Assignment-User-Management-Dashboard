import React, { useState } from "react";
import "./UserForm.css";

const UserForm = ({ user, onClose, onSave, isAdding }) => {
  const [formData, setFormData] = useState({ ...user });
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");  // New state to hold error message

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    // Reset error before validation
    setError("");

    // Validate the form data
    if (!formData.firstname || !formData.lastname || !formData.email || !formData.birthDate || !formData.website) {
      setError("All fields are required.");
      return;  // Stop the save process if validation fails
    }

    setSaving(true);
    try {
      const url = isAdding
        ? "https://jsonplaceholder.typicode.com/users"
        : `https://jsonplaceholder.typicode.com/users/${user.id}`;
      const method = isAdding ? "POST" : "PUT";

      const response = await fetch(url, {
        method,
        body: JSON.stringify({
          firstname: formData.firstname,
          lastname: formData.lastname,
          email: formData.email,
          birthDate: formData.birthDate,
          website: formData.website,
        }),
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      });
      const savedUser = await response.json();
      onSave(savedUser);
    } catch (error) {
      console.error("Error saving user:", error);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="user-form-backdrop">
      <div className="user-form">
        <h2>{isAdding ? "Add User" : "Edit User"}</h2>
        {error && <div className="error-message">{error}</div>}  {/* Display error message */}
        <div className="form-field">
          <label>First Name: </label>
          <input
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
          />
        </div>
        <div className="form-field">
          <label>Last Name: </label>
          <input
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
          />
        </div>
        <div className="form-field">
          <label>Email: </label>
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-field">
          <label>Birth Date: </label>
          <input
            name="birthDate"
            type="date"
            value={formData.birthDate}
            onChange={handleChange}
          />
        </div>
        <div className="form-field">
          <label>Company: </label>
          <input
            name="website"
            value={formData.website}
            onChange={handleChange}
          />
        </div>
        <div className="user-form-actions">
          <button className="cancel-btn" onClick={onClose} disabled={saving}>
            Cancel
          </button>
          <button className="save-btn" onClick={handleSave} disabled={saving}>
            {saving ? "Saving..." : "Save"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserForm;
