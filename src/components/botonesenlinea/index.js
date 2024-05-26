import Link from 'next/link';

export default function Botonesenlinea() {
    return (
        <div className="container flex w-full flex-col gap-4 sm:flex-row p-10">
            <button
                className="flex-1 flex items-center justify-center gap-2 bg-[#003A70] hover:bg-[#08B9B5] text-white hover:text-[#003A70] py-4 px-4 rounded transform transition-transform hover:scale-105"
                onClick={() => (window.location.href = '#hazlotumismo')}
            >
                <WrenchIcon className="h-5 w-5" />
                Hazlo tú mismo
            </button>
            <button
                className="flex-1 flex items-center justify-center gap-2 bg-[#003A70] hover:bg-[#08B9B5] text-white hover:text-[#003A70] py-4 px-4 rounded transform transition-transform hover:scale-105"
                onClick={() => (window.location.href = 'tel:+34647376782')}
            >
                <PhoneIcon className="h-5 w-5" />
                Llama ahora
            </button>
            <Link href="/contacto" passHref>
                <button className="flex-1 flex items-center justify-center gap-2 bg-[#003A70] hover:bg-[#08B9B5] text-white hover:text-[#003A70] py-4 px-4 rounded transform transition-transform hover:scale-105">
                    <ReceiptIcon className="h-5 w-5" />
                    Quiero un presupuesto
                </button>
            </Link>
        </div>
    );
}
function PhoneIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
    );
}

function ReceiptIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z" />
            <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
            <path d="M12 17.5v-11" />
        </svg>
    );
}

function WrenchIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
    );
}
