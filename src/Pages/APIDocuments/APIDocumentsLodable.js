import React, { Suspense } from "react";
const APIDocuments = React.lazy(() => import("./APIDocuments"));

function APIDocumentsLodable() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <APIDocuments />
      </Suspense>
    </div>
  );
}

export default APIDocumentsLodable;
