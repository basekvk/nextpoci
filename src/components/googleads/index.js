import Script from 'next/script';

const GoogleAdsScript = () => {
    return (
        <>
            <Script
                async
                src="https://www.googletagmanager.com/gtag/js?id=AW-16469717403"
            ></Script>
            <Script>
                window.dataLayer = window.dataLayer || []; function gtag()
                {dataLayer.push(arguments)}
                gtag('js', new Date()); gtag('config', 'AW-16469717403');
            </Script>
        </>
    );
};

export default GoogleAdsScript;
