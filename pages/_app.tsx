import "../public/css/chat/css/chat.css";

// import 'bootstrap/dist/css/bootstrap.min.css';

// import '../public/css/index/css/bootstrap-theme.css'
// import '../public/css/index/css/slippry.css'
// import '../public/css/index/assets/css/style.css'

import "../public/css/chat/fonts/material-icon/css/material-design-iconic-font.min.css";
import "../public/css/chat/vendor/bootstrap-datepicker/css/bootstrap-datepicker.min.css";

import { Provider } from "react-redux";
import store from "../store";
import { SessionProvider } from "next-auth/react";

import { useEffect } from "react";

import type { AppProps } from "next/app";

type ExtendedAppProps = AppProps & {
  pageProps: {
    session: any;
  };
};

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: ExtendedAppProps) {
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </SessionProvider>
  );
}
