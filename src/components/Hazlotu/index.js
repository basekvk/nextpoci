import Link from 'next/link';

export default function Hazlotu() {
    return (
        <section id='hazlotumismo' className="w-full py-12 md:py-24 lg:py-32 bg-white-100">
            <div className="container px-4 md:px-6">
                <div className="grid items-center justify-center gap-6 text-center">
                    <div className="space-y-3">
                        <h2 className="text-3xl text-[#003A70] font-bold tracking-tighter sm:text-4xl md:text-5xl">
                            Desatasca Tu Mismo Como un Profesional
                        </h2>
                        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                            Descarga nuestra guía PDF gratuita para aprender los
                            mejores consejos y trucos para desatascar tuberías
                            de forma rápida y efectiva.
                        </p>
                    </div>
                    <Link href="https://drive.google.com/file/d/1F_U9adwOGuyGuMYxO-2xLm0NHMucCoZq/view?usp=sharing">
                        <a className="inline-flex items-center justify-center px-6 py-3 bg-[#003A70] text-white text-lg font-semibold rounded-md transition-transform transform hover:scale-105 hover:bg-[#00BBB4] hover:text-[#003A70]">
                            <DownloadIcon className="mr-2 h-6 w-6" />
                            Descargar PDF
                        </a>
                    </Link>
                    <p className="text-lg mt-4 uppercase">
                        Si necesitas más ayuda, no dudes en{' '}
                        <a
                            href="tel:+34647376782"
                            className="text-[#00BBB4] underline"
                        >
                            llamarnos
                        </a>
                        .
                    </p>
                </div>
            </div>
        </section>
    );
}

function DownloadIcon(props) {
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
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" x2="12" y1="15" y2="3" />
        </svg>
    );
}
