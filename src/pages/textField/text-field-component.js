import React, { useState } from "react";

export const TextField = () => {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div style={{ padding: "20px", maxWidth: "300px", margin: "auto" }}>
      <label
        htmlFor="basic-text-field"
        style={{ display: "block", marginBottom: "10px" }}
      >
        Enter Text:
      </label>
      <input
        id="basic-text-field"
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Type something..."
        style={{
          width: "100%",
          padding: "8px",
          fontSize: "16px",
          border: "1px solid #ccc",
          borderRadius: "4px",
        }}
      />
      <p style={{ marginTop: "10px" }}>You typed: {text}</p>
    </div>
  );
};

export const MultiLineTextField = () => {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <label
        htmlFor="multi-line-text-field"
        style={{ display: "block", marginBottom: "10px", fontWeight: "bold" }}
      >
        Enter your message:
      </label>
      <textarea
        id="multi-line-text-field"
        value={text}
        onChange={handleChange}
        placeholder="Type your message here..."
        rows="5"
        style={{
          width: "100%",
          padding: "10px",
          fontSize: "16px",
          border: "1px solid #ccc",
          borderRadius: "4px",
          resize: "vertical", // Allows vertical resizing
        }}
      />
      <p style={{ marginTop: "10px" }}>
        You wrote: <br />
        <em>{text}</em>
      </p>
    </div>
  );
};

export const TextFieldWithPrefixSuffix = () => {
  const [text, setText] = useState(0);

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <label
        htmlFor="text-field-prefix-suffix"
        style={{ display: "block", marginBottom: "10px", fontWeight: "bold" }}
      >
        Amount:
      </label>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          border: "1px solid #ccc",
          borderRadius: "4px",
          padding: "5px",
          backgroundColor: "#f9f9f9",
        }}
      >
        <span style={{ marginRight: "5px", color: "#555" }}>$</span>
        {/* Prefix */}
        <input
          id="text-field-prefix-suffix"
          type="number"
          value={text}
          onChange={handleChange}
          placeholder="Enter amount"
          style={{
            flex: "1",
            border: "none",
            outline: "none",
            padding: "5px",
            fontSize: "16px",
          }}
        />
        <span style={{ marginLeft: "5px", color: "#555" }}>USD</span>
        {/* Suffix */}
      </div>
      <p style={{ marginTop: "10px" }}>
        You entered: {text ? `$${text} USD` : "nothing yet"}
      </p>
    </div>
  );
};

export const PasswordField = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (event) => {
    setPassword(event.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        maxWidth: "400px",
        margin: "0 auto",
      }}
    >
      <label
        htmlFor="password"
        style={{ display: "block", marginBottom: "8px" }}
      >
        Password
      </label>
      <input
        id="password"
        type={showPassword ? "text" : "password"}
        value={password}
        onChange={handleChange}
        placeholder="Enter your password"
        style={{
          width: "100%",
          padding: "10px",
          fontSize: "16px",
          border: "1px solid #ccc",
          borderRadius: "4px",
        }}
      />
      <button
        onClick={togglePasswordVisibility}
        style={{
          position: "absolute",
          right: "4px",
          top: "50%",
          background: "none",
          border: "none",
          cursor: "pointer",
          color: "#000",
        }}
      >
        {showPassword ? "Hide" : "Show"}
      </button>
    </div>
  );
};

export const TextFieldWithValidation = () => {
  const [text, setText] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const handleChange = (event) => {
    const value = event.target.value;
    if (value.length < 5) {
      setError("Text must be at least 5 characters long.");
    } else {
      setError(null);
    }
    setText(value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (text.length >= 5) {
      setSuccess("Form submitted successfully!");
    } else {
      setError("Text must be at least 5 characters long.");
    }
  };
  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <form onSubmit={handleSubmit}>
        <label
          htmlFor="text-field-validation"
          style={{ display: "block", marginBottom: "10px", fontWeight: "bold" }}
        >
          Enter Text:
        </label>
        <input
          id="text-field-validation"
          type="text"
          value={text}
          onChange={handleChange}
          placeholder="Type something..."
          style={{
            width: "100%",
            padding: "8px",
            fontSize: "16px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            oultine: "none",
          }}
        />
        {error && <p style={{ color: "red", marginTop: "5px" }}>{error}</p>}
        {success && (
          <p style={{ color: "green", marginTop: "5px" }}>{success}</p>
        )}
        <button type="submit" style={{ marginTop: "10px" }}>
          Submit
        </button>
      </form>
    </div>
  );
};
