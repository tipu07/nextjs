import React from "react";

export default function Heading({
  as: Tag = "h1",
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
