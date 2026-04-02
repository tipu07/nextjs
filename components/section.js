import React from "react";

export default function Section({ children, id, className, style }) {
  return (
    <>
      <section id={id} className={`${className || ""}`} style={style}>
        {children}
      </section>
    </>
  );
}
