import Link from 'next/link';

export default function Component() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#003A70] my-10">
            <div className="container flex flex-col items-center justify-center gap-6 px-4 md:px-6">
                <div className="space-y-2 text-center">
                    <h2 className="text-3xl font-bold tracking-tighter text-gray-50 md:text-4xl">
                        Pociten - Empresa de Desatascos en Madrid
                    </h2>
                    <p className="max-w-[600px] text-gray-400 md:text-xl lg:text-base xl:text-xl">
                        ¡No dejes que un atasco arruine tu día! Servicio rápido
                        y efectivo a solo una llamada.
                    </p>
                </div>
                <Link href="tel:+34647376782">
                    <a className="inline-flex h-12 items-center justify-center rounded-md bg-[#08B9B5] px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:scale-110 hover:text-[#003A70]  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6366F1] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
                        <PhoneIcon className="mr-2 h-5 w-5" />
                        LLAMA AHORA
                    </a>
                </Link>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
                    {[
                        {
                            title: 'Mejor Valoración',
                            description:
                                'La mejor valoración en Google. Descubre por qué nuestros clientes confían en nosotros.',
                            stars: 5,
                            icon: (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="50"
                                    height="50"
                                    viewBox="0 0 14 14"
                                >
                                    <g
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M6 1.05a1.18 1.18 0 0 1 2 0l1.94 3.07l2.53.31a1.16 1.16 0 0 1 .75 1.91l-2.11 2.42l.68 3.35a1.17 1.17 0 0 1-.46 1.17a1.19 1.19 0 0 1-1.26.07L7 11.67l-3.07 1.68a1.19 1.19 0 0 1-1.26-.07a1.17 1.17 0 0 1-.46-1.17l.68-3.35L.78 6.34a1.16 1.16 0 0 1 .75-1.91l2.53-.31Z" />
                                        <path d="M7 9.52v-4H6m-.5 4h3" />
                                    </g>
                                </svg>
                            ),
                        },
                        {
                            title: 'Mayor Calidad',
                            description:
                                'La excelencia en la calidad es nuestra seña de identidad. Confía en nuestros productos y servicios.',
                            stars: 5,
                            icon: (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="60"
                                    height="60"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M2 5v8h2v-2h6l2-2l-2-2H4V5zm18 0v2h-8l2 2l-2 2h8v2h2V5zm-8 8s-2 2.17-2 3.5a2 2 0 0 0 2 2a2 2 0 0 0 2-2c0-1.33-2-3.5-2-3.5"
                                    />
                                </svg>
                            ),
                        },
                        {
                            title: 'Económicos',
                            description:
                                'Calidad y economía en todos nuestros productos y servicios. Compruébalo llamándonos ahora.',
                            stars: 5,
                            icon: (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="60"
                                    height="60"
                                    viewBox="0 0 56 56"
                                    fill="currentColor"
                                    className="mb-2"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M28 52C14.745 52 4 41.255 4 28S14.745 4 28 4s24 10.745 24 24s-10.745 24-24 24m4.411-20.48v-1.797h-8.97c-.031-.429-.063-.874-.063-1.351s.032-.939.08-1.384h8.953v-1.797h-8.588c1.034-3.451 3.88-5.233 7.475-5.233c1.097 0 2.401.128 3.085.287v-3.022c-.652-.207-2.035-.366-3.117-.366c-5.47 0-9.924 2.847-11.133 8.334h-3.276v1.797h3.006c-.048.445-.064.907-.064 1.384c0 .46.016.922.064 1.351h-3.006v1.798h3.276c1.21 5.487 5.646 8.35 11.15 8.35c1.112 0 2.432-.128 3.116-.319v-3.037c-.636.174-1.972.27-3.117.27c-3.61 0-6.441-1.797-7.475-5.264z"
                                    />
                                </svg>
                            ),
                        },
                    ].map((card) => (
                        <div
                            key={card.title}
                            className="bg-[#08B9B5] p-6 rounded-lg shadow-md flex flex-col items-center justify-center"
                        >
                            {card.icon}
                            <div className="flex items-center gap-2 my-2">
                                {Array.from({ length: 5 }, (_, i) => (
                                    <StarIcon
                                        key={i}
                                        className={`w-5 h-5 ${
                                            i < card.stars
                                                ? 'fill-primary'
                                                : 'fill-none stroke-muted'
                                        }`}
                                    />
                                ))}
                            </div>
                            <h3 className="text-xl font-bold mt-4 text-[gray-900 dark:text-gray-50]">
                                {card.title}
                            </h3>
                            <p className="text-[#003A70] mt-2 text-justify">
                                {card.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
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

function StarIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="#F0CF05"
            stroke="#F0CF05"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
    );
}
