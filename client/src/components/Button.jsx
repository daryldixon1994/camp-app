import React from "react";

function Button({ text, color }) {
  return (
    <div className="btn-main" style={{ color: `${color}` }}>
      {" "}
      {text}{" "}
    </div>
  );
}

export default Button;
