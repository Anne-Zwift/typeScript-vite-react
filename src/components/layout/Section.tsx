import React from "react";

interface SectionProps {
  title: string;
  children: React.ReactNode;
  backgroundColor?: string;
}

export function Section({
  title,
  children,
  backgroundColor = '#f9f9f9',
}: SectionProps) {
  const sectionStyle = {
    padding: '20px',
    margin: '20px 0',
    backgroundColor: backgroundColor,
    border: '1px solid #ddd',    
  };

  return (
    <section style={sectionStyle}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
