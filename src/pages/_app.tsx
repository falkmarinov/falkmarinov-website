import type { AppProps } from 'next/app';
import { NextIntlProvider } from 'next-intl';

import '../styles/tailwind.css';

interface PageProps {
  messages: any;
}

function MyApp({ Component, pageProps }: AppProps<PageProps>) {
  return (
    <NextIntlProvider messages={pageProps.messages}>
      <Component {...pageProps} />
    </NextIntlProvider>
  );
}

export default MyApp;
