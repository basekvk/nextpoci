/**
 * v0 by Vercel.
 * @see https://v0.dev/t/md6MTSC2YOQ
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Image from 'next/image';
import Link from 'next/link';

export default function Component() {
    return (
        <section className="relative w-full h-[80vh] flex items-center justify-center bg-gradient-to-r from-[#003A70] to-[#00BBB4] overflow-hidden">
            <div className="container px-4 md:px-6 z-10 text-center">
                <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
                    Desatascos en Madrid -Pociten
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
                    No cobramos desplazamiento. Desatascos, Desatrancos, Obras
                    de Pocería,Inspecciones con Cámara, Alcantarillado,
                    Arquetas, Fosas Sépticas, Red de Saneamiento, Bajantes.
                    Poceros en Madrid con los mejores precios.
                </p>
                <div className="flex flex-col gap-2 sm:gap-4 sm:flex-row justify-center mt-8">
                    <button className="inline-flex h-10 sm:h-12 items-center justify-center rounded-md bg-gradient-to-r from-[#003A70] to-[#00BBB4] px-6 sm:px-8 text-sm sm:text-base font-medium text-gray-50 shadow transition-colors hover:bg-gradient-to-l hover:from-[#00BBB4] hover:to-[#003A70] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 transform hover:scale-105 transition-transform duration-300">
                        <a href="tel:+34647376782" className="text-white">
                            LLAMA AHORA{' '}
                        </a>
                    </button>
                    <button className="inline-flex h-10 sm:h-12 items-center justify-center rounded-md border border-gray-200  bg-white px-6 sm:px-8 text-sm sm:text-base font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50  transform hover:scale-105 transition-transform duration-300">
                        <Link href="/contacto">CONTACTA</Link>
                    </button>
                </div>
            </div>
            <Image
                alt="Hero Background"
                className="absolute inset-0 w-full h-full object-cover opacity-50"
                src="/images/hero/1.webp"
                layout="fill"
                objectFit="cover"
                quality={75}
                priority={true}
            />
        </section>
    );
}
