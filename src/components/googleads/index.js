// components/GoogleAdsTag.js

import Script from 'next/script';

const GoogleAdsTag = () => {
  return (
    <>
      {/* Script para cargar gtag.js */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-16469717403"
        strategy="afterInteractive"
        async
      />
      {/* Script para configurar gtag */}
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-16469717403');
        `}
      </Script>
    </>
  );
};

export default GoogleAdsTag;

