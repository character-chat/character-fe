import './assets/css/style.min.css'
import './assets/fonts/material-icon/css/material-design-iconic-font.min.css'
import './assets/vendor/bootstrap-datepicker/css/bootstrap-datepicker.min.css'

import { useEffect } from "react";

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return <Component {...pageProps} />;
}
