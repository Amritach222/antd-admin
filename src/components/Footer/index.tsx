import type { CSSProperties } from "react";

const Footer = () => {
  const footerStyle: CSSProperties = {
    textAlign: "center",
    fontSize: "14px",
    color: "#666",
  };

  return (
    <div style={footerStyle}>
      <p>© {new Date().getFullYear()} Pesewa Admin. All rights reserved.</p>
    </div>
  );
};

export default Footer;
