import React, { useState, useEffect } from 'react';
import Link from 'next/link';


export default function CookiePopup() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Comprobar si el usuario ya ha aceptado las cookies anteriormente
        const hasAcceptedCookies = localStorage.getItem('hasAcceptedCookies');
        if (!hasAcceptedCookies) {
            setIsVisible(true);
        }
    }, []);

    const handleClose = () => {
        setIsVisible(false);
        // Guardar la preferencia del usuario en localStorage
        localStorage.setItem('hasAcceptedCookies', 'true');
    };

    const handleOpen = () => {
        setIsVisible(false);
        // Guardar la preferencia del usuario en localStorage
        localStorage.setItem('hasAcceptedCookies', 'false');
    };

    if (!isVisible) return null;
    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 flex flex-col items-center justify-center gap-4 p-4 bg-gray-100 dark:bg-gray-800 rounded-t-xl shadow-lg">
            <p className="text-center text-sm text-gray-500 dark:text-gray-400">
            Utilizamos cookies de terceros para asegurar que damos la mejor experiencia al usuario en nuestra web. Si continuas navegando entendemos que aceptas las condiciones de uso. Puedes obtener más información en nuestra{' '}
                <Link className="/cookies" href="#">
                    política de cookies
                </Link>
                .
            </p>
            <div className="flex items-center gap-4">
                <button className="px-4 py-2 text-white bg-black rounded hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black" onClick={handleClose}>
                    Aceptar
                </button>
                <button className="px-4 py-2 text-black bg-white border border-black rounded hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500" onClick={handleOpen}>
                    Rechazar
                </button>
            </div>
            <a href="/cookies" className="mt-4 text-gray-600 underline">
                Ver Más
            </a>
        </div>
    );
}
