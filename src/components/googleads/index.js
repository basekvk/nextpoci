import Script from 'next/script';

const GoogleAdsScript = () => {
    return (
        <>
            <script
                async
                src="https://www.googletagmanager.com/gtag/js?id=AW-16469717403"
            ></script>
            <script>
                window.dataLayer = window.dataLayer || []; function gtag()
                {dataLayer.push(arguments)}
                gtag('js', new Date()); gtag('config', 'AW-16469717403');
            </script>
        </>
    );
};

export default GoogleAdsScript;
