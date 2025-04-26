import React from "react";
import { useLocation } from "react-router-dom";

export default function Contact() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const agent = params.get("agent");

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>Contact {agent}</h1>
      <p>Send your message to {agent}!</p>
    </div>
  );
}
