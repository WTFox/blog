import { Global } from "@emotion/react";

const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'MonoLisa';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url('./fonts/MonoLisa-Regular.woff2') format('woff2'), url('./fonts/MonoLisa-Regular.woff') format('woff');
      }
      `}
  />
);

export default Fonts;
