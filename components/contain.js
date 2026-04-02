import React from "react";

export default function Contain({ children, className }) {
  return (
    <>
      <div className={`contain ${className || ""}`}>{children}</div>
    </>
  );
}
