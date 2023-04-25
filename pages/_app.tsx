import '../public/assets/css/style.min.css'
import '../public/assets/fonts/material-icon/css/material-design-iconic-font.min.css'
import '../public/assets/vendor/bootstrap-datepicker/css/bootstrap-datepicker.min.css'
import { useRouter } from 'next/router';
import {Provider} from "react-redux"
import store from "../store"

import { useEffect } from "react";

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return <Provider store={store}><Component {...pageProps} /></Provider>;
}
