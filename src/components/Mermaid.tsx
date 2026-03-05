import React, { useEffect, useRef, useState } from "react";

import { Container } from "./Container";
import mermaid from "mermaid";

let mermaidCounter = 0;

export default function Mermaid({ children }) {
  const definition = typeof children === "string" ? children.trim() : "";
  const ref = useRef<HTMLDivElement>(null);
  const [id] = useState(() => `mermaid-${++mermaidCounter}`);

  useEffect(() => {
    if (ref.current && definition) {
      mermaid.mermaidAPI.render(id, definition, (result) => {
        ref.current.innerHTML = result;
      });
    }
  }, [id, definition]);

  return (
    <Container>
      <div key="faux" id={id} />
      <div key="preview" ref={ref} />
    </Container>
  );
}
