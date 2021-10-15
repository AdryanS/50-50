import React from "react";

import { Global } from "./style";

export default function index() {
  return (
    <>
      <Global />
      <div className="container">
        <div className="progress_container">
          <div className="progress"></div>

          <div className="circle active">1</div>
          <div className="circle">2</div>
          <div className="circle">3</div>
          <div className="circle">4</div>
        </div>
      </div>
    </>
  );
}
