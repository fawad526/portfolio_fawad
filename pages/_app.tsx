import '@/styles/global.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import type { AppProps } from 'next/app';
import { SectionStateProvider } from 'context/section_state_provider';
import { Analytics } from '@vercel/analytics/react';

config.autoAddCss = false;

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SectionStateProvider>
      <Component {...pageProps} />
      <Analytics />
    </SectionStateProvider>
  );
}
