import React from "react";
import { useRouteError } from "react-router-dom";

function Error() {
  const error = useRouteError();
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.error.message}</pre>
    </div>
  );
}

export default Error;
