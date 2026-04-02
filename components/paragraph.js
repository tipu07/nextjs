import React from "react";

export default function Paragraph({
  as: Tag = "p",
  children,
  className,
  style,
  ...props
}) {
  return (
    <Tag className={className} style={style} {...props}>
      {children}
    </Tag>
  );
}
