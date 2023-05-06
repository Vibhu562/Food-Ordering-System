import React from "react"

export default function Error({ error }) {
  return (
    <div className="mt-10">
      <div className="alert alert-danger mt-10" role="alert">
        {error}
      </div>
    </div>
  );
}
