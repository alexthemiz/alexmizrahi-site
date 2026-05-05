"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

const inputStyle: React.CSSProperties = {
  backgroundColor: "#000040",
  border: "1px solid #c0c0c0",
  color: "#ffffff",
  fontFamily: "var(--font-vt323), monospace",
  fontSize: "22px",
  padding: "8px 12px",
  width: "100%",
  outline: "none",
  boxSizing: "border-box",
};

const labelStyle: React.CSSProperties = {
  fontFamily: "var(--font-vt323), monospace",
  fontSize: "20px",
  color: "#e8c84a",
  display: "block",
  marginBottom: "6px",
};

export default function GuestbookForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [visitingFrom, setVisitingFrom] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, visitingFrom, message }),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <p
        style={{
          fontFamily: "var(--font-vt323), monospace",
          fontSize: "28px",
          color: "#00ff00",
        }}
      >
        Thanks for signing the guestbook!
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <div>
        <label style={labelStyle}>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={inputStyle}
        />
      </div>

      <div>
        <label style={labelStyle}>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
        />
      </div>

      <div>
        <label style={labelStyle}>Where are you visiting from?</label>
        <input
          type="text"
          value={visitingFrom}
          onChange={(e) => setVisitingFrom(e.target.value)}
          style={inputStyle}
        />
      </div>

      <div>
        <label style={labelStyle}>Message</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          rows={5}
          style={{ ...inputStyle, resize: "vertical" }}
        />
      </div>

      <div>
        <button
          type="submit"
          disabled={status === "loading"}
          style={{
            fontFamily: "var(--font-vt323), monospace",
            fontSize: "24px",
            color: "#ffff00",
            backgroundColor: "#000080",
            border: "2px solid #ffff00",
            padding: "8px 24px",
            cursor: status === "loading" ? "default" : "pointer",
            opacity: status === "loading" ? 0.6 : 1,
          }}
        >
          {status === "loading" ? "sending..." : "* sign it *"}
        </button>
      </div>

      {status === "error" && (
        <p
          style={{
            fontFamily: "var(--font-vt323), monospace",
            fontSize: "20px",
            color: "#ff6666",
            margin: 0,
          }}
        >
          Something went wrong. try emailing me directly.
        </p>
      )}
    </form>
  );
}
