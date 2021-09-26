import React, { Suspense } from "react";

const DashBoard = React.lazy(() => import("./DashBoard"));

function DashBoardLoadable() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <DashBoard />
      </Suspense>
    </div>
  );
}

export default DashBoardLoadable;
