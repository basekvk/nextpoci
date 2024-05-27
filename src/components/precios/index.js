import Image from 'next/image';

export default function Precios() {
    return (
        <>
            <section className="bg-[#003A70] py-10">
                <div className="flex flex-col items-center my-8">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        className="mb-2 text-[#00BBB4]"
                        fill="currentColor"
                    >
                        <path d="M12 12.5a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7M10.5 16a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0" />
                        <path d="M17.526 5.116L14.347.659L2.658 9.997L2.01 9.99V10H1.5v12h21V10h-.962l-1.914-5.599zM19.425 10H9.397l7.469-2.546l1.522-.487zM15.55 5.79L7.84 8.418l6.106-4.878zM3.5 18.169v-4.34A3.008 3.008 0 0 0 5.33 12h13.34a3.009 3.009 0 0 0 1.83 1.83v4.34A3.009 3.009 0 0 0 18.67 20H5.332A3.01 3.01 0 0 0 3.5 18.169" />
                    </svg>
                    <h2 className="text-2xl md:text-4xl font-bold text-center text-white uppercase">
                        Listado de Precios de Desatascos y Pocería
                    </h2>
                </div>
                <div className="flex flex-col md:flex-row items-center w-full px-4 lg:px-24 my-20">
                    <div className="md:flex-1 relative mb-8 md:mb-0">
                        <Image
                            alt="Precios de desatascos Pociten"
                            className="object-cover w-full h-full rounded-lg"
                            src="/images/precios/precio_desatascos-pociten.jpg"
                            layout="responsive"
                            height={350}
                            width={450}
                        />
                    </div>
                    <div className="md:flex-1 bg-white rounded-lg shadow-lg p-4 w-full">
                        <table className="min-w-full bg-white">
                            <thead>
                                <tr>
                                    <th className="uppercase font-semibold bg-[#003A70] text-white py-2 px-4">
                                        SERVICIO
                                    </th>
                                    <th className="uppercase font-semibold bg-[#003A70] text-white py-2 px-4">
                                        PRECIO ESTIMADO* (€)
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { service: 'DESATASCO DE TUBERÍAS DE LAVABO, BAÑERA O DUCHA', price: '70 - 150' },
                                    { service: 'DESATASCO DE TUBERÍAS DE FREGADERO O LAVAVAJILLAS', price: '70 - 150' },
                                    { service: 'DESATASCO DE TUBERÍAS DE INODORO', price: '70 - 150' },
                                    { service: 'DESATASCO DE TUBERÍAS PRINCIPALES (INTERIOR)', price: '100 - 300' },
                                    { service: 'DESATASCO DE TUBERÍAS PRINCIPALES (EXTERIOR)', price: '200 - 600' },
                                    { service: 'DESATASCO CON EQUIPO DE ALTA PRESIÓN', price: '150 - 400' },
                                    { service: 'INSPECCIÓN CON CÁMARA DE TUBERÍAS (POR HORA)', price: '80 - 150' },
                                    { service: 'LOCALIZACIÓN DE ARQUETAS O POZOS', price: '100 - 300' },
                                    { service: 'LIMPIEZA DE ARQUETAS O POZOS', price: '150 - 400' },
                                    { service: 'REPARACIÓN DE TUBERÍAS (POR HORA)', price: '60 - 150' },
                                    { service: 'SUSTITUCIÓN DE SECCIONES DE TUBERÍA (POR METRO)', price: '100 - 200' },
                                    { service: 'INSTALACIÓN DE SIFONES O VÁLVULAS ANTIRRETORNO', price: '100 - 250' },
                                ].map((item, index) => (
                                    <tr key={index} className="hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                                        <td className="bg-[#00BBB4] text-white py-2 px-4">
                                            {item.service}
                                        </td>
                                        <td className="bg-[#00BBB4] text-white py-2 px-4">
                                            {item.price}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="w-full flex justify-center mt-4">
                    <div className="max-w-3xl px-4 md:px-8">
                        <p className="text-base text-white mt-10">
                            <strong>*Notas:</strong>
                        </p>
                        <ul className="list-disc list-inside text-base text-white mb-10">
                            <li>
                                Los precios de desatascos y pocería pueden
                                incrementarse en un 20-50% para servicios de
                                emergencia fuera de horario regular o en fines
                                de semana y festivos. El precio reflejado es una
                                estimación y puede variar según la ubicación y
                                dificultad del servicio.
                            </li>
                            <li>
                                El precio estimado corresponde por hora de
                                trabajo. El tiempo de trabajo puede variar
                                dependiendo de la dificultad del servicio.
                            </li>
                            <li>
                                Para trabajos que requieran permisos, como obras
                                en vía pública, el coste no está incluido.
                            </li>
                            <li>
                                Los precios de reparaciones y sustituciones
                                pueden variar significativamente dependiendo del
                                material necesario (por ejemplo, PVC, cobre,
                                etc.) y la dificultad de acceso.
                            </li>
                            <li>
                                Los precios que se muestran en esta web no son
                                concluyentes. Recomendamos siempre nos solicites un
                                presupuesto detallado adaptado a tus necesidades
                                específicas antes de contratar un servicio. Pociten primero
                                diagnosticará el problema y te proporcionará un
                                presupuesto claro desglosando costes antes de
                                comenzar el trabajo.
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
}
