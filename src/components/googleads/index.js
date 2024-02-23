import Script from 'next/script';

const GoogleAdsScript = () => {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=AW-16469717403`}
      />
      <Script id="google-ads-script" strategy="afterInteractive">
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

export default GoogleAdsScript;