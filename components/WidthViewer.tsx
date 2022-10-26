"use client";

import { useEffect, useState } from "react";
import styles from "./style.module.css";

export default function WidthViewer() {
  const [width, setWidth] = useState<number | null>();

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div className={styles.container}>
      <h1>Hello World! Width: {width}</h1>
      <h2>Using App Directory. View me using the device toolbar.</h2>

      <p>
        Repo:
        <a
          href="https://github.com/codekcv/nextjs-appdir-responsiveness-issue"
          target="_blank"
          rel="noopener noreferrer"
        >
          HERE
        </a>
      </p>

      <p>
        Issue:
        <a
          href="https://github.com/vercel/next.js/issues/41842"
          target="_blank"
          rel="noopener noreferrer"
        >
          HERE
        </a>
      </p>
    </div>
  );
}
