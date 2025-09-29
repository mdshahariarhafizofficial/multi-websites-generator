import React from "react";
import Hero from "./Hero";
import Contact from "./Contact";

export default function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        width: "100%"
      }}
    >
      <Hero />
      <Contact />
    </div>
  );
}
