import React from "react";

interface ComingSoonProps {
  title?: string;
}

const ComingSoon: React.FC<ComingSoonProps> = ({ title = "Feature" }) => {
  return (
    <div style={{ padding: "2rem", textAlign: "center", fontSize: "1.2rem" }}>
      <h2>Oops! {title} are coming soon 🚧</h2>
    </div>
  );
};

export default ComingSoon;