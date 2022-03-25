import React, { useEffect, useRef } from "react";

import { Container } from "./Container";
import mermaid from "mermaid";

export default function Mermaid({ definition, _key }) {
  const id = `mermaid-${_key}`;
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
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
