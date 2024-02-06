// hooks/useGoogleAnalytics.js
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const useGoogleAnalytics = () => {
    const router = useRouter();

    useEffect(() => {
        const handleRouteChange = (url) => {
            // Comprueba si gtag está definido antes de llamarlo
            if (typeof window.gtag === 'function') {
                window.gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
                    page_path: url,
                });
            }
        };

        router.events.on('routeChangeComplete', handleRouteChange);
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange);
        };
    }, [router.events]);
};

export default useGoogleAnalytics;
