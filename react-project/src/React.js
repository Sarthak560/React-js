import { useState } from "react";
import Card from "./components/Card";
import BgChanger from "./bgchanger";

function React() {
  let [count, setCount] = useState(0);

  const addValue = () => {
    setCount((prev) => {
      if (prev < 20) {
        return prev + 1;
      }
      return prev;
    });
  };

  const removeValue = () => {
    setCount((prev) => {
      if (prev > 0) {
        return prev - 1;
      }
      return prev;
    });
  };

  return (
    <div
      style={{
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "#f4f6f8",
        fontFamily: "Segoe UI, Arial, sans-serif",
      }}
    >
      <div
        style={{
          background: "#fff",
          padding: "0.1em 10em",
          borderRadius: "10em",
          boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1.5em",
        }}
      >
        <span
          style={{
            fontSize: "1.25em",
            color: "#222",
            fontWeight: "500",
            marginBottom: "0.5em",
          }}
        >
          React Component
        </span>
        <h1
          className="text-4xl font-bold text-white"
          style={{
            backgroundColor: "#e5e7eb",
            color: "#222",
            padding: "0.5em 2em",
            borderRadius: "0.5em",
            display: "inline-block",
            fontWeight: "600",
            fontSize: "2em",
            border: "1px solid #d1d5db",
          }}
        >
          Counter value : {count}{" "}
        </h1>
        <div style={{ display: "flex", gap: "1em" }}>
          <button
            onClick={addValue}
            style={{
              background: "#2563eb",
              color: "#fff",
              border: "none",
              borderRadius: "0.5em",
              padding: "0.5em 1.5em",
              fontSize: "1em",
              fontWeight: "500",
              cursor: "pointer",
              borderBottom: "2px solid #1e40af",
              transition: "background 0.2s",
            }}
          >
            Add Value
          </button>
          <button
            onClick={removeValue}
            style={{
              background: "#64748b",
              color: "#fff",
              border: "none",
              borderRadius: "0.5em",
              padding: "0.5em 1.5em",
              fontSize: "1em",
              fontWeight: "500",
              cursor: "pointer",
              borderBottom: "2px solid #334155",
              transition: "background 0.2s",
            }}
          >
            Remove Value
          </button>
        </div>
        <Card />
      </div>
      <BgChanger />
    </div>
  );
}

export default React;
