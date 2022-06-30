import { Head } from "next/document";
import React, { useEffect, useState } from "react";

import { Global } from "./style";

export default function index() {
  const [index, setIndex] = useState(1);
  const [next, setnext] = useState(false);
  const [prev, setprev] = useState(false);

  function nextStep() {
    const circle = document.querySelectorAll(".circle")[index];

    if (index < 4) {
      setIndex(index + 1);
      circle.classList.add("active");
    } else {
      return;
    }
  }

  function prevStep() {
    const circle = document.querySelectorAll(".circle")[index - 1];

    if (index <= 1) {
      return;
    } else {
      setIndex(index - 1);
      circle.classList.remove("active");
    }
  }

  useEffect(() => {
    if (index == 4) {
      setnext(true);
    } else {
      setnext(false);
    }

    if (index == 1) {
      setprev(true);
    } else {
      setprev(false);
    }
  }, [index]);

  return (
    <>
      <Head>
        <title>Progress</title>
      </Head>

      <Global />
      <div className="container">
        <div className="progress_container">
          <div
            className="progress"
            style={{ width: [0, 120, 210, 320][index - 1] }}
          ></div>

          <div className="circle active">1</div>
          <div className="circle">2</div>
          <div className="circle">3</div>
          <div className="circle">4</div>
        </div>

        <div className="buttons">
          <button onClick={() => prevStep()} disabled={prev}>
            prev
          </button>
          <button onClick={() => nextStep()} disabled={next}>
            next
          </button>
        </div>
      </div>
    </>
  );
}
