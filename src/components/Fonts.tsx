import { Global } from "@emotion/react";

const Fonts = () => (
  <Global
    styles={`
      @import url('https://fonts.googleapis.com/css2?family=Raleway&display=swap');

      @font-face {
        font-family: 'MonoLisa';
        src: url('../../public/fonts/MonoLisa/MonoLisa-Regular.woff2') format('woff2'),
        url('../../public/fonts/MonoLisa/MonoLisa-Regular.woff') format('woff'),
        font-weight: 700;
        font-style: normal;
        font-display: swap;
      }
      `}
  />
);

export default Fonts;
